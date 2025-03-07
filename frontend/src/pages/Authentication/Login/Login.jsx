import React from "react";
import { FaSpotify, FaDeezer } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GiMusicalNotes } from "react-icons/gi";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export const Login = () => {
  return (
    // Div main container
    <div style={{ 
        fontFamily: "Satoshi, sans-serif", 
        letterSpacing: "0.5px" 
        }} 
        className="relative flex h-screen bg-gray-50 bg-[url(images/authlayoutimages/fundo_19.jpg)] bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-black/40 object-contain">
      
        {/* Gradient to darken the bottom part */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent"></div>

        { /* Gradient to darken the top part */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent"></div>

        {/* Logo in the top left corner */}
        <div className="absolute -top-6 left-6 text-2x1 cursor-pointer z-10">
            <img
              src="Logo/vibralisten_logo.svg"
              className="mb-11.5 w-40 h-40 mr-2 dark:hidden inline-block fill-transparent object-contain drop-shadow-lg"
              alt="vibralisten_logo"
            />
        </div>

        {/* Artist name and details 
        <div className="absolute bottom-6 left-6 text-white z-10">
            <h2 className="text-2x1 font-bold">Kendrick Lamar</h2>
            <p className="text-sm opacity-80">Super Bowl | 2025 | HipHop & Rap</p>
        </div>*/}

        {/* Copyright */}
        <div className="absolute bottom-6 right-6 text-white z-10">
            <p className="text-sm opacity-80">© 2025 VIBRALISTEN. Built with passion. 🚀</p>
        </div>

        {/* Flexible container */}
        <div className="flex flex-1 items-center justify-center px-4 sm:px-8 lg:px-20">

            <div class="z-10 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mt-8 lg:mt-8">

                {/* Header - Title Form */}
                <div className="w-full bg-[#cdddec] text-gray-500 dark:text-gray-400 p-2 min-h-[20px] rounded-t-lg flex flex-col justify-center border-t-2 border-gray-200 dark:border-gray-700">
                    <div className="justify-center space-x-6 text-gray-900 inline-flex">
                        Discover the music that moves you! <GiMusicalNotes className="animate-bounce" />
                    </div>
                </div>

                {/* Login Form - Rigth Side */}
                <div class="flex flex-col w-full max-w-sm mx-auto p-4 border border-gray-200 bg-white shadow">
                    <form className="space-y-6" action="#">
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
                        <div class="flex flex-col mb-2">
                            <label for="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Mobile number, username or e-mail
                            </label>
                            <div class="relative">
                                <div class="absolute flex border border-transparent left-0 top-0 h-full w-10">
                                    <div class="flex items-center justify-center rounded-tl rounded-bl z-10 bg-gray-100 text-gray-600 text-lg h-full w-full">
                                        <svg viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="h-5 w-5">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </div>
                                </div>

                                <input id="login_id"
                                    name="login"
                                    type="text"
                                    placeholder="Mobile number, username or e-mail"
                                    required
                                    className="bg-gray-50 text-gray-900 text-sm relative w-full border rounded dark:placeholder-gray-400 dark:bg-gray-600 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12"
                                />
                            </div>
	                    </div>
                        
                        {/** Button: Dive into the Sound! */}
                        <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 focus:cursor-wait font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> {"isLoading" ? <DotLottieReact
                        src="path/to/animation.lottie"
                        loop
                        autoplay
                        className="w-6 h-6"
                        /> : "Dive into the Sound!"}
                        </button>
                        

                        <div className="flex items-center my-6">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span style={{ fontFamily: "Satoshi, sans-serif" }} className="px-4 text-gray-400">or login with</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>
                        
                        {/** Social Logins */}
                        <div  className="flex flex-wrap justify-center w-full rounded-md shadow-xs gap-1">
                            <button
                                style={{ fontFamily: "Satoshi, sans-serif", letterSpacing: "0.5px" }}
                                className="flex items-center justify-center w-28 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg
                                transition-all duration-200 shadow-md hover:shadow-lg">
                                <FaSpotify size={20} className="mr-2" /> Spotify
                            </button>

                            <button 
                                style={{ fontFamily: "Satoshi, sans-serif", letterSpacing: "0.5px" }}
                                className="flex items-center justify-center w-24 bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
                                <FaDeezer size={20} className="mr-2" /> Deezer
                            </button>

                            <button 
                                style={{ fontFamily: "Satoshi, sans-serif", letterSpacing: "0.5px" }}
                                className="flex items-center justify-center w-28 bg-gray-100 text-black border border-gray-300 py-3 rounded-lg hover:bg-gray-300 transition-all duration-200 shadow-md hover:shadow-lg">
                                <FcGoogle size={20} className="mr-2" /> Google
                            </button>
                        </div>

                         {/** Signup navegation */}
                        <div class="text-center justify-center text-[13px] font-medium text-gray-500 dark:text-gray-300">
                        <span style={{ fontFamily: "Satoshi, sans-serif", letterSpacing: "0.5px" }} className="inline-block animate-bounce">🎵</span> New here? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create your free account and explore!</a>
                        </div>
                    </form>
                </div>

                {/* Footer */}
                <div className="w-full bg-[#f0f5f9] text-gray-500 dark:text-gray-400 p-1 min-h-[20px] rounded-b-lg flex flex-col justify-center border-t-2 border-gray-200 dark:border-gray-700 text-center ">
                    <div className="flex space-x-14 md:space-x-14 text-center justify-center text-gray-900">
                        <a href="" className="hover:underline  text-[14px] text-center ">About</a>
                        <a href="" className="hover:underline  text-[14px]">FAQs</a>
                        <a href="" className="hover:underline  text-[14px]">Terms</a>
                        <a href="" className="hover:underline text-[14px]">Privacy</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
