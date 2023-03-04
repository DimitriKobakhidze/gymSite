import React from "react";
import {Route, Routes} from "react-router-dom"
import Home  from "./Pages/Home";
import About  from "./Pages/About";
import Contact from "./Pages/Contact";
import Exercises from "./Pages/Exercises";
import FoodSupplement from "./Pages/FoodSupplement";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Layout from "./Components/Layout/Layout";


const preloadedImages = {
  aboutBg: require("./Images/about.jpg")
}

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About bg={preloadedImages.aboutBg} />}></Route>
        <Route path="/exercises" element={<Exercises />}></Route>
        <Route path="/foodsupplement" element={<FoodSupplement />}></Route>
        <Route path="/contact" element={<Contact bg={preloadedImages.aboutBg} />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
