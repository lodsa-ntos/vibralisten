import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { VscUnverified } from "react-icons/vsc";
import { TbError404 } from "react-icons/tb";
import { AuthContext } from "../../../context/AuthContext";

export const VerifyOTP = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  let { email, phone, fullName, userId, type } = location.state || JSON.parse(localStorage.getItem("pendingUser")) || {};

  // Se os dados não estiverem no `location.state`, atualizar com `localStorage`
  // If the data is not in `location.state`, update with `localStorage`
  if (!email && !phone && !fullName) {
    const storedData = JSON.parse(localStorage.getItem("signupData")) || {};
    email = storedData.email || "";
    phone = storedData.phone || "";
    fullName = storedData.fullName || "";
  }

  console.log("📩 Data received in the check: ", {
    email,
    phone,
    fullName
  });

  const [code, setCode] = useState("");
  const [error, setError] = useState(null);
  const [isVerifying, setIsVerifying] = useState(false);

  // Se não houver email ou phone, mostra o erro e bloqueia acesso
  if (!email && !phone) {
    console.error("❌ No data found! Redirecting...");
    return (
      <p style={{
        margin: "50px 10px",
        alignItems: "center", 
        justifyContent: "center", 
        display: "flex", 
        marginTop: "50px"
      }}>
      <TbError404 size={20} style={{ marginRight: "10px", marginLeft: "10px", alignItems: "center", justifyContent: "center", display: "flex"}}/> Invalid access. Please request a new login code.</p>
    ); 
  }

  const handleVerifyCode = async () => {
    setIsVerifying(true);
    setError(null);

    try {

      console.log("Verifying OTP with: ", { email, phone, fullName, code });

      const bodyData =  {
        code,
        email: email || null,
        phone: phone || null,
        fullName: fullName || null,
      };

      const response =  await fetch("http://localhost:3000/api/auth/verify-otp", {
        method: "POST",
        headers:{ "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Verification failed. Try again.");
      }

      console.log("✅ Verification success: ", data);

      localStorage.setItem("vibraUser", JSON.stringify(data.user));
      localStorage.setItem("vibraToken", data.token);

    // Guarda o utilizador autenticado no contexto da autenticação
    // Saves the authenticated user in the authentication context
    login(data.user, data.token);

    // Redireciona para a página Home
    // Redirects to Home page
    setTimeout(() => {
      navigate("/home");
    }, 500);
    

    } catch (error) {
      console.error("❌ Error verifying OTP: ", error);
      setError(error.message);
    } finally {
      setIsVerifying(false);
    }
  };

  useEffect(() => {
    if (!email && !phone) {
      console.log("❌ No email or phone number found. Redirecting...");
      navigate("/");
    } else {
      console.log(`🟢 Verification of ${type}: `, { email, phone, userId, fullName });
    }
  }, [email, phone, fullName, type, navigate]);

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
          <h2>Check the OTP Code</h2>
          <p>We send a code to: {email || phone}</p>
          {type === "signup" && <p>Complete registration for: {fullName}</p>}
          <div className="overlay-verify-content">
            <div className="overlay-content-verify-username">
              <input 
              type="text" 
              value={code}
              onChange={(e) => setCode(e.target.value)}
              name="verify-username" className="peer block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600peer block w-full rounded-lg border border-gray-300 bg-transparent px-2 pt-5 pb-2 text-gray-900 dark:border-gray-600 dark:text-white focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " maxLength="6" required></input>
              <label htmlFor="verify-username-email" className="absolute left-2 top-2 text-sm text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-[-50%] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600">Enter 6-digit code</label>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div className="overlay-content-verify-button">
              <button onClick={handleVerifyCode} disabled={isVerifying || code.length !== 6 }>
              {isVerifying ? "Verifying..." : "Verify Code"}
                <VscUnverified size={20} style={{ marginLeft: "5px", color: "white"}}/>
                </button>
                
            </div>
          </div>
        </div>
      </div>
    );
};