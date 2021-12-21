import {React} from "react";
import { NavLink } from "react-router-dom";
import shoppingcart from "../assets/img/shoppingcart.png"

function Navbar() {
    return (
        <header>
          <NavLink to="/" className="page-title"><h1>Rick & Morty <b>NFT</b></h1></NavLink>
  
          <nav class="nav-bar"> {/* componente a extrair */}
            <NavLink to="/" className="page" >Characters</NavLink>
            <NavLink to="/episodes" className="page">Episodes</NavLink>
            <NavLink to="/locations" className="page">Locations</NavLink>
            <NavLink to="/cart"><img class= "cart-img" src={shoppingcart}/></NavLink>
           </nav>
        </header>
    )
}

export default Navbar
