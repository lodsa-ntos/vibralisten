import React, { useState, useContext } from "react";
import { FaSpotify, FaDeezer } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TbMusicShare } from "react-icons/tb";
import { RiMusicAiLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../../../services/authService";

export const Signup = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setToken } = useAuth();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{9,15}$/;

  const [signupData, setSignupData] = useState({
    emailOrPhone: "",
    fullName: "",
  });

  const handleInputChange = (e) => {
    const value = e.target.value;
    const valueName = e.target.name;
    setSignupData({ ...signupData, [valueName]: value });
}
  const handleSignUp = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    let email = "";
    let phone = "";

    if (emailRegex.test(signupData.emailOrPhone)) {
      email = signupData.emailOrPhone;
    } else if (phoneRegex.test(signupData.emailOrPhone)) {
      phone = signupData.emailOrPhone;
    } else {
      setError("Please enter a valid e-mail address or phone number.");
      setIsLoading(false);
      return;
    }

    if (signupData.fullName.trim()) {
      setError("The full name is required. (First and last only)");
      setIsLoading(false);
      return;
    }

    const formattedData = {
      fullName: signupData.fullName.trim(),
      email: email || undefined,
      phone: phone || undefined,
    };

    try {
      console.log("🚀 Sending signup request with: ", formattedData);

      const data = await signupUser(formattedData);
      console.log("✅ Response from the backend: ", data);

      if (!data || !data.success || !data.user) {
        throw new Error("Invalid response from server.");
      }

      setToken(data.token);

      localStorage.setItem("userId", data.user.userId);
      if (data.user.email) localStorage.setItem("email", data.user.email);
      if (data.user.phone) localStorage.setItem("phone", data.user.phone);
      localStorage.setItem("fullName", data.user.fullName);

      console.log("✅ Redirecting to OTP check... ");
      navigate(`/verify-otp?purpose=signup`, { replace: true });

    } catch (error) {
      console.error("❌ Signup error: ", error);

      if (error.message.includes("CSRF Token")) {
        setError("Something went wrong. Try again.");
      } else if (error.message.includes("Unauthorized")) {
        setError("Invalid details. Please check and try again.");
      } else if (error.message.includes("User already registered")) {
        setError("This account already exists. Please log in instead.");
      } else {
        setError("Error creating account. Try again.");
      }
    } finally {
      setIsLoading(false);
    }
  }
  
  return (
    <div style={{ 
      fontFamily: "Satoshi", 
      letterSpacing: "0.2px" 
      }}  className="font-[sans-serif]">
      <div className="grid lg:grid-cols-2 gap-4 max-lg:gap-12 bg-gradient-to-r from-blue-500 to-blue-700 sm:px-8 px-4 py-12 h-[320px]">
        <div>
          <a href="javascript:void(0)"><img
            src="Logo/vibralisten_logo.svg" alt="logo" className="w-40" />
          </a>
          <div className="max-w-lg mt-16 max-lg:hidden">
            <h3 className="text-3xl font-semibold text-white">Sign up</h3>
            <p className="text-sm mt-4 text-slate-100 leading-relaxed"> Step into a world of endless music possibilities. Feel the rhythm. Every beat tells a story, and every song feels like home.</p>
          </div>
        </div>

        {/* Registration form */}
        <div className="bg-white rounded-xl sm:px-6 px-4 py-10 max-w-md w-full h-max shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] max-lg:mx-auto">
          <form onSubmit={handleSignUp}>
            <div className="mb-8">
              <h3 className="text-3xl text-center font-semibold text-slate-900">Discover music that moves you!</h3>
            </div>

            {/* Social Logins */}
            <div className="sm:flex sm:items-start space-x-4 max-sm:space-y-4 mb-8">
              <button type="button" className="py-2.5 px-4 flex text-sm font-medium rounded-md bg-blue-100 hover:bg-blue-200 focus:outline-none">
              <FaSpotify className="size-5 text-green-500 mr-2" /> 
                Sign up with Spotify
              </button>
              <button type="button" className="py-2.5 px-4 text-sm font-semibold rounded-md text-blue-500 bg-blue-100 hover:bg-blue-200 focus:outline-none">
                <FaDeezer  className="size-5" /> 
              </button>
              <button type="button" className="py-2.5 px-4 text-sm font-semibold rounded-md text-blue-500 bg-blue-100 hover:bg-blue-200 focus:outline-none">
                <FcGoogle className="size-5" />
              </button>
            </div>

            {/* Form inputs */}
            <div className="space-y-6">
              <div>
                <label className="text-slate-800 text-sm font-medium mb-2 block">Your e-mail or phone number</label>
                <div className="relative flex items-center">
                  <input
                  name="emailOrPhone" 
                  type="text" 
                  required 
                  value={signupData.emailOrPhone}
                  onChange={handleInputChange}
                  className="w-full text-sm text-slate-800 border border-slate-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter e-mail or phone number" />
                </div>
              </div>
              <div>
                <label className="text-slate-800 text-sm font-medium mb-2 block">Full name</label>
                <div className="relative flex items-center">
                  <input 
                  name="fullName" 
                  type="text" 
                  required 
                  value={signupData.fullName}
                  onChange={handleInputChange}
                  className="w-full text-sm text-slate-800 border border-slate-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Type your full name here" />
                </div>
              </div>
            </div>

            {/* Display error if any */}
            {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}

            {/* Signup button */}
            <div className="mt-4">
              <button 
              type="submit"
              disabled={isLoading}
              className={`w-full text-white ${isLoading ?"bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-cente cursor-not-allowed" : "bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 focus:cursor-wait font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" }`}>
              {isLoading ? "Processing..." : "Let’s vibe! 🎵"}
              </button>
            </div>

            {/* Login link */}
            <p className="text-sm mt-6 text-center text-slate-800">Already part of the vibe? <a href="/login" className="text-blue-600 font-medium hover:underline ml-1 whitespace-nowrap">Log in here!</a></p>
          </form>
        </div>
        
        {/* Copyright */}
        <div className="w-auto my-0 border-gray-200 justify-end sm:justify-center dark:border-gray-700 lg:my-8">
          <div className="absolute right-5 sm:justify-center sm:items-center sm:text-center md:justify-center md:text-center">
            <p className="flex text-sm opacity-80 mr-1">© 2025 VIBRALISTEN. Your sound, your vibe. <RiMusicAiLine className="ml-1 items-center justify-center content-center animate-bounce"/> </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}