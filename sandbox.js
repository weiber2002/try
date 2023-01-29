const getTodo = (resource,callback) =>{
    
    return new Promise((resolve,reject)=>{
        const request = new XMLHttpRequest(); //execute on server to avoid block happens


            request.addEventListener('readystatechange',()=>{
                //console.log(request,request.readyState)
                if(request.readyState===4 && request.status === 200){
                    const data = JSON.parse(request.responseText) //convert json to javascript //原本回傳的是json
                    resolve(data)
                }else if(request.readyState===4){
                    reject('error getting')
                }
            })

            request.open('GET',resource) //use live server can handle cors problem
            request.send(); //send request
        
    })
}

getTodo('todo/mario.json').then(data=>{
    console.log(data)
    return getTodo('todo/todo.json');
}).then((data)=>{
    console.log(data)
})
.catch(err=>{
    console.log(err)
})
