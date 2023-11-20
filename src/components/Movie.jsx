import { Link } from "react-router-dom";

const Movie = ({movie, setFavMovie, setRemove, isFavCollection, isUser, setDMovie}) => {
    const handleAddClick = () =>{
        setFavMovie(movie);
    }
    const handleRemoveClick = () => {
        setRemove(movie.imdbID);
    }
    let display;
    if (isUser){
        if (isFavCollection){
            display = <button onClick={handleRemoveClick} className="add">Remove from favourites</button>
        }
        else {
            display = <button onClick={handleAddClick} className="add">Add to favourite</button>
        }
    }
    else {
        display = "";
    }
    const handleDetailClick = () => {
        setDMovie(movie.imdbID);
    }
    return (
        <div className="movie">
            <Link to='/movie_catalog/details'><img className="thumbnail"src={movie.Poster} alt="Movie Poster" onClick={handleDetailClick}></img></Link>
            <div className="rating">{movie.Year}</div>
            <Link to='/movie_catalog/details'><div className="title" onClick={handleDetailClick}>{movie.Title}</div></Link>
            {display}
        </div>
    );
}
export default Movie;