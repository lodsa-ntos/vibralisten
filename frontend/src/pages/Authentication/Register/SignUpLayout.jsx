import React from "react";
import { FaSpotify } from "react-icons/fa";
import { FaDeezer } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TbMusicShare } from "react-icons/tb";
import "./SignUpLayout.css";

const SignUpLayout = () => {
  return (
    <div className="container-signup-layout">
      <div className="left-signup-section"></div>
      <div className="right-signup-section">
        <img
          src="images/authlayoutimages/fundo_13.jpg"
          alt="auth layout"
          className="signup-layout-image"
        />
      </div>
      <div className="overlay-signup-box">
        <h3>Discover new music. <br/>Join <span className="overlay-word-vibran">VIBRA</span>LISTE<span className="overlay-word-vibran">N</span> now!</h3>
        <div className="overlay-signup-content">
          <div className="overlay-content-signup-username">
            <input type="email" id="signup-username-email" name="signup-username" className="peer block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600peer block w-full rounded-lg border border-gray-300 bg-transparent px-2 pt-5 pb-2 text-gray-900 dark:border-gray-600 dark:text-white focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " required></input>
            <label htmlFor="signup-username-email" className="absolute left-2 top-2 text-sm text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-[-50%] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600">E-mail or username</label>
          </div>

          <div className="overlay-content-signup-button">
            <button>Let's vibe! <TbMusicShare size={20} style={{ marginLeft: "5px", color: "white"}}/></button>
          </div>
          
          <div className="overlay-signup-content-divider">
            <span>OR</span>
          </div>

          <div className="overlay-content-signup-api">
            <div className="signup-api">
              <button className="signup-spotify"> <FaSpotify size={20} style={{ marginRight: "10px" }}/> Sign up with Spotify</button>
            </div>
            <div className="signup-api">
              <button className="signup-deezer"> <FaDeezer size={20} style={{ marginRight: "10px" }} /> Sign up with Deezer</button>
            </div>
            <div className="signup-api">
              <button className="signup-google"> <FcGoogle size={20} style={{ marginRight: "10px" }} /> Sign up with Google</button>
            </div>
          </div>

          <div className="overlay-signup-content-register">
            <p className="register-link">Already vibing with us? <a href="/">Sign in!</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpLayout;