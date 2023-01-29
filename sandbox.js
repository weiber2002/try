fetch('todo/todo.json').then((res)=>{
    console.log('resolved',res)
    return res.json(); //get the res data and  & return promise
}).then(data=>{
    console.log(data)
}).catch(err=>{
    console.log(err)
});