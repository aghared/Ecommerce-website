import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/contact-page.css'
export const ContactUsPage = () => {
  return (
    <div>
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

//export default ContactUsPage;
