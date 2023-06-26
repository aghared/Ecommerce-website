import React from 'react';
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
  return (
    <div>
      <header>
        <h1>eCommerce-website</h1>
        <br />
        <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/products">Product</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/profile">User Profile</Link>
      </nav>
        <br />
      </header>

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
      <footer>
      <div className="footer-content">
        <p>&copy; 2023 eCommerce-website. All rights reserved.</p>
        <nav>
          
          <Link to="/contact">Contact Us</Link>
        </nav>
      </div>
    </footer>
    
    </div>
  );
};

export default RegistrationPage;
