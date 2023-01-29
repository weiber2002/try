//async & await so the code can carry on
const getTodo = async()=>{ //async will return promise
    const response = await fetch('todo/todo.json')  //await stop from assigning the value until fetch is done
    if(response.status!==200){
        throw new Error('cant fetch the data');
    }
    const data = await response.json();
    return data;
}
getTodo(). //得到一個promise
    then(data=>{console.log(data)}).catch(err=>console.log(err))

// fetch('todo/todo.json').then((res)=>{
//     console.log('resolved',res)
//     return res.json(); //get the res data and  & return promise
// }).then(data=>{
//     console.log(data)
// }).catch(err=>{
//     console.log(err)
// });