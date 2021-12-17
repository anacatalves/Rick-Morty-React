import './assets/css/main.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import Episodes from "./pages/Episodes"
import Locations from "./pages/Locations"
import ShoppingCart from "./pages/ShoppingCart"
import Navbar from './components/navbar';


function App() {

  return (
    
    <Router>

      <div className="body-container">

        <Navbar></Navbar>

        <Routes>
          <Route path= "/" element= {<Home/>}/>
          <Route path= "/episodes" element= {<Episodes/>}/>
          <Route path= "/locations" element= {<h1>Locations</h1>}/>
          <Route path= "/cart" element= {<h1>ShoppingCart</h1>}/>
        </Routes>

      </div>

    </Router>
  );
}

export default App;
