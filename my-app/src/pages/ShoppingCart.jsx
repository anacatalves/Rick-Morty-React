import {React, useState} from 'react'
import check from "../assets/img/check.png"
import ItemCard from '../components/ItemCard'

const ShoppingCart = () => {
    
    return (
        
        <div className="shoppingCart">

            <h1>Shopping Cart</h1>

            <ItemCard></ItemCard>

            <div className="shoppingCart-subtotal">
                <p>Subtotal</p>
                <p>9.00€</p>
            </div>

            <button className="shoppingCart-checkout">Checkout</button>

            <p>or <a className="blue">Continue Shopping </a></p>

        </div>
    )
}

export default ShoppingCart