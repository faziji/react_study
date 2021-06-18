const { request, response } = require('express');
const express = require('express');
const app = express()

app.use((request,response,next) =>{
    console.log('有人请求了服务器1');
    next();
})

app.get('/students',(request,response) =>{
    const students = [
        {id:'001',name:'zhu',age:199},
        {id:'002',name:'xiang',age:129},
        {id:'003',name:'fa',age:119},
    ]
    response.send(students);
})

app.listen(5000,(err)=>{
    if(!err) console.log('服务器请求成功了，地址为：http://localhost:5000/students');
})