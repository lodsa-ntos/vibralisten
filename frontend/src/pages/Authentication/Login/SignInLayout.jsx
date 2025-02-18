import React, { useEffect, useState } from "react";
import { FaSpotify } from "react-icons/fa";
import { FaDeezer } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GiMusicalNotes } from "react-icons/gi";
import "./SignInLayout.css";

const SignInLayout = ({ userId }) => {

  const [background, setBackground] = useState("images/authlayoutimages/default.jpg");
  const [ fixedBackground, setFixedBackground ] = useState(false);
  const [ userName, setuserName ] = useState("");

  // Carregar o fundo guardado do user ao iniciar
  // Load the user's saved background at startup
  useEffect(() => {
    const fetchBackground = async () => {
      try {
        const response = await fetch(`/user-background/${userId}`);
        const data = await response.json();
        setBackground(data.background);
        setFixedBackground(data.fixedBackground);

      } catch (error) {
        console.error("Error fetching background: ", error);
      }
    };

    fetchBackground();
  }, [userId]);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("vibraUser"));

    if (savedUser && savedUser.name) {
      setuserName(savedUser.name);
    }
  }, []);

  const toggleFixedBackground = async () => {
    
    try {
        // Alterna o estado antes da requisição para melhorar a UX
        // Toggle the state before the request to improve UX
        setFixedBackground(prev => !prev);
        await fetch(`/update-user-background`, {
            method: "POST",
            headers:{ "Content-Type": "application/json" },
            body: JSON.stringify({
                userId,
                backgroundUrl: background,
                // Alternar antes da requisição
                // Toggle before request
                fixedBackground: !fixedBackground,
            }),
        });

        // Verifica se a requisição foi bem-sucedida
        // Checks if the request was successful
        if (!response.ok) {
            throw new Error("Failed to update background.");
        }

        const data = await response.json();
        console.log("Background updated successfully: ", data.message);

    } catch (error) {
        console.error("Error updating background: ", error);

        // Revertemos o estado caso ocorra um erro
        // We revert the state if an error occurs
        setFixedBackground(prev => !prev);
    }
}

  return (
    <div className="container-auth-layout">
      <div className="left-section"></div>
      <div className="right-section">
        <img
          src={background}
          alt="auth layout"
          className="auth-layout-image"
        />
        <button
        className="toggle-fixed-bg"
        onClick={toggleFixedBackground}>
          {fixedBackground ? "Disable Fixed Background" : "Enable Fixed Background"}
        </button>
      </div>
      <div className="overlay-box">
        <h3> 
          { userName ? (`Welcome back, ${userName}! Let’s vibe! 🎵`)
          : (
            <>
            Sign in to <span className="overlay-word-vibran">VIBRA</span>LISTE<span className="overlay-word-vibran">N</span> 
            </>
          )}
        </h3>
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
            <button>Let’s Go <GiMusicalNotes size={20} style={{ marginLeft: "10px", color: "white"}}/></button>
          </div>

          <div className="overlay-content-forgot-pass">
            <a href="/forgotpasswordpage">Forgot your password?</a>
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
    </div>
  );
}

export default SignInLayout;