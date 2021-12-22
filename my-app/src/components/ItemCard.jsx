import React from 'react'

const ItemCard = () => {
    return (
        <div className="shoppingCart-item">

                <img className="item-img" src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="character image"></img>

                <div className="item-info">
                    <div className="item-section1">
                        <b>Name</b>
                        <p>9.00€</p>
                    </div>

                    <div className="item-section2">
                        <p>Location</p><b>Status</b>
                        
                    </div>

                    <div className="item-section3">
                        {/* <img class="check" src={check}/> */} <p>In Stock</p> 
                        <a>Remove</a>
                    </div>

                </div>
                
            </div> 
    )
}

export default ItemCard
