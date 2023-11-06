import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home'
import Search from './components/Search';

function App() {
  const [text, setText] = useState("");
  return(
    <div>
      <Navbar setText={setText}/>
      {text === ""? <Home/> : <Search text={text} search={true}/>}
    </div>
  );
}

export default App;