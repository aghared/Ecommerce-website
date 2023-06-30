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
        <div className="ecumenic mt-3 company-name">
          <img id="logo" src={"../assets/Products/eggscellent_logo_.png"} alt={""}></img>
        </div>
        <div className="search-bar">
          <input type="text" className="search-input" placeholder="Search..." value={searchInput} onChange={searchChange}
          />
          <button className="search-button custom-button" onClick={startSearch}>
            Search
          </button>
        </div>
        <div className="navbar custom-button">
          <Link to="/home">Home</Link>
          <Link to="/about">About Us</Link> 
          <Link to="/">Sign In</Link>
          <Link to="/shoppingcart">Cart</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    );
  };
  
  export default Navbar;