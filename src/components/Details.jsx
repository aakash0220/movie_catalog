import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Details = ({dmovieID}) => {
    const [details, setDetails] = useState({});
    useEffect(()=>{
        axios.get(`https://www.omdbapi.com/?apikey=df5bc49f&i=${dmovieID}`)
        .then((res)=>{
            console.log(res.data);
            setDetails(res.data);
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }, [dmovieID])
    return (
        <div className="details">
            <Link to='/movie_catalog/search'><button>Close</button></Link>
            <br></br>
            <h2>{details.Title}</h2>
            <div className="top-detail">
                <p className="top-title">{details.Year}</p>
                {/* <p>R{details.Released}</p> */}
                <p className="top-title">{details.Runtime}</p>
                <p className="top-title">{details.Rated}</p>
                {/* <p>G{details.Genre}</p> */}
                {/* <p>L{details.Language}</p> */}
            </div>
            <br></br>
            <div className="hero-detail">
                <div className="poster"><img src={details.Poster} alt="movie_poster"/></div>
                <div className="plot">
                    <p><span className="plot-title">Plot</span></p>
                    <p>{details.Plot}</p><br></br>
                    <p><span className="plot-title">Director</span> : {details.Director}</p><br></br>
                    <p><span className="plot-title">Actors</span> : {details.Actors}</p>
                </div>
            </div>
        </div>
    )
}
export default Details;