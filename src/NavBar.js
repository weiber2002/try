import { Link } from "react-router-dom";

const NavBar =()=>{
    return(
        <nav>
            <h1>bloglist</h1>
            <Link to='/'>home</Link>
            <Link to = "/create">new blog</Link>
        </nav>
    );
}

export default NavBar;