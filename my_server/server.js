const express = require('express');
const cors = require('cors');
// const mysql = require("mysql2");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())

let credentials = [{fname: "Akash", userID : "akash0220", password : "0220"}]; //{fname, userID, password}..
let fav = [{userID:"akash0220", fav_obj:[
    {
        Title: "Star Wars: Episode IV - A New Hope",
        Year: "1977",
        imdbID: "tt0076759",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
    }
]}] //{userID, [fav_obj]}..

app.post('/newUser', (req, res)=>{
    const {fname, userID, password} = req.body;
    console.log({fname, userID, password});
    console.log("creating account...")
    credentials.push({fname, userID, password});
    res.json({"account":"created"});
})

app.post('/login', (req, res)=>{
    const {userID, password} = req.body;
    console.log({userID, password});
    console.log("verifiying...")
    for (i = 0; i < credentials.length; i++){
        if (credentials[i].userID === userID && credentials[i].password === password){
            console.log("verified!")
            res.json({"user":"verified", "userName":credentials[i].fname});
        }
    }
    // console.log("not verified!!")
    res.json({"user":"not_verified"});
})

app.get('/fav/:id', (req,res)=>{
    const {id} = req.params;
    console.log("sending fav_movies to "+id);
    for(i = 0; i < fav.length; i++){
        if (fav[i].userID === id){
            res.send(fav[i].fav_obj);
        }
    }
    res.send([]);
})

app.post('/add/:id', (req, res)=>{
    const {id} = req.params;
    const favMovie = req.body;
    if(JSON.stringify(favMovie) === '{}') res.send("cannot add")
    console.log("adding "+favMovie);
    console.log({id, favMovie});
    for (i = 0; i < fav.length; i++){
        if (fav[i].userID === id){
            fav[i].fav_obj.push(favMovie);
        }
    }
    console.log("added");
    res.send("added");
})

app.post('/remove/:id', (req, res)=>{
    const {id} = req.params;
    const {remove} = req.body;
    if(remove === "") res.send("cannot remove")
    console.log("removing "+remove);
    console.log({id, remove});
    for (i = 0; i < fav.length; i++){
        if (fav[i].userID === id){
            fav[i].fav_obj = fav[i].fav_obj.filter((movie) => {
                return (movie.imdbID != remove);
            })
        }
    }
    console.log("removed");
    res.send("removed");
})


app.listen(8000);
console.log("Server is now running on port 8000");