const Movie = ({movie}) => {
    return (
        <div className="movie">
            <img className="thumbnail"src={movie.Poster} alt="Movie Poster"></img>
            <div className="rating">{movie.Year}</div>
            <div className="title">{movie.Title}</div>
            {/* <button className="action">Watch</button>
            <button className="trailer">Trailer</button> */}
        </div>
    );
}
export default Movie;