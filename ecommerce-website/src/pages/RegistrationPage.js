import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/sign-page.css';

export const RegistrationPage = () => {
  return (
    <div>
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

          <Link to="/home">
            <button type="submit">Register</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
