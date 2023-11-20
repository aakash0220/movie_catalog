import UserDashboard from "./UserDashboard";

const Home = ({isLoggedIn, userName, userID, favMovie, setFavMovie, setDMovieID}) =>{

    // const comedy = [
    //     {
    //       Title: "Star Wars: Episode IV - A New Hope",
    //       Year: "1977",
    //       imdbID: "tt0076759",
    //       Type: "movie",
    //       Poster: "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
    //     },
    // ];
    
    return (
        <div>
            {isLoggedIn ? <UserDashboard userName={userName} userID={userID} favMovie={favMovie} setFavMovie={setFavMovie} setDMovieID={setDMovieID}/>: <h2>Search for your favourite movie..</h2>}
        </div>
    );
}
export default Home;