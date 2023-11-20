import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home'
import Search from './components/Search';
import { Route, Routes } from 'react-router-dom';
import Signin from './components/Signin';
import Login from './components/Login';
import UserLogin from './components/UserLogin';
import UserSignin from './components/UserSignin';
import Details from './components/Details';
import Movie from './components/Movie';


function App() {
  const [searchText, setSearchText] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("")
  const [userID, setUserID] = useState("");
  const [favMovie, setFavMovie] = useState({});
  const [dmovieID, setDMovieID] = useState("");
  
  // useEffect(()=>{
  //   return (setIsLoggedIn(false));
  // }, [])
  return(
    <div>
      <Navbar setSearchText={setSearchText} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>
      <Routes>
        <Route path="/movie_catalog/" element={<Home isLoggedIn={isLoggedIn} userName={userName} userID={userID} favMovie={favMovie} setFavMovie={setFavMovie} setDMovieID={setDMovieID}/>}/>
        <Route path="/movie_catalog/search" element={<Search searchText={searchText} isLoggedIn={isLoggedIn} userName={userName} userID={userID} favMovie={favMovie} setFavMovie={setFavMovie} setDMovieID={setDMovieID}/>}/>
        <Route path="/movie_catalog/signin" element={<Signin setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} setUserID={setUserID}/>}/>
        <Route path="/movie_catalog/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} setUserID={setUserID}/>}/>
        <Route path="/movie_catalog/userlogin" element={<UserLogin isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} userName={userName} setUserName={setUserName} userID={userID} setUserID={setUserID} favMovie={favMovie} setFavMovie={setFavMovie} setDMovieID={setDMovieID}/>}/>
        <Route path="/movie_catalog/usersignin" element={<UserSignin isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} userName={userName} setUserName={setUserName} userID={userID} setUserID={setUserID} favMovie={favMovie} setFavMovie={setFavMovie} setDMovieID={setDMovieID}/>}/>
        <Route path='/movie_catalog/details' element={<Details dmovieID={dmovieID}/>}/>
        <Route path='/movie_catalog/movie' element={<Movie/>}/>
      </Routes>
    </div>
  );
}

export default App;