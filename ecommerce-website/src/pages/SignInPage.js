import React from "react"
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/signin-page.css'
export function SignInPage(){ 
  

    return (
      <div className="middle-align">
        <div className="signin-middle-align">
            <div>
            <aside className="aside-bar">
            <h2 id="sign">Sign In</h2>
            <form id="signup-form" method="POST" action="/sign-in/">
                 
              <label id="user" htmlFor="username">Username:</label>
              <input type="text" id="input" required />
      
              <label id="user" htmlFor="password">Password:</label>
              <input type="password" id="input" required />
      
              <Link to="/home">
                <button id="butt" type="submit">Sign in</button>
              </Link>             
              <div className="signup-link">
                <p>
                  Don't have an account? <Link to="/signup" id="signup-link">Sign Up</Link>
                </p>
              </div>
            </form>
          </aside>
          </div>
        </div>
      </div>

    );

}