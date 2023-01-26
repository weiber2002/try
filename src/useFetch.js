import { useState,useEffect } from "react";

const useFetch = (url) =>{
    const [data,setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState('')
    

    useEffect(()=>{
        const abortCont = new AbortController();
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
                if(err.name ==='AbortError')
                    console.log('fetch error')
                else{
                    setLoading(false)
                    setError(err.message);
                }
            })
            return ()=> abortCont.abort();
    },[url]) //rerun the data whenever url change
    return {data,loading,error}
}
export default useFetch;