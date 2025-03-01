import React from "react";
import { FaSpotify, FaDeezer } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GiMusicalNotes } from "react-icons/gi";
import "../../../assets/styles/global.css"

const LoginScreen = () => {
  return (
    <div className="flex h-screen font-satoshi">
      {/** Left: Form */}
      <div className="w-full md:w-5/12 flex items-center justify-center bg-dark-grey text-black p-10">
        <div className="max-w-md w-full">
          <h1 className="text-4xl font-bold text-blue-vibrant">
            Sign in to <span className="text-black">VIBRA</span>LISTEN
          </h1>
          <p className="mt-2 text-grey2">Sign in to your account</p>

          {/** Input E-mail */}
          <input 
            type="text" 
            id="login" 
            name="login-username"
            className="peer block px-3 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-vibrant focus:border-transparent"
            placeholder=" "
            required
          />
          <label 
            htmlFor="login" 
            className="absolute left-3 top-3 text-sm text-gray-500 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-sm peer-focus:text-blue-vibrant"
          >
            Mobile number, username or e-mail
          </label>

          {/** Submit Button */}
          <button className="mt-4 flex items-center justify-center w-full bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all">
            Let’s Go <GiMusicalNotes size={20} className="ml-2" />
          </button>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-4 text-gray-400">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/** Social Logins */}
          <div className="space-y-3">
            <button className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg">
              <FaSpotify size={20} className="mr-2" /> Login with Spotify
            </button>
            <button className="flex items-center justify-center w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg">
              <FaDeezer size={20} className="mr-2" /> Login with Deezer
            </button>
            <button className="flex items-center justify-center w-full bg-white text-black border border-gray-300 py-2 rounded-lg hover:bg-gray-100">
              <FcGoogle size={20} className="mr-2" /> Login with Google
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-gray-400">
            New here? Let’s get you started with some fresh tunes! <a href="/signup" className="text-blue-vibrant hover:underline">Sign up!</a>
          </p>
        </div>
      </div>

      {/** Right: Background */}
      <div className="hidden md:block md:w-7/12 relative bg-blue-vibrant">
        <div className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: "url('/images/authlayoutimages/default.jpg')" }}>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
