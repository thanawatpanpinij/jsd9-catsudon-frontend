import React, { useState } from "react";
import styles from "./SignInSignUp.module.css";
import { Link } from "react-router-dom";
import {
  RiLineFill,
  RiFacebookFill,
  RiGoogleFill,
  RiAppleFill,
  RiLockFill,
  RiMailFill,
  RiUserFill,
  RiHomeFill,
  RiArrowRightWideFill,
} from "react-icons/ri";

const SignInSignUp = () => {
  const [isActive, setIsActive] = useState(false);

  const handleSignUpClick = () => {
    setIsActive(true);
  };

  const handleSignInClick = () => {
    setIsActive(false);
  };

  return (
    <div className="overflow-hidden">
      <div className="flex gap-1.5 items-center justify-start w-full ml-[32px] text-gray-300 group mt-[24px]">
        <Link
          to="/"
          className="hover:text-third transition-colors duration-200 group-hover:text-third"
        >
          <RiHomeFill className="text-gray-300 group-hover:text-third" />
        </Link>

        <RiArrowRightWideFill className="font-medium text-third group-hover:text-gray-300 transition-colors duration-200" />

        <p className="text-small-size font-medium text-third group-hover:text-gray-300 transition-colors duration-200">
          Sign-In Sign-Up
        </p>
      </div>

      <div className="flex items-center justify-center">
        <section
          className={`${styles.container_signIn_signUp} ${
            isActive ? styles.containerActive : ""
          }`}
        >
          <div className={`${styles.formBox} ${styles.signIn}`}>
            <form action="" className={styles.form}>
              <div className={styles.formTitle}>
                <h1>
                  Login to Your <span>Account</span>
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

              <div className={`${styles.inputBox} ${styles.emailAddress}`}>
                <input type="email" placeholder="Email address" required />
                <i>
                  <RiMailFill />
                </i>
              </div>

              <div className={`${styles.inputBox} ${styles.password}`}>
                <input type="password" placeholder="Password" required />
                <i>
                  <RiLockFill />
                </i>
              </div>

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
            <form action="" className={styles.form}>
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

              <div className={`${styles.inputBox} ${styles.emailAddress}`}>
                <input type="text" placeholder="Username" required />
                <i>
                  <RiUserFill />
                </i>
              </div>

              <div className={`${styles.inputBox} ${styles.emailAddress}`}>
                <input type="email" placeholder="Email address" required />
                <i>
                  <RiMailFill />
                </i>
              </div>

              <div className={`${styles.inputBox} ${styles.password}`}>
                <input type="password" placeholder="Password" required />
                <i>
                  <RiLockFill />
                </i>
              </div>

              <button
                type="submit"
                className={`${styles.btn} ${styles.signUpBtn}`}
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
                src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720548/logo-footer_tqcgdg.png"
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
                src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720548/logo-footer_tqcgdg.png"
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
