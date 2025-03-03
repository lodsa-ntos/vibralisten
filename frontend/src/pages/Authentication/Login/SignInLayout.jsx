import React from "react";
import { FaSpotify, FaDeezer } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GiMusicalNotes } from "react-icons/gi";

const LoginScreen = () => {
  return (
    <div className="flex h-screen font-satoshi">
      {/** Left: Form */}
      <div className="w-full md:w-5/12 flex items-center justify-center bg-dark-grey text-black p-10">
        <div className="max-w-md w-full">
          <div className="flex items-center justify-center h-8">
            <img
              src="Logo/music_symbol.svg"
              class="mb-11.5 w-10 h-10 mr-2 dark:hidden inline-block animate-pulse"
              alt="vibralisten_logo"
            />

            <h1 className="text-4xl text-center items-center justify-center font-bold text-blue-vibrant whitespace-nowrap leading-tight">
              <span className="bg-gradient-to-r from-blue-700 to-purple-500 bg-clip-text text-transparent font-sans font-bold tracking-normal">
                VIBRA
              </span>
              <span className="font-sans font-normal tracking-normal text-blue-vibrant">
                LISTE
              </span>
              <span className="bg-gradient-to-r from-blue-700 to-purple-500 bg-clip-text text-transparent font-sans font-bold">
                N{" "}
              </span>
            </h1>
          </div>

          <h2 className="text-3xl font-bold text-gray-400 mt-2 text-center tracking-wide drop-shadow-sm">
            Feel the Beat. Live the Vibe.
          </h2>

          <div className="mb-11.5 h-16 dark:hidden">
            <p className="mt-6 text-center text-lg text-gray-600">
              Your music journey starts here!
            </p>
          </div>

          {/** Input E-mail */}
          <div class="relative mb-6">
            <input
              type="text"
              id="login"
              class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-700 focus:outline-none focus:ring-0 focus:border-blue-700 peer"
              placeholder=" "
            />

            <label
              for="login"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-700 peer-focus:dark:text-blue-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Mobile number, username or e-mail
            </label>
          </div>

          {/** Submit Button */}
          <button className="mt-4 flex items-center justify-center w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:ring-2 hover:ring-blue-400 hover:ring-opacity-50 tracking-wide">
            Start Listening{" "}
            <GiMusicalNotes size={20} className="ml-2 animate-ping" />
          </button>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-4 text-gray-400">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/** Social Logins */}
          <div className="space-y-3">
            <button
              className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg
            transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <FaSpotify size={20} className="mr-2" /> Login with Spotify
            </button>
            <button className="flex items-center justify-center w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
              <FaDeezer size={20} className="mr-2" /> Login with Deezer
            </button>
            <button className="flex items-center justify-center w-full bg-white text-black border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-md hover:shadow-lg">
              <FcGoogle size={20} className="mr-2" /> Login with Google
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-gray-500">
            <span className="inline-block animate-bounce">🎵</span> Don't have
            an account?
            <a
              href="/signup"
              className="text-blue-700 font-semibold hover:underline hover:text-blue-400 transition-all duration-200"
            >
              {" "}
              Join the vibe!
            </a>
          </p>
        </div>
      </div>

      {/** Right: Background */}
      <div className="hidden md:block md:w-7/12 relative bg-blue-700">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-95 blur-[2px] hover:opacity-100 hover:blur-none transition-all duration-700 ease-in-out "
          style={{
            backgroundImage: "url('/images/authlayoutimages/default.jpg')",
          }}
        ></div>
      </div>
    </div>
  );
};

export default LoginScreen;
