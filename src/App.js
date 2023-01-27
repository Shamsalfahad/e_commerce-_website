
import './App.css';
import About from './Components/Pages/About';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Pages/Home';
import Navigationbar from './Components/Parts/Navigationbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navigationbar></Navigationbar>
      <Link to={"/about"}>About
      </Link>
      <Link to={"/home"}>Home</Link>
      <Routes>
      <Route path ="/home" element={<Home/>}/>
      <Route path ="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
