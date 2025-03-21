import React, { useEffect, useState } from "react";
import { RiMusicAiLine } from "react-icons/ri";
import { getCsrfToken } from "../../../utils/getCsrfToken";
import { useNavigate } from "react-router-dom";

export const OTPVerification = () => {
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [purpose, setPurpose] = useState("");
  const [canResend, setCanResend] = useState(true);
  const [resendTimer, setResendTimer] = useState(30);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setPurpose(params.get("purpose") || "login");
  }, []);

  const handleVerifyOTP = async () => {
    setIsLoading(true);
    setError("");

    const userId = localStorage.getItem("userId");
    const email = localStorage.getItem("email");
    const phone = localStorage.getItem("phone");
    const fullName = localStorage.getItem("fullName");

    console.log("📌 Data recovered from LocalStorage:");
    console.log("userId: ", userId);
    console.log("otp: ", otp);
    console.log("fullName: ", fullName);
    console.log("email: ", email);
    console.log("phone: ", phone);
    console.log("purpose: ", purpose);

    console.log("📌 userId before sending the request: ", userId);

    console.log("🛠️ Checking OTP before verification: ", otp, "Length: ", otp.length);

    if (!userId || !otp || otp.length !== 6) {
      setError("User not found. Please login again.");
      setIsLoading(false);
      return;
    }

    let endpoint = "";

    if (purpose === "login") {
      endpoint = "http://localhost:3000/api/auth/verify-login";
    } else if (purpose === "signup") {
      endpoint = "http://localhost:3000/api/auth/verify-signup";
    } else if (purpose === "recovery") {
      endpoint = "http://localhost:3000/api/auth/verify-recovery";
    }

    try {

      const csrfToken = await getCsrfToken();

      if (!csrfToken) throw new Error("CSRF Token is missing");

      const payload = purpose === "signup"
      ? { userId, otp, fullName, email, phone }
      : { userId, otp };

      console.log("📩 Payload sent to check OTP:", JSON.stringify(payload));

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "XSRF-TOKEN": csrfToken,
         },
        credentials: "include",
        body: JSON.stringify(payload),
      });

      console.log("🔍 OTP Verification response status: ", response.status);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Verify OTP failed");
      }

      const data = await response.json();
      console.log("✅ OTP Verified! Checking session...", data);

      const sessionResponse = await fetch("http://localhost:3000/api/auth/session", {
        method: "GET",
        credentials: "include",
      });

      console.log("🔍 Login response status: ", sessionResponse.status);

      if (!sessionResponse.ok) {
        throw new Error("Session verification failed.");
      }

      const sessionData = await sessionResponse.json();
      console.log("✅ User authenticated: ", sessionData.user);

      if (!sessionData.user) {
        throw new Error("User data is missing in session response.");
      }

      localStorage.setItem("accessToken", data.token);
      localStorage.removeItem("refreshToken", data.refreshToken)
      setUser(sessionData.user);

      console.log("✅ Navigating to /home... ");
      navigate(`/home`, { replace: true });

    } catch (error) {
      setError("Something went wrong. Please try again.");
      console.log("❌ OTP Verification Error: ", error);
    }

    setIsLoading(false);
  };

  const handleResendOTP = () => {
    if (!canResend) return;
    setCanResend(false);
    setResendTimer(30);

    // API para reenviar OTP
    // API to resend OTP
    fetch("http://localhost:3000/api/auth/resend-otp")
    .then(() => console.log("OTP reenviado"));

    const interval = setInterval(() => {
      setResendTimer(prev => {
        if (prev === 1) {
          clearInterval(interval);
          setCanResend(true);
        }
        return prev - 1;
      });
    }, 1000);
  }

  return (
    <div style={{ 
      fontFamily: "Satoshi", 
      letterSpacing: "0.2px" 
      }}  className="font-[sans-serif]">
    <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">

      {/* Logo in the top left corner */}
      <div className="absolute -top-6 left-8 w-32 sm:w-40 text-2x1 cursor-pointer z-10">
        <img
          src="Logo/vibralisten_logo_w.svg"
          className="mb-11.5 w-40 h-40 mr-2 dark:hidden inline-block object-contain drop-shadow-[0px_4px_10px_rgba(255,255,255,0.4)]"
          alt="vibralisten_logo"
        />
      </div>

      {/* Copyright */}
      <div className="absolute -bottom-24 right-7 sm:bottom-6 text-gray-800 z-10 inline-flex">
        <p className="text-sm opacity-80 mr-1">© 2025 VIBRALISTEN. Your sound, your vibe. </p><RiMusicAiLine className=" items-center justify-center content-center animate-bounce"/>
      </div>

      <div className="grid md:grid-cols-2 items-center gap-6 max-w-6xl w-full">
        <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto mt-20 sm:mt-0">
          <form className="space-y-4">
            <div className="mb-8">
              <h3 className="text-gray-800 text-3xl font-bold text-center">
                {purpose === "login" && "Enter OTP to Log In"}
                {purpose === "signup" && "Verify Your Account"}
                {purpose === "recovery" && "Enter OTP to Reset Password"}
              </h3>
              <p className="text-gray-500 text-sm mt-4 leading-relaxed">We sent a 6-digit code to your email/phone. Enter it below.</p>
            </div>

            <div className="flex justify-center space-x-3 my-4">
              {[...Array(6)].map((_, i) => (
                <input 
                  key={i} 
                  type="text" 
                  maxLength="1"
                  className="w-10 h-12 text-xl text-center border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 outline-blue-600"
                  onChange={(e) => {
                    setOtp(prev => prev.slice(0, i) + e.target.value + prev.slice(i + 1));
                    if (e.target.value && i < 5) {
                      document.getElementById(`otp-${i+1}`).focus();
                    }
                  }}
                  id={`otp-${i}`}
                />
              ))}
            </div>

            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            <div className="!mt-8">
              <button type="button" onClick={handleVerifyOTP} className="w-full flex items-center justify-center shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition" disabled={isLoading}>
              {isLoading ? (
                <>
                <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l4-4-4-4v4a8 8 0 00-8 8z"></path>
                </svg>
                Verifying...
                </>
              ) : "Verify & Continue"}
              </button>
            </div>

            <p className="text-sm !mt-8 text-center text-gray-500">Didn't receive a code? 
              <button 
              onClick={handleResendOTP} 
              className={`ml-1 font-semibold ${canResend ? "text-blue-600 hover:underline" : "text-gray-400 cursor-not-allowed"}`} disabled={!canResend}
              >
                {canResend ? "Resend OTP" : `Wait ${resendTimer}s`}
              </button>
              </p>
          </form>
        </div>
        <div className="max-md:mt-8">
          <img src="https://readymadeui.com/login-image.webp" className="w-full aspect-[71/50] max-md:w-4/5 mx-auto block object-cover" alt="Dining Experience" />
        </div>
      </div>
    </div>
  </div>
    );
};