import { Link } from "react-router-dom";
import React from "react";
import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="login">
      <div className="facebook">
        <div className="facebook-text">facebook</div>
        <div className="facebook-title">
          Connect with friends and the world <br /> around you with Facebook.
        </div>
      </div>
      <div className="login-container">
        <div className="login-details">
          <input type="email" placeholder="Email address or phone number" />
          <br></br>
          <input type="password" placeholder="Password" />
          <br></br>
          <button className="login-btn">
            <Link className="link" to="/headerArea">
              Log In
            </Link>
          </button>
          <div className="forget">
            <a href="Reset-pass-page">Forgot account?</a>
            <br></br>
          </div>
        </div>
        <div className="create">
          <br></br>
          <button className="create-account-btn">Create New Account</button>
        </div>
        <p></p>
        <br></br>
        <div className="page">
          <a href="celebrity-page">Create a page</a> for a celebrity, brand or
          business.
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
