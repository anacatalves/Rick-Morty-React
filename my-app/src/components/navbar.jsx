import {React} from "react";
import shoppingcart from "../assets/img/shoppingcart.png"

function Navbar() {
    return (
        <header>
          <h1>Rick & Morty <b>NFT</b></h1>

          <nav class="nav-bar"> {/* componente a extrair */}
            <a href="" target="_blank">Characters</a>
            <a href="" target="_blank">Episodes</a>
            <a href="" target="_blank">Locations</a>
            <a href="" target="_blank"><img class= "cart-img" src={shoppingcart}/></a>            
          </nav>

        </header>
    )
}

export default Navbar
