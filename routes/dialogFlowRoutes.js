const chatbot=require("../chatbot/chatbot");
const dialogFlow=require('dialogflow');
const config=require('../config/keys');
//const structjsnon=require('./structjson');
const bodyParser=require('body-parser');
const { response } = require('express');
const sessionClient=new dialogFlow.SessionsClient();
const sessionPath=sessionClient.sessionPath(config.googleProjectID,config.dialogFlowSessionID);
module.exports=app=>{
    app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.send({'hello':'kya bhai'});
});

app.post('/api/df_text_query',async (req,res)=>{
 
    let responses=await chatbot.textQuery(req.body.text,req.body.parameters);

    res.send(responses[0].queryResult);
    
});
app.post('/api/df_event_query', async (req,res)=>{
  //  let responses=await chatbot.eventQuery(req.body.event,req.body.parameters);
  let responses=await chatbot.eventQuery(req.body.text,req.body.parameters);

  res.send(responses[0].queryResult);
});
}