import Movie from "./Movie";

const Collection = ({title, movies}) => {
    return (
        <div className="collection">
            <h2 className="collection-title">{title}</h2>
            <div className="collection-movies">
            {movies.map(movie => <Movie key={movie.imdbID} movie={movie}/>)}
            </div>
        </div>
    );
}
export default Collection;