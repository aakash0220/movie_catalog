import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const initialState = {fname:"", lname:"", userID:"", password:""};
const Signin = ({setIsLoggedIn, setUserName, setUserID}) => {
    const [user, setUser] = useState(initialState);
    const {fname, lname, userID, password} = user;
    const [err, setErr] = useState("");
    
    const handleFnameChange = (e) => {
        setUser({...user, fname: e.target.value})
    }
    const handleLnameChange = (e) => {
        setUser({...user, lname: e.target.value})
    }
    const handleUserIDChange = (e) => {
        setUser({...user, userID: e.target.value})
    }
    const handlePasswordChange = (e) => {
        setUser({...user, password: e.target.value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post('http://localhost:8000/newUser', {fname, userID, password})
        .then((res)=>{
            console.log(res.data);
            if (res.data.account === "created"){
                setIsLoggedIn(true);
                setUserID(userID);
                setUserName(fname);
                setErr("Account created successfully..")
            }else {
                setErr("Something went wrong..")
            }
        })
        .catch((err)=>{
            console.log(err.message);
            setErr("Server error..");
        })
    }
    return (
        <div className="signin">
            <h2>{err}</h2>
            <h2 className="signin-title">Create a new account</h2><br></br>
            <form onSubmit={handleSubmit} className="sigin-form">
                <ul className="form-ul">
                    <li className="form-li"><label htmlFor="firstname">First name</label><input id="firstname" type="text" onChange={handleFnameChange} required></input></li>
                    <li className="form-li"><label htmlFor="lastname">Last name</label><input id="lastname" type="text" onChange={handleLnameChange}></input></li>
                    <li className="form-li"><label htmlFor="userid">UserID</label><input id="userid" type="text" onChange={handleUserIDChange} required></input></li>
                    <li className="form-li"><label htmlFor="password">Password</label><input id="password" type="password" onChange={handlePasswordChange} required></input></li>
                </ul>
                <button type="submit">Create</button>
            </form><br></br>
            <p className="signin-para">Already have an account ? <Link to="/movie_catalog/userlogin">Login</Link></p>
        </div>
    );
}
export default Signin;