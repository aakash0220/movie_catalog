const Movie = ({movie, setFavMovie, setRemove, isFavCollection}) => {
    const handleAddClick = () =>{
        setFavMovie(movie);
    }
    const handleRemoveClick = () => {
        setRemove(movie.imdbID);
    }
    return (
        <div className="movie">
            <img className="thumbnail"src={movie.Poster} alt="Movie Poster"></img>
            <div className="rating">{movie.Year}</div>
            <div className="title">{movie.Title}</div>
            {!isFavCollection ? <button onClick={handleAddClick} className="add">Add to favourite</button>: <button onClick={handleRemoveClick} className="add">Remove from favourites</button>}
        </div>
    );
}
export default Movie;