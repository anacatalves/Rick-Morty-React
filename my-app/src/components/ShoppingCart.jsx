import {React, useState} from 'react'

const ShoppingCart = () => {
    
    return (
        
        <div className="shoppingCart">

            <h1>Shopping Cart</h1>

            <div className="shoppingCart-item">

                <img className="item-img" src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="character image"></img>

                <div className="item-info">
                    <div className="item-section1">
                        <p>Name</p>
                        <p>9.00€</p>
                    </div>

                    <div className="item-section2">
                        <b>Location</b><b>Status</b>
                        
                    </div>

                    <div className="item-section3">
                        <p>In stock</p>
                        <a>Remove</a>
                    </div>

                </div>
                
            </div> 

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