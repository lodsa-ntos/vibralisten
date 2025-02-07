import React from "react";
import { useState } from "react";
import "./CookiesBanner.css";

const CookiesBanner = () => {
  const [isAccepted, setIsAccepted] = useState(localStorage.getItem("cookiesAccepted"));

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true"); 
    setIsAccepted(true);
  };

  return (
    !isAccepted && (
      <div className="cookies-banner">
        <p>
        We use cookies to improve your experience. By continuing, you agree to our <a href="/cookies">Cookies Policy</a>
        </p>
        <button onClick={acceptCookies}>Accept</button>
      </div>
    )
  );
};

export default CookiesBanner;