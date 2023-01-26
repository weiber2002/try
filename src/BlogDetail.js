import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams(); //grab parameters from route
    const {data:blog,error,loading} = useFetch('http://localhost:8000/blogs/'+id);

    return (  
        <div>
            {loading&& <div>loading....</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>{blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;