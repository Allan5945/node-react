
const express=require('express');

module.exports=function (){
    var router=express.Router();
    router.get('/', (req, res)=>{
        res.send('我是web').end();
    });
    router.get('/aaa', (req, res)=>{
        res.send('woshi').end();
    });

    return router;
};
