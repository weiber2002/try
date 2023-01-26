import { useState, useEffect } from "react";
import Fruit from "./Fruit";

const Main = () =>{
    const [fruitt,setFruitt] = useState(null);
    const [loading, setLoading] = useState(true);
    const title = 'loved fruit';

    

    useEffect(()=>{
        fetch('http://localhost:8000/blogs')
            .then(res=>{
                return res.json()
            })
            .then(data=>{
                setFruitt(data)
                setLoading(false)
            })
    },[])
    return(
        <div>
            <h2>I love fruit</h2>
            {loading && <div>loading</div>}
            {fruitt &&<Fruit fruit={fruitt} title={title} />}
        </div>
    )
}

export default Main;    