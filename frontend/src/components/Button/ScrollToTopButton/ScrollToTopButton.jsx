import React from "react";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollToTopButton.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible ] = useState(false);
  const [hasCookieBanner, setHasCookieBanner] = useState(true);

  // Função para verificar a posição do Scroll
  // Function to check the scroll position
  const checkScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Função para voltar ao topo
  // Back to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll)
  }, []);

  const handleAcceptCookies = () => {
    setHasCookieBanner(false);
  };

  return (
    <>
    {isVisible && (
      <button
        className="scroll-to-top"
        style={{
          bottom: hasCookieBanner ? "80px" : "20px", //if the track exists, it rises to the top
          transition: "bottom .3s ease-in-out"
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
    </button>
    )}
    </>
  );
};

export default ScrollToTopButton;