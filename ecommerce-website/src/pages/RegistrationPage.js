import React from 'react';
import "../CSS/sign-page.css"
//import { Link } from 'react-router-dom';

export const RegistrationPage = () => {
  return (
    <div>
      {/*
      <header>
        <h1>eCommerce-website</h1>
        <br />
        <nav className="navbar">
          <Link to="/">Home</Link>
           <a href="Product_Page_Home.html">Product</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="shoppingCart.html">Cart</a>
          <a href="#contact">Contact Us</a>
          <a href="userProfile.html">User Profile</a> 
        </nav>
        <br />
      </header>
        */}
      <div className="registration-form">
        <h2>Create an Account</h2>
        <form id="registration-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required />

          <label htmlFor="diet-plan">Preferred Diet Plan:</label>
          <select id="diet-plan">
            <option value="cutting">Cutting</option>
            <option value="bulking">Bulking</option>
            <option value="none">None</option>
          </select>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

//export default RegistrationPage;
