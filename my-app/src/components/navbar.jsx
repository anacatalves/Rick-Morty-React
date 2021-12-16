import {React} from "react";
import { NavLink } from "react-router-dom";
import shoppingcart from "../assets/img/shoppingcart.png"

function Navbar() {
    return (
        <header>
          <h1>Rick & Morty <b>NFT</b></h1>

          <nav class="nav-bar"> {/* componente a extrair */}
            <NavLink to="/" >Characters</NavLink>
            <NavLink to="/episodes">Episodes</NavLink>
            <NavLink to="/locations">Locations</NavLink>
            <NavLink to="/cart"><img class= "cart-img" src={shoppingcart}/></NavLink>
           </nav>
        </header>
    )
}

export default Navbar
