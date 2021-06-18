const { request, response } = require('express');
const express = require('express');
const app = express()

app.use((request,response,next) =>{
    console.log('有人请求了服务器2');
    next();
})

app.get('/cars',(request,response) =>{
    const cars = [
        {id:'001',name:'奔驰',price:199},
        {id:'002',name:'大众',price:129},
        {id:'003',name:'宝马',price:119},
        {id:'004',name:'保时捷',price:299},
    ]
    response.send(cars);
})

app.listen(5001,(err)=>{
    if(!err) console.log('服务器请求成功了，地址为：http://localhost:5001/cars');
})