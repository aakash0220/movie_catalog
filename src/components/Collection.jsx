import Movie from "./Movie";

const Collection = ({title, movies, setFavMovie, setRemove, isFavCollection}) => {
    return (
        <>
        {movies.length === 0 ? <h3>Nothing to show</h3>: 
        <div className="collection">
            <h2 className="collection-title">{title}</h2>
            <div className="collection-movies">
            {movies.map(movie => <Movie movie={movie} setFavMovie={setFavMovie} setRemove={setRemove} isFavCollection={isFavCollection}/>)}
            </div>
        </div>}
        </>
    );
}
export default Collection;