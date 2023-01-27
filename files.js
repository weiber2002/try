const fs = require('fs');

//readfile
fs.readFile('./docs/blog.txt',(err,data)=>{
  if(err){
    console.log(err);
  }
  console.log(data.toString());
});  //even though it takes time to read, it can still carry on and execute next code

fs.writeFile('./docs/blog1.txt','hello world',()=>{
  console.log('file was written');
})
if(!fs.existsSync('./assets')){
  fs.mkdir('./assets',(err)=>{ //一定要有function
  console.log(err)
  });
}
else{
  fs.rmdir('./assets',(err)=>{
    console.log(err);
  })
}

if(fs.existsSync('./docs/deleteme.txt')){
  fs.unlink('./docs/deleteme/txt',(err)=>{
    console.log(err);
  })
}
