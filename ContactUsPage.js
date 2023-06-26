import React from 'react';
import { Link } from 'react-router-dom';

const ContactUsPage = () => {
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
      <br />
      <br />

      <main>
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form id="contact-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" rows="5" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </main>

      <br />
      <br />
      <br />

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

export default ContactUsPage;
