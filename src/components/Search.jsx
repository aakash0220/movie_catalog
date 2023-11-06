import Collection from "./Collection";
import { useState, useEffect } from "react";
import axios from 'axios';
const Search = ({text, search}) => {
    const [movies, setMovies] = useState([{}]);
    const [error, setError] = useState(false);
    
    useEffect(()=>{
      setError(false);
      axios.get(`https://www.omdbapi.com/?apikey=df5bc49f&s=${text}`)
           .then((res)=>{
            console.log(res);
            if (res.data.Response === 'True'){
              setMovies(res.data.Search);
            }else{
              setError(true);
            }
           })
           .catch((err)=>{
            console.log(err);
           })
    },[text]);
    return (
        <div>
            {search?<h2>Search results for "{text}"...</h2>:<h2>{text}</h2>}
            {error?"No result found..":<Collection movies={movies}/>}
        </div>
    );
}
export default Search;