import React from "react";
import "./buttonCTA.css";

const ButtonCTA = () => {
 return (
  <React.Fragment>
  {/* Spacing between about section and button */}
  <div className="spacing-between-about-and-btn"></div>

  <div className="container-cta-btn">
    <button className="cta-btn" type="submit">Try it now</button>
  </div>
  </React.Fragment>
 );
};

export default ButtonCTA;