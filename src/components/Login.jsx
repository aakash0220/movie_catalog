import axios from "axios";
import { useState } from "react";

const initialState = {userID:"", password:""};
const Login = ({setIsLoggedIn, setUserName, setUserID}) => {
    const [verified, setVerified] = useState(true);
    const [user, setUser] = useState(initialState);
    const {userID, password} = user;
    
    const handleUserIDChange = (e) => {
        setUser({...user, userID: e.target.value})
    }
    const handlePasswordChange = (e) => {
        setUser({...user, password: e.target.value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post('http://localhost:8000/login', {userID, password})
        .then((res)=>{
            console.log(res.data);
            if (res.data.user === "verified"){
                setIsLoggedIn(true);
                setUserID(userID);
                setUserName(res.data.userName);
            }else {
                setVerified(false);
            }
        })
        .catch((err)=>{
            console.log(err.message);
        })
    }
    
    return (
        <div className="signin">
            {!verified? <h2>Invalid UserID or Password</h2>:""}
            <br></br>
            <form onSubmit={handleSubmit}>
                <ul className="form-ul">
                    <li className="form-li"><label htmlFor="userid">UserID</label><input id="userid" type="text" onChange={handleUserIDChange} required></input></li>
                    <li className="form-li"><label htmlFor="password">Password</label><input id="password" type="password" onChange={handlePasswordChange} required></input></li>
                </ul>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
export default Login;