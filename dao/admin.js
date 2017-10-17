const express=require('express');
const path = require('path');
module.exports=function (){
    let router=express.Router();

    router.get('/', (req, res)=>{
        res.render('index.html');
    });

    router.post('/login',(req,res)=>{
        console.log(req);
    });

    return router;
};
