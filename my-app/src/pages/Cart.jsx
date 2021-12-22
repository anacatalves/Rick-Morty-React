import ShoppingCart from "../components/shoppingCart";
import React, { Component, useState } from 'react'


function Cart () {
    let [cartItems, setCartItems] = useState([]);

    

    

    return (
        <ShoppingCart cartItems={cartItems}></ShoppingCart>
        
    )

export default Cart
