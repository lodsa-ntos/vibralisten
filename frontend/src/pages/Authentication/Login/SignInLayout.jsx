import React, { useEffect, useState } from "react";
import { FaSpotify } from "react-icons/fa";
import { FaDeezer } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GiMusicalNotes } from "react-icons/gi";
import { data, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import musicLoading from "../../../assets/animations/loadingMusic.json";
import "./SignInLayout.css"

const LoginScreen = () => {
  return (
    <div className="flex h-screen font-satoshi">
      {/** Left: Form */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-dark-grey text-white p-10">
      <h3 className="text-4xl font-bold text-blue-vibrant"> 
            Sign in to <span className="overlay-word-vibran">VIBRA</span>LISTE<span className="overlay-word-vibran">N</span> 
        </h3>
        <div className="overlay-content">
          <div className="overlay-content-login-username">
            <input 
              type="text" 
              id="login-username-email" 
              name="login-username"
              className="
              peer block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600peer block w-full rounded-lg border border-gray-300 bg-transparent px-2 pt-5 pb-2 text-gray-900 dark:border-gray-600 dark:text-white focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" " 
              required
            />

            <label htmlFor="login-username-email" className="absolute left-2 top-2 text-sm text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-[-50%] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600">Mobile number, username or e-mail</label>
         
          </div>

          <div className="overlay-content-login-button">
            <button>
                  <Lottie
                  animationData={musicLoading}
                  loop={true}
                  style={{ width: 40, height: 40 }}
                  />
             
                  Let’s Go <GiMusicalNotes size={20} style={{ marginLeft: "10px", color: "white"}}/>
              </button>
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
            <p className="register-link">New here? Let’s get you started with some fresh tunes! <a href="/signup">Sign up!</a></p>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-black relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: "url('/frontend/public/images/authlayoutimages/default.jpg')" }}
        >

        </div>
      </div>
    </div>
  );
}

export default LoginScreen;