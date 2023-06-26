import React from "react"
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/signin-page.css'
export function SignInPage(){

    return (
        <div>
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
      </div>

    )

}