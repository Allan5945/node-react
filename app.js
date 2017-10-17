const express = require('express');
const server = express();
const static=require('express-static');
const bodyParser=require('body-parser');
const mysql=require('mysql');
const multer=require('multer');
const http = require("http");
const path = require('path');
const cookieParser=require('cookie-parser');
const cookieSession=require('cookie-session');
const expressRoute=require('express-route');
const consolidate = require('consolidate');


// 监听端口
server.listen(80,function () {
    console.log('服务器已经启动》》》》》》》》》》》》》》》》')
});  // 监听端口号

//1.解析cookie
server.use(cookieParser('sdfasl43kjoifguokn4lkhoifo4k3'));

//2.使用session
var arr=[];
for(var i=0;i<100000;i++){
    arr.push('keys_'+Math.random());
}
server.use(cookieSession({name: 'zns_sess_id', keys: arr, maxAge: 20*3600*1000}));

//3.post数据
server.use(bodyParser.urlencoded({extended: false}));
server.use(multer({dest: './static/upload'}).any());


// 配置视图
server.set('view engine','html');
server.set('views','./src/views');
server.engine('html',consolidate.ejs);


// 配置路由
server.use('/',require('./dao/admin')());
server.use('/login/',require('./dao/dao')());

// 配置静态资源目录
server.use(express.static(path.join(__dirname,'/src/views')));  // 配置静态资源路径 -相当于省略 /src/staticPublic 路径 - 如果你的静态资源存放在多个目录下面，你可以多次调用 express.static 中间件：


// 路由未路由到的
server.get('*',function (req,res) {
    res.render('404.html');
});

