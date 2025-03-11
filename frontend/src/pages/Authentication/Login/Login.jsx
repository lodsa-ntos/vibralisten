import React from "react";
import { FaSpotify, FaDeezer } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RiMusicAiLine } from "react-icons/ri";
import { loginUser } from "../../../services/authService";
import { useNavigate } from "react-router-dom";
import { detectLoginType } from "../../../utils/detectLoginType";
import { useAuth } from "../../../hook/useAuth";

export const Login = () => {

    const [ isLoading, setIsLoading ] = React.useState(false);
    const [loginInput, setLoginInput] = React.useState("");
    const [error, setError] = React.useState("");
    const navigate = useNavigate();
    const { setUser } = useAuth();

    const handleInputChange = (e) => {
        const value = e.target.value;
        setLoginInput(value);

        if (value.length > 0 && value.length < 6) {
            setError("Enter at least 6 characters.");
        } else {
            setError("");
        }
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setError("");

        console.log("Value of loginInput: ", loginInput)

        try {

            const loginData = detectLoginType(loginInput);
            console.log("Sending to login: ", loginData) // Debug

            if (!loginInput.trim()) {
                throw new Error("Please provide an email, phone number, or username.");
            }

            const data = await loginUser(loginData);
            console.log("✅ Backend response: ", data);

            if (data && data.success) {
                console.log("✅ Login request successful, checking session...");

                if (data.token) {
                    localStorage.setItem("accessToken", data.token);
                    localStorage.setItem("refreshToken", data.refreshToken);
                    if (data.user) {
                        localStorage.setItem("user", JSON.stringify(data.user));
                        console.log("✅ Access Token and User data saved.");
                    } else {
                        throw new Error("User data not received.");
                    }

                } else {
                    throw new Error("Access Token not received.");
                }

                const accessToken = localStorage.getItem("accessToken");
                const user = JSON.parse(localStorage.getItem("user"));
                const userId = user ? user.id : null;
                
                if (!accessToken || !userId) {
                    throw new Error("Session storage failed. Please log in again.");
                }

                console.log("✅ Tokens confirmed. Proceeding.. ");

                const sessionResponse = await fetch("http://localhost:3000/api/auth/session", { 
                    method: "GET",
                    credentials: "include",
                    headers: {
                        "Authorization": `Bearer ${accessToken}`,
                        "Content-Type": "application/json"
                    }
                });

                if (!sessionResponse.ok) {
                    throw new Error("Session validation failed.");
                }

                const sessionData = await sessionResponse.json();

                if (sessionData.user) {
                    console.log("✅ Session confirmed, user authenticated: ", sessionData.user);
                    setUser(sessionData.user);

                    // Redirecionar para verificação OTP, passando o propósito
                    // Redirect to OTP check, passing the purpose
                    navigate(`/verify-otp?purpose=login`);
                  
                } else {
                    throw new Error("No user data received.");
                  }
            } else {
                console.error("❌ Error: Invalid response from the backend ", data);
                setError("Login failed. Please try again.");
            }
        } catch (error) {
            console.error("Error trying to log in: ", error.message);

            if (error.message.includes("CSRF Token")) {
                setError("Something went wrong. Please refresh the page.");
            } else if (error.message.includes("Unauthorized")) {
                setError("Invalid login details. Please check and try again.");
            } else {
                setError("Oops! Something went wrong. Please try again.");
            }
        }

        setIsLoading(false);
    }

    return (
        // Div main container
        <div style={{ 
            fontFamily: "Satoshi, sans-serif", 
            letterSpacing: "0.2px" 
            }} 
            className="relative flex h-screen font-[sans-serif] bg-gray-50 bg-[url(images/authlayoutimages/fundo_19.jpg)] bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-black/40 object-contain">
        
            {/* Gradient to darken the bottom part */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent"></div>

            { /* Gradient to darken the top part */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent"></div>

            {/* Logo in the top left corner */}
            <div className="absolute -top-6 left-6 text-2x1 cursor-pointer z-10">
                <img
                src="Logo/vibralisten_logo.svg"
                className="mb-11.5 w-40 h-40 mr-2 dark:hidden inline-block object-contain drop-shadow-[0px_4px_10px_rgba(255,255,255,0.4)]"
                alt="vibralisten_logo"
                />
            </div>

            {/* Artist name and details 
            <div className="absolute bottom-6 left-6 text-white z-10">
                <h2 className="text-2x1 font-bold">Kendrick Lamar</h2>
                <p className="text-sm opacity-80">Super Bowl | 2025 | HipHop & Rap</p>
            </div>*/}

            {/* Copyright */}
            <div className="absolute bottom-6 right-7 text-gray-200 z-10 inline-flex">
                <p className="text-sm opacity-80 mr-1">© 2025 VIBRALISTEN. Your sound, your vibe. </p><RiMusicAiLine className=" items-center justify-center content-center animate-bounce"/>
            </div>

            {/* Flexible container */}
            <div className="flex flex-1 items-center justify-center p-4 sm:p-6 lg:p-8">

                <div className="z-10 w-full text-white max-w-sm border border-gray-500/30 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mt-8 lg:mt-8 backdrop-blur-sm">

                    {/* Header - Title Form */}
                    <div className="w-full text-gray-500 dark:text-gray-400 p-2 min-h-[20px] rounded-t-lg flex flex-col justify-center border-t-1 border border-gray-500/30 dark:border-gray-700 backdrop-blur-sm">
                        <div className="justify-center space-x-6 inline-flex text-gray-200">
                        Elevate your music experience.
                        </div>
                    </div>

                    {/* Login Form */}
                    <div className="flex flex-col w-full max-w-sm mx-auto p-4 border-t-1 border border-gray-500/30 backdrop-blur-sm shadow">
                        <form onSubmit={handleLogin} className="space-y-6" action="#">
                            <h5 className="text-xl font-medium text-gray-200 dark:text-white">Sign in to our platform</h5>
                            <div className="flex flex-col mb-2">
                                <label htmlFor="login_id"
                                    className="block mb-2 text-sm font-medium text-gray-200 dark:text-white">
                                    Mobile number, username or e-mail
                                </label>
                                <div className="relative">
                                    <div className="absolute flex border border-transparent left-0 top-0 h-full w-10">
                                        <div className="flex items-center justify-center rounded-tl rounded-bl z-10 bg-gray-100 text-gray-600 text-lg h-full w-full">
                                            <svg viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="h-5 w-5">
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="12" cy="7" r="4"></circle>
                                            </svg>
                                        </div>
                                    </div>

                                    <input id="login_id"
                                        name="login"
                                        type="text"
                                        placeholder="Enter your email, phone or username"
                                        value={loginInput}
                                        onChange={handleInputChange}
                                        className="bg-gray-50 text-gray-900 text-sm relative w-full border rounded dark:placeholder-gray-400 dark:bg-gray-600 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12"
                                    />
                                </div>

                                {error && <p className="text-red-500 text-sm pt-2 font-semibold dark:text-white">{error}</p>}
                            </div>
                            
                            {/** Button: Login */}
                            <button type="submit" className={`w-full text-white ${loginInput.length < 6 ?"bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-cente cursor-not-allowed" : "bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 focus:cursor-wait font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" }`}
                            disabled={loginInput.length < 6 || isLoading}> {isLoading ? "Loading..." : "Dive into the Sound! 🚀"}
                            </button>
                            

                            <div className="flex items-center my-6">
                                <div className="flex-grow border-t-2 border-gray-500/30"></div>
                                <span style={{ fontFamily: "Satoshi, sans-serif" }} className="px-4 text-gray-200">or continue with</span>
                                <div className="flex-grow border-t-2 border-gray-500/30"></div>
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
                            <div className="text-center justify-center text-[14px] font-medium text-gray-200 dark:text-gray-300">
                            <span style={{ fontFamily: "Satoshi, sans-serif", letterSpacing: "0.5px" }} className="inline-block animate-bounce">🎵</span> Don't have an account? <a href="/signup" className="text-blue-700 hover:underline dark:text-blue-500">
                                Join the vibe!</a>
                            </div>
                        </form>
                    </div>

                    {/* Footer */}
                    <div className="w-full backdrop-blur-sm text-white dark:text-gray-400 p-1 min-h-[20px] rounded-b-lg flex flex-col justify-center border-t-1 border border-gray-500/30 dark:border-gray-700 text-center ">
                        <div className="flex space-x-14 md:space-x-14 text-center justify-center text-white">
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
