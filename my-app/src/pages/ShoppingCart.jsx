import React from 'react'

const ShoppingCart = () => {
    return (
        
        <div className="shoppingCart">

            <h1>Shopping Cart</h1>

            <div className="shoppingCart-item">

                <img className="item-img" src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="character image"></img>

                <div className="item-info">
                    <div className="item-section1">
                        <h3>Name</h3>
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

{/* <div className="shoppingCart-itemInfo">
<div className="">
    <h3>Character Name</h3>
    <p>Character Location</p>
    <p>Character Status</p>
</div>

<div className="shoppingCart-stock">
    <p>In stock</p>
</div>
</div>

<div className="shoppingCart-priceBox">
<p>9.00€</p>
<p>Remove</p>
</div> */}