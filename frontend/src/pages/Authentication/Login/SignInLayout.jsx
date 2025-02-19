import React, { useEffect, useState } from "react";
import { FaSpotify } from "react-icons/fa";
import { FaDeezer } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GiMusicalNotes } from "react-icons/gi";
import { data, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import musicLoading from "../../../assets/animations/loadingMusic.json";
import "./SignInLayout.css";

const SignInLayout = ({ userId }) => {

  const [background, setBackground] = useState("images/authlayoutimages/default.jpg");
  const [ isValid, setIsValid ] = useState(null);
  const [error, setError] = useState(null);
  const [ fixedBackground, setFixedBackground ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ isChecking, setIsChecking ] = useState(false);
  const [ isInputValue, setIsInputValue ] = useState("");
  const [ userName, setuserName ] = useState("");
  const navigate = useNavigate();

  const isValidEmail = (value) => /\S+@\S+\.\S+/.test(value);
  const isValidPhoneNumber = (value) => /^\+?[0-9]{7,15}$/.test(value);

  const handleSendCode = async () => {
    setIsLoading(true);
    setError(null);

    try {

      const response = await fetch(`/send-login-code`, {
        method: "POST",
        headers:{ "Content-Type": "application/json" },
        body: JSON.stringify({
            emailOrUsername: isInputValue
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      navigate("/verify-code", { state: { email: isInputValue } });

    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Função para verificar se o input é válido (phone number, e-mail ou username existente)
  // Function to check if the input is valid (existing phone number, e-mail or username)
  const validateInput = async (value) => {
    setIsChecking(true);

    try {

      if (!isValidEmail(value) && !isValidPhoneNumber(value) && value.length < 3) {
        setIsValid(false);
        return;
      }

      const response = await fetch(`/validate-user?input=${value}`);
      const data = await response.json();

      setIsValid(data.valid);

    } catch (error) {
      console.error("Validation error: ", error);
      setIsValid(false);
    } finally {
      setIsChecking(false);
    }
  };

  // Atualiza o estado sempre que o utilizador escrever
  // Updates the status whenever the user types
  const handleChange= (event) => {
    const value = event.target.value;
    setIsInputValue(value);

    // Verificar se é um e-mail válido ou username válido
    // Check if it's a valid e-mail or username
    if (value.length > 3) {
      validateInput(value);
    } else {
      // Reset status
      setIsValid(null);
    }
  }; 

  const handleLogin = async () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      console.log("Login successful!");
    }, 3000);
  };

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

  const handleRequestLogicCode = async () => {
    setIsLoading(true);
    
    try {
        
        const response = await fetch(`/send-login-code`, {
            method: "POST",
            headers:{ "Content-Type": "application/json" },
            body: JSON.stringify({ emailOrUsername: isInputValue }),
        });

        const data = await response.json();

        if (response.ok) {
          alert("Login code sent! Check your email.");
          setRedirectCodePage(true);
        } else {
          alert(data.message);
        }

    } catch (error) {
        console.error("Error requesting login code: ", error);
    } finally {
      setIsLoading(false);
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
            <input 
              type="email" 
              id="login-username-email" 
              name="login-username"
              className={`
              peer block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600peer block w-full rounded-lg border border-gray-300 bg-transparent px-2 pt-5 pb-2 text-gray-900 dark:border-gray-600 dark:text-white focus:border-blue-600 focus:outline-none focus:ring-0
              ${isValid === true ? "input-valid" : isValid === false || isInputValue.length ? "input-invalid" : ""}
              `} 
              placeholder=" " 
              value={isInputValue}
              onChange={handleChange}
              required
            />

            <label htmlFor="login-username-email" className="absolute left-2 top-2 text-sm text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-[-50%] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600">Mobile number, username or e-mail</label>
         
          </div>

          {error && <p className="error-message-user">{error}</p>}

          <div className="overlay-content-login-button">
            <button onClick={handleSendCode} 
            disabled={isLoading || isValid === false || isChecking || isInputValue.length < 3}
            
            className={isValid === false || isInputValue.length < 3 ? "disabled-btn" : ""}>
              {
                isLoading ? (
                  <Lottie
                  animationData={musicLoading}
                  loop={true}
                  style={{ width: 40, height: 40 }}
                  />
                ) : (
                  <>
                  Let’s Go <GiMusicalNotes size={20} style={{ marginLeft: "10px", color: "white"}}/>
                  </>
                )
              }
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
    </div>
  );
}

export default SignInLayout;