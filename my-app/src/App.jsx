import './assets/css/main.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import Episodes from "./pages/Episodes"
import Locations from "./pages/Locations"
import ShoppingCart from "./pages/ShoppingCart"
import Navbar from './components/navbar';
import { useState } from 'react';

function App() {
  
  let [cartItems, setCartItems] = useState([]);
  let [subTotal, setSubTotal] = useState (0);

  /* newItem = character in charactersCards.jsx */
  const addToCart = (newItem) => {
    const checkNewItemExists = (item) => item.id === newItem.id; /* to check the existance of a repeated item */
      if (cartItems.some(checkNewItemExists)) {
        let sum = 0; 
        
        return (
          <div>item already exists in the cart</div>
        )
    } 
      else {
        //const updatedCart = [...cartItems, newItem]; 
      }

      //setCartItems (updatedCart);

  }
  
  return (
    
    <Router>

      <div className="body-container">

        <Navbar></Navbar>

        <Routes>
          <Route path= "/" element= {<Home addToCart={addToCart}/>}/>
          <Route path= "/episodes" element= {<Episodes/>}/>
          <Route path= "/locations" element= {<Locations/>}/>
          <Route path= "/cart" element= {<ShoppingCart/>}/>
        </Routes>

      </div>

    </Router>
  );
}

export default App;
