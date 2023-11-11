import Collection from "./Collection";
import { useState, useEffect } from "react";
import axios from 'axios';
const Search = ({text}) => {
    const [movies, setMovies] = useState([{}]);
    const [buffer, setBuffer] = useState(true);
    const [found, setFound] = useState(false);
    const [error, setError] = useState(""); //handling both error as well as error msg.. because error msg is dynamic..
    let display;
    
    useEffect(()=>{
      setError("");
      setFound(false);
      setBuffer(true);
      axios.get(`https://www.omdbapi.com/?apikey=df5bc49f&s=${text}`)
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
    },[text]);

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
            <h2>Search results for "{text}"..</h2>
            <Collection movies={movies}/>
          </div>
        }
      }
    }

    return (
        <div>
            {display}
        </div>
    );
}
export default Search;