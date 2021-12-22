import {react, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/navbar';
import Home from "./pages/Home"
import Episodes from "./pages/Episodes"
import Locations from "./pages/Locations"
import ShoppingCart from "./pages/ShoppingCart"
import './assets/css/main.css';

function App() {
  
  let [cartItems, setCartItems] = useState([]);
  let [subTotal, setSubTotal] = useState (0);

  /* newItem = character in charactersCards.jsx */
  const addToCart = (newItem) => {

    const checkNewItemExists = (item) => item.id === newItem.id; /* to check the existance of a repeated item in cart*/
      if (cartItems.some(checkNewItemExists)) {
  
        return (
          <div>Item already in the cart</div> /*we had to remove from our code???*/
        )
      } else {
        
        let sum = 0;

        newItem["price"] = Number.parseFloat(Math.floor(Math.random() * 200) + 1).toFixed(2);
        /*that is to give each item a random price which is a "string"*/

        const updatedCart = [...cartItems, newItem];

        updatedCart.forEach((item) => {
          sum = sum + Number.parseInt(item.price); /*le suma (como número) el precio a la variable sum=0*/
          })                                      
        
        setCartItems (updatedCart);
        setSubTotal (Number.parseFloat(sum).toFixed(2))
      }
  }

  const removeFromCart = (itemToRemove) => {
    let sum = 0;
    cartItems = cartItems.filter((item) => item.id !== itemToRemove.id);

    setCartItems(cartItems); /*actualizo filtrando los items que NO son iguales a los items que quiero remover*/

    /*vuelvo a sumar (recalculo) con los nuevos items que integran el CartItems, luego de remover*/ 

    cartItems.forEach((item) => {     
      sum = sum + Number.parseInt(item.price);
  }) 
    setSubTotal((Number.parseFloat(sum).toFixed(2))); 
  }
 
  return (
    
    <Router>

      <div className="body-container">

        <Navbar cartItems={cartItems}/>

        <Routes>
          <Route path= "/" element= {<Home addToCart={addToCart}/>}/>
          <Route path= "/episodes" element= {<Episodes addToCart={addToCart}/>}/>
          <Route path= "/locations" element= {<Locations addToCart={addToCart}/>}/>
          <Route path= "/cart" element= {<ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} subTotal={subTotal} />}/>
        </Routes>

      </div>

    </Router>
  );
}

export default App;
