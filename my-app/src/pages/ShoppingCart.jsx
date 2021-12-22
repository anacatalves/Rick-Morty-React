import {React, useState} from 'react'
import check from "../assets/img/check.png"
import ItemCard from '../components/ItemCard'

const ShoppingCart = ({cartItems , removeFromCart, subTotal}) => {
    
    return (
        
        <div className="shoppingCart">

            <h1>Shopping Cart</h1>

            <ItemCard  cartItems={cartItems} removeFromCart={removeFromCart} />

            <div className="shoppingCart-subtotal">
                <p>Subtotal</p>
                <p>{subTotal}€</p>
            </div>

            <button className="shoppingCart-checkout">Checkout</button>

            <p className="continue-shopping">or <a className="blue">Continue Shopping </a></p>

        </div>
    )
}

export default ShoppingCart