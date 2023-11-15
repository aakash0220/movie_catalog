import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const initialState = {fname:"", lname:"", userID:"", password:""};
const Signin = ({setIsLoggedIn, setUserName, setUserID}) => {
    const [user, setUser] = useState(initialState);
    const {fname, lname, userID, password} = user;
    
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
            }else {
                setVerified(false);
            }
        })
        .catch((err)=>{
            console.log(err.message);
        })
    }
    return (
        <div className="login">
            <h2>Create a new account</h2><br></br>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstname">First name</label><input id="firstname" type="text" onChange={handleFnameChange}></input><br></br>
                <label htmlFor="lastname">Last name</label><input id="lastname" type="text" onChange={handleLnameChange}></input><br></br>
                <label htmlFor="userid">UserID</label><input id="userid" type="text" onChange={handleUserIDChange}></input><br></br>
                <label htmlFor="password">Password</label><input id="password" type="password" onChange={handlePasswordChange}></input><br></br><br></br>
                <button type="submit">Create</button>
            </form><br></br>
            <p>Already have an account ? <Link to="/movie_catalog/userlogin">Login</Link></p>
        </div>
    );
}
export default Signin;