import React from "react";
import {Link, Route, Routes} from "react-router-dom"
import Home  from "./Pages/Home";
import About  from "./Pages/About";
import Contact from "./Pages/Contact";
import Exercises from "./Pages/Exercises";
import FoodSupplement from "./Pages/FoodSupplement";
import Login from "./Pages/Login";
import Register from "./Pages/Register";




function App() {
  const [windowWidth,setWindowWidth] = React.useState(() => window.innerWidth)
  window.addEventListener("resize",() => setWindowWidth(window.innerWidth))
  return (
    <div className="app-div">
    <nav className="main-nav">
        {
          windowWidth > 1024 ? 
          <ul>
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/about">About</Link></li>
            <li><Link className="nav-link" to="/exercises">Exercises</Link></li>
            <li><Link className="nav-link" to="/foodsupplement">Food-Supplement</Link></li>
            <li><Link className="nav-link contact-margin" to="/contact">Contact</Link></li>
            <li><Link className="nav-link" to="/register">Register</Link></li>
            <li><Link className="nav-link" to="/login">Login</Link></li>
          </ul> 
          :
          <ul>
            <li className="drop-down-li">
              <Link className="nav-link home-link" to="/">Home</Link>
              <Link className="nav-link about-link" to="/about">About</Link>
              <Link className="nav-link contact-margin" to="/contact">Contact</Link>
            </li>
            {/* <li><Link className="nav-link about-link" to="/about">About</Link></li> */}
            <li><Link className="nav-link" to="/exercises">Exercises</Link></li>
            <li><Link className="nav-link" to="/foodsupplement">Food-Supplement</Link></li>
            {/* <li><Link className="nav-link contact-margin" to="/contact">Contact</Link></li> */}
            <li><Link className="nav-link" to="/register">Register</Link></li>
            <li><Link className="nav-link" to="/login">Login</Link></li>
          </ul> 
        }
    </nav>


    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/exercises" element={<Exercises />}></Route>
      <Route path="/foodsupplement" element={<FoodSupplement />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
    </div>
  );
}

export default App;
