import Collection from "./Collection";
import { useState, useEffect } from "react";
import axios from 'axios';
import UserDashboard from "./UserDashboard";
const Search = ({searchText, isLoggedIn, userName, userID, favMovie, setFavMovie}) => {
  if (searchText === ""){
    return (
      <>
      {isLoggedIn?<UserDashboard userName={userName} userID={userID} favMovie={favMovie} setFavMovie={setFavMovie}/>:""}
      <br></br>
      <h2>Nothing to search..</h2>
      </>
    );
  }
    const [movies, setMovies] = useState([{}]);
    const [buffer, setBuffer] = useState(true);
    const [found, setFound] = useState(false);
    const [error, setError] = useState(""); //handling both error as well as error msg.. because error msg is dynamic..
    let display;
    
    useEffect(()=>{
      axios.get(`https://www.omdbapi.com/?apikey=df5bc49f&s=${searchText}`)
           .then((res)=>{
            console.log(res);
            if (res.data.Response === 'True'){
              setMovies(res.data.Search);
              setFound(true);
              setBuffer(false);
            }
            else {
              setFound(false);
              setBuffer(false)
            }
           })
           .catch((err)=>{
            console.log(err.message);
            setError(err.message);
            setBuffer(false);
           })
      return ()=>{
        setError("");
        setFound(false);
        setBuffer(true);
        // setSearchText("");
      }
    },[searchText]);

    if (buffer){
      display = <h2>Please wait..</h2>;
    }else {
      if (error !== ""){
        display = <h2>{error}</h2>
      }
      else {
        if (!found){
          display = <h2>No result found..</h2>
        }
        else {
          display = <div>
            <h2>Search results for "{searchText}"..</h2>
            <Collection movies={movies} setFavMovie={setFavMovie}/>
          </div>
        }
      }
    }

    return (
        <div>
            {isLoggedIn?<UserDashboard userName={userName} userID={userID} favMovie={favMovie} setFavMovie={setFavMovie}/>:""}
            <br></br>
            {display}
        </div>
    );
}
export default Search;