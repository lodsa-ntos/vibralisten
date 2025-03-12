import React from "react";
import { FaSpotify } from "react-icons/fa";
import { FaDeezer } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TbMusicShare } from "react-icons/tb";
import { RiMusicAiLine } from "react-icons/ri";

export const Signup = () => {

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

        <div className="bg-white rounded-xl sm:px-6 px-4 py-10 max-w-md w-full h-max shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] max-lg:mx-auto">
          <form>
            <div className="mb-8">
              <h3 className="text-3xl text-center font-semibold text-slate-900">Discover music that moves you!</h3>
            </div>
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

            <div className="space-y-6">
              <div>
                <label className="text-slate-800 text-sm font-medium mb-2 block">Your e-mail or phone number</label>
                <div className="relative flex items-center">
                  <input name="username" type="text" required className="w-full text-sm text-slate-800 border border-slate-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter e-mail or phone number" />
                </div>
              </div>
              <div>
                <label className="text-slate-800 text-sm font-medium mb-2 block">Full name</label>
                <div className="relative flex items-center">
                  <input name="password" type="text" required className="w-full text-sm text-slate-800 border border-slate-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Type your full name here" />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button type="button" className="w-full shadow-xl py-2 px-4 text-[15px] font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
              Let’s vibe! 🎵
              </button>
            </div>
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