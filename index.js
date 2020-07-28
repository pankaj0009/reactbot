const express=require('express');
const app=express();
app.get('/a',(req,res)=>{
    res.send({'hello':'kya bhai'});
});
const PORT=process.env.PORT || 5000;
app.listen(PORT);