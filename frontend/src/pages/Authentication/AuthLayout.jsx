import React from "react";
import "./AuthLayout..css";

const AuthenticationLayout = () => {
  return (
    <div className="container-auth-layout">
      <div className="left-section">
      </div>
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
            <p>E-mail or username</p>
            <input className="input-login-username" id="login-username-name-id" name="login-username" placeholder="E-mail or username" type="email" required></input>
          </div>

          <div className="overlay-content-login-password">
            <p>Password</p>
            <input className="input-login-password" id="login-password-id" name="login-password" placeholder="Password" type="password" required></input>
          </div>
          <div className="overlay-content-login-button">
            <button>Log in</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthenticationLayout;