import { useEffect, useState } from "react";
import Collection from "./Collection";
import axios from "axios";

const UserDashboard = ({userName, userID, favMovie, setFavMovie, setDMovieID}) => {
    const [showFav, setShowFav] = useState(false);
    const [confirmedUpdate, setConfirmedUpdate] = useState(false);
    const [fav, setFav] = useState([]);
    const [remove, setRemove] = useState("");

    const handleShowClick = () => {
        setShowFav(!showFav);
    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/fav/${userID}`)
             .then((res)=>{
                console.log(res.data);
                setFav(res.data);
             })
             .catch((err)=>{
                console.log(err.message);//display the error on screen
             })
    },[confirmedUpdate])

    useEffect(()=>{
        if (JSON.stringify(favMovie) !== '{}') {
            axios.post(`http://localhost:8000/add/${userID}`, {favMovie})
                .then((res)=>{
                    console.log(res.data);
                    setConfirmedUpdate(!confirmedUpdate);
                    setFavMovie({});
                })
                .catch((err)=>{
                    console.log(err.message)
                })
        }
        // return(setFavMovie({}));
        // setFavMovie({});
    },[favMovie])

    useEffect(()=>{
        console.log(remove);
        if (remove !== "") {
            axios.post(`http://localhost:8000/remove/${userID}`, {remove})
                .then((res)=>{
                    console.log(res.data);
                    setConfirmedUpdate(!confirmedUpdate);
                })
                .catch((err)=>{
                    console.log(err.message)
                })
        }
    },[remove])

    return (
        <div className="userdashboard">
            <h2>Welcome {userName} !!</h2><br></br>
            <button onClick={handleShowClick}>{
                showFav? "Hide Favourites":
                "Show Favourites"
            }
            </button>
            {showFav?<Collection movies={fav} setFavMovie={setFavMovie} setRemove={setRemove} isFavCollection={true} isUser={true} setDMovieID={setDMovieID}/>:""}
        </div>
    );
}
export default UserDashboard;