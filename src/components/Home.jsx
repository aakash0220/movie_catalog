import Search from "./Search";

const Home = () =>{
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
        <div className="home">
            {/* <Collection title="Comedy" movies={comedy}/> */}
            <Search text="Action"/>
            <Search text="Comedy"/>
            <Search text="Romance"/>
            <Search text="Horror"/>
        </div>
    );
}
export default Home;