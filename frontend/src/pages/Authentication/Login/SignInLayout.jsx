import React from "react";
import { FaSpotify } from "react-icons/fa";
import { FaDeezer } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "./SignInLayout.css";

const SignInLayout = () => {
  return (
    <div className="container-auth-layout">
      <div className="left-section"></div>
      <div className="right-section">
        <img
          src="images/authlayoutimages/fundo_4.jpg"
          alt="auth layout"
          className="auth-layout-image"
        />
      </div>
      <div className="overlay-box">
        <h3>Sign in to <span className="overlay-word-vibran">VIBRA</span>LISTE<span className="overlay-word-vibran">N</span></h3>
        <div className="overlay-content">
          <div className="overlay-content-login-username">
            <input type="email" id="login-username-email" name="login-username" className="peer block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600peer block w-full rounded-lg border border-gray-300 bg-transparent px-2 pt-5 pb-2 text-gray-900 dark:border-gray-600 dark:text-white focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " required></input>
            <label htmlFor="login-username-email" className="absolute left-2 top-2 text-sm text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-[-50%] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600">E-mail or username</label>
          </div>

          <div className="overlay-content-login-password">
            <input className="peer block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600peer block w-full rounded-lg border border-gray-300 bg-transparent px-2 pt-5 pb-2 text-gray-900 dark:border-gray-600 dark:text-white focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " id="login-password-id" name="login-password" type="password" required></input>

            <label htmlFor="login-username-password" className="absolute left-2 top-2 text-sm text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-[-50%] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600">Password</label>
          </div>

          <div className="overlay-content-login-button">
            <button> <img
          src="Logo/music_symbol_blue_vibrant.svg"
          alt="Music Symbol"
          className="login-logo-image" style={{ marginRight: "10px" }}
        />Login</button>
          </div>

          <div className="overlay-content-forgot-pass">
            <a>Forgot your password?</a>
          </div>
          
          <div className="overlay-content-divider">
            <span>OR</span>
          </div>

          <div className="overlay-content-login-api">
            <div className="login-api">
              <button className="spotify"> <FaSpotify size={20} style={{ marginRight: "10px" }}/> Login with Spotify</button>
            </div>
            <div className="login-api">
              <button className="deezer"> <FaDeezer size={20} style={{ marginRight: "10px" }} /> Login with Deezer</button>
            </div>
            <div className="login-api">
              <button className="google"> <FcGoogle size={20} style={{ marginRight: "10px" }} /> Login with Google</button>
            </div>
          </div>

          <div className="overlay-content-register">
            <p className="register-link">Don't have an account? <a href="/signup">Sign up.</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInLayout;