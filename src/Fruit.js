const Fruit = ({fruit,title}) =>{
    return(
        <div>
            {fruit.map(fruits=>(
                <div key={fruits.id}>
                    <h3>{title}</h3>
                    <p>{fruits.body}</p>
                    
                </div>

            ))}
        </div>
    )
}
export default Fruit;