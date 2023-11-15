import { useState } from "react";
import {Link} from 'react-router-dom';

const Navbar = ({setSearchText, setIsLoggedIn, isLoggedIn}) => {
    const [txt,setTxt] = useState("");
    // const [redirect, setRedirect] = useState("/movie_catalog/usersignin");
    
    const handleClick = () => {
        if (txt !== "") {
            setSearchText(txt);
        }
        setTxt("");
    }
    const handleLogClick = () => {
        setIsLoggedIn(false);
        // setRedirect("/movie_catalog/");
    }
    return (
        <div className="navbar">
            <Link to="/movie_catalog/"><div className="nav-ele logo">Logo</div></Link>

            <div className="nav-ele menu">Menu</div>

            <input value={txt} type="string" className="nav-ele searchbar" placeholder="Type to Search for Movies..." onChange={(e) => {setTxt(e.target.value)}}></input>

            <Link to="/movie_catalog/search"><div className="nav-ele search" onClick={handleClick}>Search</div></Link>

            <Link to="/movie_catalog/usersignin" ><div className="nav-ele profile" onClick={handleLogClick}>{isLoggedIn?"Log out":"Sign in"}</div></Link>
        </div>
    );
}
export default Navbar;