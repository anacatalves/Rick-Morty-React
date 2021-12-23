import React from 'react'
import check from '../assets/img/check.png'
<assets />

const ItemCard = ({cartItems, removeFromCart}) => {

    return (
        <>
            {cartItems.map ( (item, index) => (

                <div className="shoppingCart-item" key={index} >

                    <img className="item-img" src={item.image} alt="character image"></img>

                    <div className="item-info">
                        <div className="item-section1">
                            <b>{item.name} </b>
                            <p>{item.price}€</p>
                        </div>

                        <div className="item-section2">
                            <p>{item.location.name} </p><b>{item.status} </b>
                            
                        </div>

                        <div className="item-section3">
                            <div className="stock-check">
                                <img class="check" src={check}/>
                                <p>In Stock</p> 
                            </div>
                            
                            <a onClick={() => { removeFromCart(item)} }>Remove</a>
                        </div>

                    </div>

                </div> 
            
            ))}
        </>
    )
}

export default ItemCard
