import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
         <div>
            <h2>Sorry</h2>
            <p>the page can't be found</p>
            <Link to="/">Back to the end</Link>
         </div>
     );
}
 
export default NotFound;