import { useState } from "react";

const Navbar = ({setText}) => {
    const [txt,setTxt] = useState("");
    
    const handleClick = () => {
        setText(txt);
        // setTxt("");
    }
    return (
        <div className="navbar">
            <div className="nav-ele logo">Logo</div>
            <div className="nav-ele menu">Menu</div>
            <input type="string" className="nav-ele searchbar" placeholder="Type to Search for Movies..." onChange={(e) => {setTxt(e.target.value)}}></input>
            <div className="nav-ele search" onClick={handleClick}>Search</div>
            <div className="nav-ele profile">Profile</div>
        </div>
    );
}
export default Navbar;