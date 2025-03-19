import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import About from "../About/About";
import FAQs from "../FAQs/FAQs";
import Contact from "../Contact/Contact";
import Footer from "../../components/Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import { getCsrfToken } from "../../utils/getCsrfToken";

export const UserHome = () => {
  const { user, logout } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogout = async () => {
    setError("");

    try {

      const csrfToken = await getCsrfToken();
      
      if (!csrfToken) throw new Error("CSRF Token is missing");

      const response = await fetch("http://localhost:3000/api/auth/logout", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "XSRF-TOKEN": csrfToken,
        },
        credentials: "include",
      });

      const data = await response.json();
      console.log("Logout backend: ", data);

      if (!response.ok) {
        console.error("🔴 Logout Error: ", data);
        throw new Error(data.message || "Logout failed");
      }

      console.log("✅ Logout successfully ");
      
      logout();
      navigate("/login");

    } catch (error) {
      setError("Something went wrong. Please try again.");
      console.log("❌ Logout Error: ", error);
    }
  };

  useEffect(() => {
    if (!user) {
      console.warn("⚠️ User not authenticated! Redirecting to login...");
      navigate("/login")
    }
  }, [user, navigate]);

  return (
    <div>
      <div className="container-layout">
        <section id="home" className="home-section">
          {/* spacing before the header */}
          <div className="home-above-header-spacing"></div>
          <Header />
          {/* spacing below the header */}
          <div className="home-below-header-spacing"></div>
          {/* featured-title */}
          <h1>
            {error && <p className="text-red-500">{error}</p>}
            <button onClick={handleLogout}>Logout</button>
          </h1>
          {/* Space below the featured title */}
          <div className="home-below-featured-title"></div>
          {/* subtitle */}
          <p className="subtitle">Fast, simple and free. Just paste the link.</p>
          {/* Space below the subtitle */}
          <div className="home-below-subtitle"></div>
          {/* Button */}

          <div className="spacing-between-link-box-btn"></div>

          <p className="impact-phrase">
          🎵 Download your favorite tracks effortlessly. Enjoy music your way!
          </p>
        
        </section>

        {/* About Section */}
          <section id="about" className="about-section">
            <About />
          </section>

        {/* FAQs Section */}
          <section id="faqs" className="faqs-section">
            <FAQs />
          </section>

          {/* Contact Section */}
        <section id="contact" className="contact-section">
              <Contact />
          </section>
      </div>
      
        
        
        {/* Footer Section*/}
        <footer id="footer" className="footer-section">
            <Footer />
        </footer>

        <ScrollToTopButton />

    </div>
  );
};
