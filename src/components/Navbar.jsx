import { useRef, useState } from "react";

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
            <input value={txt} type="string" className="nav-ele searchbar" placeholder="Search Movies..." onChange={(e) => {setTxt(e.target.value)}}></input>
            <div className="nav-ele search" onClick={handleClick}>Search</div>
            <div className="nav-ele profile">Profile</div>
        </div>
    );
}
export default Navbar;