import Signin from "./Signin";
import UserDashboard from "./UserDashboard";

const UserSignin = ({isLoggedIn, setIsLoggedIn, userName, setUserName, userID, setUserID, favMovie, setFavMovie}) => {
    return (
        <div className="user-login">
            {isLoggedIn?<UserDashboard userName={userName} userID={userID} favMovie={favMovie} setFavMovie={setFavMovie}/>:<Signin setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} setUserID={setUserID}/>}
        </div>
    );
}
export default UserSignin;