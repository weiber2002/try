import { Link } from "react-router-dom";
const Fruit = ({fruit}) =>{
    return(
        <div>
            {fruit.map(fruits=>(
                <div key={fruits.id}>
                    <Link to ={`/fruits/${fruits.id}`}>
                        <h3>{fruits.title}</h3>
                    </Link>
                    <p>{fruits.author}</p>
                    
                </div>

            ))}
        </div>
    )
}
export default Fruit;