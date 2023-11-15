import Login from "./Login";
import UserDashboard from "./UserDashboard";


const UserLogin = ({isLoggedIn, setIsLoggedIn, userName, setUserName, userID, setUserID, favMovie, setFavMovie}) => {
    return (
        <div className="user-login">
            {isLoggedIn?<UserDashboard userName={userName} userID={userID} favMovie={favMovie} setFavMovie={setFavMovie}/>:<Login setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} setUserID={setUserID}/>}
        </div>
    );
}
export default UserLogin;