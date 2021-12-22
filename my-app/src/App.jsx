import {react, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import Navbar from './components/navbar';
import Episodes from "./pages/Episodes"
import Locations from "./pages/Locations"
import ShoppingCart from "./pages/ShoppingCart"
import './assets/css/main.css';

function App() {

  return (
    
    <Router>

      <div className="body-container">

        <Navbar></Navbar>

        <Routes>
          <Route path= "/" element= {<Home/>}/>
          <Route path= "/episodes" element= {<Episodes/>}/>
          <Route path= "/locations" element= {<Locations/>}/>
          <Route path= "/cart" element= {<ShoppingCart/>}/>
        </Routes>

      </div>

    </Router>
  );
}

export default App;
