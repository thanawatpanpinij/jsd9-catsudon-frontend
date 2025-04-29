import React, { useState } from "react";
import "./SignInSignUp.module.css"

export default function SignInSignUp() {
  const [isActive, setIsActive] = useState(false);

  const handleSignUpClick = () => {
    setIsActive(true);
  };

  const handleSignInClick = () => {
    setIsActive(false);
  };

  return (
    <section className={`container ${isActive ? "active" : ""}`}>
      <div className="form-box sign-in">
        <form action="">
          <div className="form-title">
            <h1>Login to Your <span>Account</span></h1>
            <p>Please enter your details</p>
          </div>
          <div className="social-icons">
            <a href="#"><i className="ri-line-fill"></i></a>
            <a href="#"><i className="ri-facebook-fill"></i></a>
            <a href="#"><i className="ri-google-fill"></i></a>
            <a href="#"><i className="ri-apple-fill"></i></a>
          </div>
          <div className="via-email">
            <p>or sign in via email</p>
          </div>
          <div className="input-box email-address">
            <input type="email" placeholder="Email address" required />
            <i className="ri-mail-fill"></i>
          </div>
          <div className="input-box password">
            <input type="password" placeholder="Password" required />
            <i className="ri-lock-fill"></i>
          </div>
          <div className="auth-options">
            <label className="remember-me">
              <input type="checkbox" /> Remember for 30 days
            </label>
            <div className="forgot-password">
              <a href="#">Forgot password</a>
            </div>
          </div>
          <button type="submit" className="btn sign-in-btn">Sign In</button>
          <div className="sign-up-link">
            <p>Don’t have an account? 
              <a href="#" onClick={handleSignUpClick}>Sign Up</a>
            </p>
          </div>
        </form>
      </div>

      <div className={`form-box sign-up ${isActive ? "visible" : "hidden"}`}>
        <form action="">
          <div className="form-title">
            <h1>Create <span>Account</span></h1>
            <p>Please enter your details</p>
          </div>
          <div className="social-icons">
            <a href="#"><i className="ri-line-fill"></i></a>
            <a href="#"><i className="ri-facebook-fill"></i></a>
            <a href="#"><i className="ri-google-fill"></i></a>
            <a href="#"><i className="ri-apple-fill"></i></a>
          </div>
          <div className="via-email">
            <p>or sign up via email</p>
          </div>
          <div className="input-box email-address">
            <input type="text" placeholder="Username" required />
            <i className="ri-user-fill"></i>
          </div>
          <div className="input-box email-address">
            <input type="email" placeholder="Email address" required />
            <i className="ri-mail-fill"></i>
          </div>
          <div className="input-box password">
            <input type="password" placeholder="Password" required />
            <i className="ri-lock-fill"></i>
          </div>
          <button type="submit" className="btn sign-up-btn">Sign Up</button>
          <div className="sign-up-link">
            <p>Already have an account? 
              <a href="#" onClick={handleSignInClick}>Sign In</a>
            </p>
          </div>
        </form>
      </div>

      <div className="toggle-box">
        <div className="toggle-panel toggle-left">
          <img src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720548/logo-footer_tqcgdg.png" alt="logo" />
          <h1>Hello! New here?</h1>
          <p>Sign up to discover personalized healthy meals made just for you!</p>
          <button className="btn sign-up-btn sign-up-btns" onClick={handleSignUpClick}>Sign Up</button>
        </div>

        <div className="toggle-panel toggle-right">
          <img src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720548/logo-footer_tqcgdg.png" alt="logo" />
          <h1>Welcome to CalNoy</h1>
          <p>Sign in to explore healthy meals crafted just for you.</p>
          <button className="btn sign-in-btn sign-in-btns" onClick={handleSignInClick}>Sign In</button>
        </div>
      </div>
    </section>
  );
}
