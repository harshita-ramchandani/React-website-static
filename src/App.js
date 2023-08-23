import './App.css';
import React, { Component }  from 'react';
import Navbar from './components/navbar';
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { Menu } from '@material-ui/core';

// every react app runs from the function App
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
         <Route path="/" exact element={<Home/>}/> 
         <Route path="/menu" exact element={<Menu/>}/> 
         <Route path="/about" exact element={<About/>}/> 
         <Route path="/contact" exact element={<Contact/>}/> 
        </Routes>
        <Footer/>
      </Router>
      
      
    </div>
  );
}

export default App;
