import React, { useState } from "react";
import validator from "validator";
import styles from "./SignInSignUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import {
  RiLineFill,
  RiFacebookFill,
  RiGoogleFill,
  RiAppleFill,
  RiMailFill,
  RiUserFill,
  RiEyeFill,
  RiEyeOffFill,
} from "react-icons/ri";
import axiosInstance from "../../utils/axiosInstance.js";
import { validateEmail } from "../../utils/helper";
import useCartContext from "../../contexts/cartContext/useCartContext.jsx";

const SignInSignUp = ({ setAction }) => {
  const [isActive, setIsActive] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const { getCart } = useCartContext();

  const navigate = useNavigate();

  const togglePassword = () => setShowPassword((prev) => !prev);
  const handleSignUpClick = () => {
    setIsActive(true);
    setAction("Sign up");
  };
  const handleSignInClick = () => {
    setIsActive(false);
    setAction("Sign in");
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    let errors = {};
    if (!emailOrUsername) {
      errors.emailOrUsername = "Please enter your email or username.";
    }
    if (!password) {
      errors.password = "Please enter the password.";
    }

    setError(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    setError({});

    try {
      const response = await axiosInstance.post("/auth/login", {
        emailOrUsername,
        password,
      });

      if (response.data?.message === "Login successfully") {
        setEmailOrUsername("");
        setPassword("");
        navigate("/");
        getCart();
      } else {
        setError({
          general: "Login successful, but an unexpected response was received.",
        });
      }
    } catch (error) {
      console.error("Sign In Error:", error);
      const errorData = error.response?.data;
      if (errorData?.message) {
        setError({ general: errorData.message });
      } else if (error.message === "Network Error") {
        setError({
          general:
            "Network Error: Could not connect to the server. Please check your internet connection and try again.",
        });
      } else {
        setError({
          general: "An unexpected error occurred. Please try again.",
        });
      }
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    let errors = {};

    if (!username) {
      errors.username = "Please enter your username.";
    }
    if (!firstName) {
      errors.firstName = "Please enter your First Name.";
    }
    if (!lastName) {
      errors.lastName = "Please enter your Last Name.";
    }
    if (!validateEmail(email)) {
      errors.email = "Please enter a valid email.";
    }
    if (!password) {
      errors.password = "Please enter the password.";
    }

    setError(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    setError({});

    //SignUp API Call
    try {
      const response = await axiosInstance.post("/auth/create-accounts", {
        username,
        firstName,
        lastName,
        email,
        password,
      });

      if (response.data && response.data.error) {
        setError({ general: response.data.message });
        return;
      }

      if (response.data?.message === "Registration successfully") {
        setUsername("");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.error("Sign Up Error:", error);
      const errorData = error.response?.data;
      if (errorData?.message) {
        setError({ general: errorData.message });
      } else if (error.message === "Network Error") {
        setError({
          general:
            "Network Error: Could not connect to the server. Please check your internet connection and try again.",
        });
      } else {
        setError({
          general: "An unexpected error occurred. Please try again.",
        });
      }
    }
  };

  return (
    <div className="overflow-x-hidden h-screen">
      <div className="flex items-center justify-center h-full">
        <section
          className={`${styles.container_signIn_signUp} ${
            isActive ? styles.containerActive : ""
          }`}
        >
          <div className={`${styles.formBox} ${styles.signIn}`}>
            <form onSubmit={handleSignIn} className={styles.form}>
              <div className={styles.formTitle}>
                <h1>
                  Account <span>Sign In</span>
                </h1>
                <p>Please enter your details</p>
              </div>

              <div className={styles.socialIcons}>
                <a href="#">
                  <RiLineFill />
                </a>
                <a href="#">
                  <RiFacebookFill />
                </a>
                <a href="#">
                  <RiGoogleFill />
                </a>
                <a href="#">
                  <RiAppleFill />
                </a>
              </div>

              <div className={styles.viaEmail}>
                <p>or sign in via email</p>
              </div>

              <div
                className={`${styles.inputBox} ${styles.emailAddress} ${
                  error?.emailOrUsername ? "" : "mb-4"
                }`}
              >
                <input
                  name="emailOrUsername"
                  type="text"
                  placeholder="Enter your email or username"
                  value={emailOrUsername}
                  onChange={(e) => setEmailOrUsername(e.target.value)}
                />
                <i>
                  <RiMailFill />
                </i>
              </div>
              {error?.emailOrUsername && (
                <p className="text-red-500 text-[12px] mt-1 mb-3 text-left">
                  {error.emailOrUsername}
                </p>
              )}

              <div
                className={`${styles.inputBox} ${styles.password} ${
                  error?.password ? "" : "mb-4"
                }`}
              >
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i onClick={togglePassword} style={{ cursor: "pointer" }}>
                  {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
                </i>
              </div>
              {error?.password && (
                <p className="text-red-500 text-[12px] mt-1 mb-4 text-left">
                  {error.password}
                </p>
              )}

              {error?.general && (
                <p className="text-red-500 text-[12px] mt-1 mb-4 text-left">
                  {error.general}
                </p>
              )}

              <div className={styles.authOptions}>
                <label className={styles.rememberMe}>
                  <input type="checkbox" /> Remember for 30 days
                </label>

                <div className={styles.forgotPassword}>
                  <a href="#">Forgot password</a>
                </div>
              </div>

              <button
                type="submit"
                className={`${styles.btn} ${styles.signInBtn}`}
              >
                Sign In
              </button>

              <div className={styles.signUpLink}>
                <p>
                  Don’t have an account?{" "}
                  <a href="#" onClick={handleSignUpClick}>
                    Sign Up
                  </a>
                </p>
              </div>
            </form>
          </div>

          <div className={`${styles.formBox} ${styles.signUp}`}>
            <form onSubmit={handleSignUp} className={styles.form}>
              <div className={styles.formTitle}>
                <h1>
                  Create<span> Account</span>
                </h1>
                <p>Please enter your details</p>
              </div>

              <div className={styles.socialIcons}>
                <a href="#">
                  <RiLineFill />
                </a>
                <a href="#">
                  <RiFacebookFill />
                </a>
                <a href="#">
                  <RiGoogleFill />
                </a>
                <a href="#">
                  <RiAppleFill />
                </a>
              </div>

              <div className={styles.viaEmail}>
                <p>or sign up via email</p>
              </div>

              <div
                className={`${styles.inputBox} ${styles.emailAddress} ${
                  error?.username ? "" : "mb-4"
                }`}
              >
                <input
                  name="username"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <i>
                  <RiUserFill />
                </i>
              </div>
              {error?.username && (
                <p className="text-red-500 text-[12px] mt-1 mb-3 text-left">
                  {error.username}
                </p>
              )}

              <div
                className={`${styles.inputBox} ${styles.emailAddress} gap-2 ${
                  error?.firstName || error?.lastName ? "" : "mb-4"
                }`}
              >
                <div>
                  <input
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  {error?.firstName && (
                    <p className="text-red-500 text-[12px] mt-1 mb-3 text-left">
                      {error.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  {error?.lastName && (
                    <p className="text-red-500 text-[12px] mt-1 mb-3 text-left">
                      {error.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div
                className={`${styles.inputBox} ${styles.emailAddress} ${
                  error?.email ? "" : "mb-4"
                }`}
              >
                <input
                  name="signupEmail"
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <i>
                  <RiMailFill />
                </i>
              </div>
              {error?.email && (
                <p className="text-red-500 text-[12px] mt-1 mb-3 text-left">
                  {error.email}
                </p>
              )}

              <div
                className={`${styles.inputBox} ${styles.password} ${
                  error?.password ? "" : "mb-4"
                }`}
              >
                <input
                  name="signupPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i onClick={togglePassword} style={{ cursor: "pointer" }}>
                  {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
                </i>
              </div>
              {error?.password && (
                <p className="text-red-500 text-[12px] mt-1 mb-4 text-left">
                  {error.password}
                </p>
              )}
              {error?.general && (
                <p className="text-red-500 text-[12px] mt-1 mb-4 text-left">
                  {error.general}
                </p>
              )}

              <button
                type="submit"
                className={`${styles.btn} ${styles.signUpBtn}`}
                onClick={() => {
                  if (
                    !username ||
                    !firstName ||
                    !lastName ||
                    !email ||
                    !password
                  ) {
                    setError();
                  } else if (!validator.isStrongPassword(password)) {
                    setError();
                  } else {
                    handleSignInClick();
                  }
                }}
              >
                Sign Up
              </button>

              <div className={styles.signUpLink}>
                <p>
                  Already have an account?{" "}
                  <a href="#" onClick={handleSignInClick}>
                    Sign In
                  </a>
                </p>
              </div>
            </form>
          </div>

          <div className={styles.toggleBox}>
            <div className={`${styles.togglePanel} ${styles.toggleLeft}`}>
              <img
                src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720533/001-logo-single_qtvxmf.png"
                alt="Logo"
              />
              <h1>Hello! New here?</h1>
              <p>
                Sign up to discover personalized healthy meals made just for
                you!
              </p>
              <button
                className={`${styles.btn} ${styles.signUpBtn} ${styles.signUpBtns}`}
                onClick={handleSignUpClick}
              >
                Sign Up
              </button>
            </div>

            <div className={`${styles.togglePanel} ${styles.toggleRight}`}>
              <img
                src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720533/001-logo-single_qtvxmf.png"
                alt="Logo"
              />
              <h1>Welcome to CalNoy</h1>
              <p>Sign in to explore healthy meals crafted just for you.</p>
              <button
                className={`${styles.btn} ${styles.signInBtn} ${styles.signInBtns}`}
                onClick={handleSignInClick}
              >
                Sign In
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SignInSignUp;
