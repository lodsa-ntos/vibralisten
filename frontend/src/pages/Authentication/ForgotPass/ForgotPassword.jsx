import React from "react";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  return (
    <div className="container-forgotpass-layout">
      <div className="left-forgotpass-section"></div>
      <div className="right-forgotpass-section">
        <img
          src="images/authlayoutimages/fundo_26.jpg"
          alt="auth layout"
          className="forgotpass-layout-image"
        />
      </div>
      <div className="overlay-forgotpass-box">
        <h3>You've forgotten your password</h3>
        <div className="overlay-forgotpass-content">
          <div className="overlay-content-forgotpass-username">
            <input type="email" id="forgotpass-username-email" name="forgotpass-username" className="peer block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600peer block w-full rounded-lg border border-gray-300 bg-transparent px-2 pt-5 pb-2 text-gray-900 dark:border-gray-600 dark:text-white focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " required></input>
            <label htmlFor="forgotpass-username-email" className="absolute left-2 top-2 text-sm text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-[-50%] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600">E-mail or username</label>
          </div>

          <div className="overlay-content-forgotpass-button">
            <button>Send link</button>
          </div>
          
          <div className="overlay-forgotpass-content-divider">
            <span>OR</span>
          </div>

          <div className="overlay-forgotpass-content-register">
            <p className="forgotpass-link">New here? Let’s get you started with some fresh tunes! <a href="/signup">Sign up!</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;