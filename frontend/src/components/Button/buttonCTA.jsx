import React from "react";
import { useNavigate } from "react-router-dom";
import "./buttonCTA.css";

const ButtonCTA = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (window.location.pathname !== "#home") {
      navigate("#home");
    } else {
      const homeSection = document.getElementById("home-section");

      if (homeSection) {
        homeSection.scrollIntoView({behavior: "smooth"});
      }
    }
  };
 return (
  <React.Fragment>
  {/* Spacing between about section and button */}
  <div className="spacing-between-about-and-btn"></div> 

  <div className="container-cta-btn">
    <button onClick={handleClick} className="cta-btn" type="submit">Try it now</button>
  </div>
  </React.Fragment>
 );
};

export default ButtonCTA;