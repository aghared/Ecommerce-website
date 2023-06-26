import React from 'react';
import './App.css'; // Import the CSS file
import { BrowserRouter as Router, Link, Route, Routes, Outlet } from 'react-router-dom';
import RegistrationPage from './RegistrationPage';

const Home = () => (
  <div>
    <header>
      <h1>eCommerce-website</h1>
      <div className="header">
        <div className="ecumenic">
          <p>eCommerce3</p>
        </div>
        <div className="search-bar">
          <input type="text" className="search-input" placeholder="Search..." />
          <button className="search-button">Search</button>
        </div>
      </div>
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
    </header>
    <br />
    <br />

    <aside className="aside-bar">
      <h2>Sign In</h2>
      <form id="signup-form">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" required />

        <button type="submit">Sign in</button>
        <div className="signup-link">
          <p>
            Don't have an account? <Link to="/signup" id="signup-link">Sign Up</Link>
          </p>
        </div>
      </form>
    </aside>

    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br />
    <hr />

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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="/signup" element={<RegistrationPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
