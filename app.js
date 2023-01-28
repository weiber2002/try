const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')
const Blog = require('./models/blog')


// express app
const app = express();

//connect to mongodb
const dbURI = 'mongodb+srv://weipo:sa20021207@cluster0.v5z3cgh.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbURI,{useNewUrlParser:true, useUnifiedTopology:true})
  .then((result)=>{
    app.listen(3000) // 連到在listen
    console.log('connect to db')
  })
  .catch((err)=> console.log(err))

// register view engine
app.set('view engine', 'ejs');

// middleware & static files //connect frontend
app.use(express.static('public'));
 
// app.use((req, res, next) => {
//   //console.log('new request made:');
//   //console.log('host: ', req.hostname);
//   //console.log('path: ', req.path);
//   //console.log('method: ', req.method);
//   next(); //if next isn't used it will stuck here
// });
app.use(morgan('dev'));

app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

app.get('/', (req, res) => {
  res.redirect('/blogs')
});

app.get('/about', (req, res) => { //partials 是訂好的 就不用特別重新定義
  res.render('about', { title: 'About' });
});
app.get('/blogs',(req,res)=>{
  Blog.find().sort({createdAt:-1 }) //descending the create time    
    .then((result)=>{
        res.render('index',{title:'All Blog', blogs:result})
    })
    .catch((err)=>console.log(err))
})
app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
