import { useState, useEffect } from "react";
import Fruit from "./Fruit";
import useFetch from "./useFetch";

const Main = () =>{
    const {data:fruitt,loading,error} = useFetch('http://localhost:8000/blogs'); //data:fruitt 抓來的data叫做fruitt
    
    

    return(
        <div>
            <h2>I love fruit</h2>
            {error}
            {loading && <div>loading</div>}
            {fruitt &&<Fruit fruit={fruitt} />}
        </div>
    )
}

export default Main;    