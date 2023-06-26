import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../CSS/navbar.css"

const Navbar = () => {
    const [searchInput, newSearchInput] = useState('');
    const navigate = useNavigate();
  
    const searchChange = (event) => {
      newSearchInput(event.target.value);
    };
  
    const startSearch = () => {
      if (searchInput !== '') {
        navigate(`/search?term=${(searchInput)}`); //used chatGPT for help on this line
      }
    };
  
    return (
      <div>
        <div className="ecumenic">
          <p>eCommerce3</p>
        </div>
        <div className="search-bar">
          <input type="text" className="search-input" placeholder="Search..." value={searchInput} onChange={searchChange}
          />
          <button className="search-button" onClick={startSearch}>
            Search
          </button>
        </div>
        <div className="navbar">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/shoppingcart">Cart</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    );
  };
  
  export default Navbar;