const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
  //console.log(req.url,req.method); //running on the server can't read on the browser
  res.setHeader('Content-Type','text/html')
  let path = './views/';
  switch(req.url){
    case '/':
        path += 'index.html'
        res.statusCode = 200;
        break;
    case '/about':
        path += 'about.html'
        res.statusCode = 200;
        break;
    case '/about-me': //redirect 
        res.statusCode = 301;
        res.setHeader('Location','/about')
        break;
    default:
        path += '404.html'
        res.statusCode = 400;
        break;
  }
  fs.readFile(path,(err,data)=>{
    if(err){
        console.log(err)
        res.end(); //should tell the server that request is over
    }
    else{
        // res.write(data);
        // res.end(); 可以變成下面那行
        res.end(data);
    }
  })
});

// localhost is the default value for 2nd argument
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});

