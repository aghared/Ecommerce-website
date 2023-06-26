import React from 'react';
import { Link } from 'react-router-dom';
import "../CSS/navbar.css"
const Navbar = () => {
    return (
        <div>
             <div class="ecumenic">
                 <p>eCommerce3</p>
             </div>
             <div class="search-bar">
                 <input type="text" class="search-input" placeholder="Search..."/>
                 <button class="search-button">Search</button>
             </div>
            <div class="navbar">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
        </div>
    )
       
    
}
export default Navbar;