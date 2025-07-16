
import './App.css';
// import Router from "react-router-dom";//importing router to move across pages of nyka
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// importing components
import Header from "./components/Header/Header";
import Nykahomepage from './components/Nykahomepage/Nykahomepage';
import Women from "./components/Women/Women";
import Men from "./components/Men/Men";
import Home from './components/Home/Home';
import Kids from './components/Kids/Kids';
import Login from './components/LoginPage/Login';

function App() {



  return (
   <>
   {/* calling routing(moving from one page to another) */}
    <Router>
      <Header/>
      
      <Routes>

        <Route path="/" element={<Nykahomepage/>}></Route>
        <Route path="/Women" element={<Women/>}></Route>
        <Route path="/Men" element={<Men/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Kids" element={<Kids/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </Router>
 
   </>
  );
}

export default App;
