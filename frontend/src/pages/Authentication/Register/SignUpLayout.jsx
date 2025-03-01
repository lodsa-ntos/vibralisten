import React from "react";
import { FaSpotify } from "react-icons/fa";
import { FaDeezer } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TbMusicShare } from "react-icons/tb";
import { AuthContext } from "../../../context/AuthContext";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const SignUpLayout = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    fullname: ""
  });

  const isValidEmail = (value) => /\S+@\S+\.\S+/.test(value);
  const isValidPhoneNumber = (value) => /^\+?[0-9]{7,15}$/.test(value);

  const [emailOrPhoneError, setEmailOrPhoneError] = useState(null);
  const [fullNameError, setFullNameError] = useState(null);

  const isValidFullName = (fullname) => {
    const words = fullname.trim().split(" ");

    if (words.length < 2) {
      return false;
    }

    return words.every(word => word.charAt(0) === word.charAt(0).toUpperCase());
  };

  // Função para verificar se o input é válido (phone number, e-mail ou username existente)
  // Function to check if the input is valid (existing phone number, e-mail or username)
  const validateSignUpInput = async (email, phone, fullname) => {
    let isValid = true;

    if (!isValidEmail(email) && !isValidPhoneNumber(phone)) {
     setEmailOrPhoneError("Please enter a valid email or phone number.");
     isValid = false;
    } else {
      setEmailOrPhoneError(null);
    }

    if (!fullname.trim().includes(" ") || !isValidFullName(fullname)) {
      setFullNameError("Please enter your full name (First and Last name).");
      isValid = false;
    } else {
      setFullNameError(null);
    }

    return isValid;
  }

  const handleChange = (e) => {

    const { name, value } = e.target;

    if (name === "emailOrPhone") {
      if (isValidEmail(value)) {
        setFormData({ ...formData, email: value, phone: "" });
      } else if(isValidPhoneNumber(value)) {
        setFormData({ ...formData, phone: value, email: "" });
      }
    } else {
      setFormData((preFormData) => ({ ...preFormData, [name]: value }));
    }
   
  };

  const handleSignUp = async () => {
    setIsLoading(true);
    setEmailOrPhoneError(null);
    setFullNameError(null);

    console.log("🔍 Form Data before sending: ", formData)

    const isValid = validateSignUpInput(formData.email, formData.phone, formData.fullname);
    if (!isValid) {
      setIsLoading(false);
      return;
    }
    
    try {
      const response = await fetch("http://localhost:3000/api/auth/send-otp", {
        method: "POST",
        headers:{ "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email || null,
          phone: formData.phone || null,
          fullname: formData.fullname || null,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      console.log("✅ OTP enviado para novo usuário: ", {
        email: formData.email,
        phone: formData.phone,
        fullName: formData.fullname,
      });

      localStorage.setItem("signupData", JSON.stringify({ 
        state: { 
          email: formData.email || null, 
          phone: formData.phone || null, 
          fullname: formData.fullname || null, 
        } 
      }));

      // Autenticar utilizador e redirecionar para home
      // Authenticate user and redirect to home
      navigate("/verify-code", {
        state: {
          email: formData.email,
          phone: formData.phone,
          fullName: formData.fullname,
          type: "signup"
        }
      });

    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

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
            <input type="text" id="signup-phonenumber-email" name="emailOrPhone" className={`peer block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600peer block w-full rounded-lg border border-gray-300 bg-transparent px-2 pt-5 pb-2 text-gray-900 dark:border-gray-600 dark:text-white focus:border-blue-600 focus:outline-none focus:ring-0 
            
            ${ emailOrPhoneError ? "border-red-500" : "border-gray-300" }`}

            onChange={handleChange} 
            placeholder=" " required></input>
            <label htmlFor="signup-username-email" className="absolute left-2 top-2 text-sm text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-[-50%] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600">E-mail or phone number</label>
          </div>

          {emailOrPhoneError && <p className="error-message-phone-email">{emailOrPhoneError}</p>}

          <div className="overlay-content-signup-fullname">
            <input type="text" id="signup-fullname" name="fullname" className={`peer block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600peer block w-full rounded-lg border border-gray-300 bg-transparent px-2 pt-5 pb-2 text-gray-900 dark:border-gray-600 dark:text-white focus:border-blue-600 focus:outline-none focus:ring-0 
            
            ${ fullNameError ? "border-red-500" : "border-gray-300" }`}

            onChange={handleChange} 
            placeholder=" " required></input>
            <label htmlFor="signup-fullname" className="absolute left-2 top-2 text-sm text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-[-50%] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600">Full name</label>
          </div>

          {fullNameError && <p className="error-message-fullname">{fullNameError}</p>}

          <div className="overlay-content-signup-button">
            <button onClick={handleSignUp} disabled={isLoading} > {isLoading ? "Registering..." : "Receive access code"} <TbMusicShare size={20} style={{ marginLeft: "5px", color: "white"}}/></button>
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