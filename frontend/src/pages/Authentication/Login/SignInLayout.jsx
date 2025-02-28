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
  const [ userName, setUserName ] = useState("");

  const [user, setUser] = useState(() => {

    try {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;

    } catch (error) {
      console.error("Error parsing user from localStorage: ", error.message);
      return null;
    }
  });

  const navigate = useNavigate();

  const isValidEmail = (value) => /\S+@\S+\.\S+/.test(value);
  const isValidPhoneNumber = (value) => /^\+?[0-9]{7,15}$/.test(value);

  const handleLoginOrSignup = async () => {
    setIsChecking(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:3000/api/auth/check-user?emailOrPhone=${isInputValue}`);
      const data = await response.json();

      // 🟢 DEBUG
      console.log("Check-user response: ", data);


      if (!response.ok) {
        throw new Error("Failed to check user.");
      }

      if (data.exists) {

        localStorage.setItem("pendingUser", JSON.stringify(data.user));

        await fetch("http://localhost:3000/api/auth/send-otp", {
          method: "POST",
          headers:{ "Content-Type": "application/json" },
          body: JSON.stringify({
              emailOrPhone: isInputValue
          }),
        });

        // 🟢 DEBUG
        console.log("✅ OTP sent to: ", isInputValue);
  
        navigate("/verify-code", { 
          state: { 
            emailOrPhone: isInputValue,
            userId: data.user.userId,
            type: "login"
          } 
        });
  
      } else {
        console.log("❌ User not found, redirecting to signup.");
        navigate("/signup", { 
          state: { 
            emailOrPhone: isInputValue 
          } 
        });
      }

    } catch (error) {
      console.error("Error checking user: ", error.message)
      setError("An error occurred. Please try again.");
    } finally {
      setIsChecking(false);
    }
  };

  // Função para verificar se o input é válido (phone number, e-mail ou username existente)
  // Function to check if the input is valid (existing phone number, e-mail or username)
  const validateInput = async (value) => {
    setIsChecking(true);
    setIsValid(null);

    try {
      const trimmedValue = value.trim();

      if (!isValidEmail(trimmedValue) && !isValidPhoneNumber(trimmedValue)) {
        setIsValid(false);
        setIsChecking(false);
        return;
      }

      const response = await fetch(`http://localhost:3000/api/auth/check-user?emailOrPhone=${value}`);
      const data = await response.json();

      // 🟢 DEBUG
      console.log("Check-user response: ", data);

      if (data.exists) {
        setIsValid(true);
        console.log("✅ Valid user! isValid updated to true.");
      } else {
        setIsValid(false);
        console.log("❌ User not found! isValid updated to false.");
      }

      if (!response.ok) {
        throw new Error("Failed to validate user.");
      }

    } catch (error) {
      console.error("Validation error: ", error.message);
      setIsValid(false);
    } finally {
      setIsChecking(false);
    }
  };

  useEffect(() => {
    console.log("Updated isValid state: ", isValid);
  }, [isValid]);

  // Atualiza o estado sempre que o utilizador escrever
  // Updates the status whenever the user types
  const handleChange= (event) => {
    const value = event.target.value.trim();
    setIsInputValue(value);

    console.log("✍️ Input entered: ", value);

    // Verificar se é um e-mail válido ou username válido
    // Check if it's a valid e-mail or username
    if (value.length >= 3) {
      validateInput(value);
    } else {
      // Reset status
      setIsValid(null);
    }
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
      setUserName(savedUser.name);
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
            <input 
              type="text" 
              id="login-username-email" 
              name="login-username"
              className={`
              peer block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600peer block w-full rounded-lg border border-gray-300 bg-transparent px-2 pt-5 pb-2 text-gray-900 dark:border-gray-600 dark:text-white focus:border-blue-600 focus:outline-none focus:ring-0
              ${isValid === true ? "input-valid" : isValid === false && isInputValue.length > 3 ? "input-invalid" : ""}
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
            <button onClick={handleLoginOrSignup} 
            disabled={isLoading || isChecking || !isValid}
            
            className={isValid === false ? "disabled-btn" : ""}>
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