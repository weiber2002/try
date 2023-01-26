import { useState } from "react";

const Create = () => {

    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('mario');
    const [loading,setLoading] =useState(false)

    const handleSubmit =(e)=>{
        e.preventDefault(); // prevent refresh
        const blog = {title,body,author};
        setLoading(true)
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type": "application/json"}, //telling the server we are sending json
            body:JSON.stringify(blog) //要變成json的檔案
        }).then(()=>{
            console.log('add blog')
            setLoading(false)
        })
    }
    return (  
        <div>
            <h2>add a new blog</h2>
            {/* form used to collect user input */}
            <form onSubmit={handleSubmit}> 
                <label>Blog title:</label>
                <input  
                    type='text'
                    required
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)} //使input可以輸入 不會被固定
                />
                <label>Blog content:</label>
                    <textarea 
                        required
                        value = {body}
                        onChange ={(e)=>setBody(e.target.value)}                    
                    >
                    
                    </textarea>
                <label>Blog author</label>
                <select
                    value = {author}
                    onChange={(e)=> setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="toshi">toshi</option>
                </select>
                {!loading && <button>Add blog</button>}
                {loading && <button disabled>Add blog</button>}
            </form>
        </div>
    );
}
 
export default Create;