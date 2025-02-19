import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { VscUnverified } from "react-icons/vsc";

const VerifyCode = ({ emailOrUsername }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || {};

  const [code, setCode] = useState("");
  const [error, setError] = useState(null);
  const [isVerifying, setIsVerifying] = useState(false);

  if (!email) {
    return <p>Invalid access. Please request a new login code.</p>
  }

  const handleVerifyCode = async () => {
    setIsVerifying(true);
    setError(null);

    try {
      const response =  await fetch("/verify-login-code", {
        method: "POST",
        headers:{ "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message);
    }

    navigate("/home");

    } catch (error) {
      setError(error.message);
    } finally {
      setIsVerifying(false);
    }
  };


  return (
      <div className="container-verify-layout">
        <div className="left-verify-section"></div>
        <div className="right-verify-section">
          <img
            src="images/authlayoutimages/fundo_26.jpg"
            alt="auth layout"
            className="verify-layout-image"
          />
        </div>
        <div className="overlay-verify-box">
          <h2>Enter Your Login Code</h2>
          <div className="overlay-verify-content">
            <div className="overlay-content-verify-username">
              <input type="text" value={code}
              onChange={(e) => setCode(e.target.value)}
              name="verify-username" className="peer block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600peer block w-full rounded-lg border border-gray-300 bg-transparent px-2 pt-5 pb-2 text-gray-900 dark:border-gray-600 dark:text-white focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " maxLength="6" required></input>
              <label htmlFor="verify-username-email" className="absolute left-2 top-2 text-sm text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-[-50%] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600">Enter 6-digit code</label>
            </div>
  
            <div className="overlay-content-verify-button">
              <button onClick={handleVerifyCode} disabled={isVerifying || code.length !== 6}>
                Verify <VscUnverified size={20} style={{ marginLeft: "5px", color: "white"}}/>
                {isVerifying ? "Verifying..." : "Verify Code"}
                </button>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
          </div>
        </div>
      </div>
    );
};

export default VerifyCode;