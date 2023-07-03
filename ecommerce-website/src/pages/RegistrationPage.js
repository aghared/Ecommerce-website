import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../CSS/sign-page.css';

export const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dietPlan, setDietPlan] = useState('cutting');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create an object with the form data
      const formData = {
        name,
        email,
        password,
        dietPlan,
      };
  
      // Send a POST request to your backend API with the form data
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        // Form submission successful, you can redirect the user to the desired page
        history.push('/home');
      } else {
        // Form submission failed, handle the error accordingly
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('An error occurred during form submission:', error);
    }
  };

  return (
    <div>
      <div className="registration-form">
        <h2>Create an Account</h2>
        <form id="registration-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required value={name} onChange={(e) => setName(e.target.value)} />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required value={password} onChange={(e) => setPassword(e.target.value)} />

          <label htmlFor="diet-plan">Preferred Diet Plan:</label>
          <select id="diet-plan" value={dietPlan} onChange={(e) => setDietPlan(e.target.value)}>
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
