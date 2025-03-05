import React from "react";
import { useState, useEffect } from "react";

const PrefBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
      setTimeout(() => {
        const userPref = localStorage.getItem("userPref");
      
      isBraveBrowser().then((isBrave) => {
        if (!userPref) {
          setShowBanner(true);
        } else if (isBrave) {
          console.log("Brave detected. Adjusting banner behavior.");
          setShowBanner(false);
        }
      })
    }, 1500);
  }, []);

  const acceptBanner = () => {
    sessionStorage.setItem("userAccepted", "true"); 
    setShowBanner(false);
  };

  const isBraveBrowser = () => {
    return new Promise((resolve) => {
      if (navigator.brave !== undefined) {
        navigator.brave.isBrave().then((result) => {
          resolve(result);
        });        
      } else {
        resolve(false);
      }
    });
  };

  return (
    showBanner && (
      <div className="banner-wrapper"
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "#000",
        color: "#fff",
        padding: "10px",
        textAlign: "center",
      }}>
        <p>
        We use cookies to improve your experience. By continuing, you agree to our <a href="/preferences">Privacy Policy</a>
        </p>
        <button onClick={acceptBanner}
        style={{
          marginLeft: "10px",
          padding: "5px 10px",
          backgroundColor: "#4CAF50",
          color: "#fff",
          border: "none",
        }}
        >Accept</button>
      </div>
    )
  );
};

export default PrefBanner;