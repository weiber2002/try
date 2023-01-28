const express = require('express')

const app = express();


app.listen(3000);
//由上而下執行，當GET符合時就lock住執行層面
app.get('/',(req,res)=>{
    //res.send('<p>home page</p>') //don't need to setHeader will automatically set 
    res.sendFile('./views/index.html', {root:__dirname}) // 第二個參數是給出相對路徑
});

app.get('/cc',(req,res)=>{
    res.redirect('/')
})  

app.get('/about',(req,res)=>{
    res.sendFile('./views/about.html', {root:__dirname})
});

app.use((req,res)=>{
    res.status(404).sendFile('./views/404.html',{root:__dirname})
}) //fire every req up to here