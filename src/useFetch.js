import { useState,useEffect } from "react";

const useFetch = (url) =>{
    const [data,setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState('')

    useEffect(()=>{
        fetch(url)
            .then(res=>{
                if(!res.ok){
                    throw Error('could not fetch the data')
                }
                return res.json()
            })
            .then(data=>{
                setData(data)
                setLoading(false)
                setError(null)
            })
            .catch(err=>{
                setLoading(false)
                setError(err.message);
            })
    },[url]) //rerun the data whenever url change
    return {data,loading,error}
}
export default useFetch;