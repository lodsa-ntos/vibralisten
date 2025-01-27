import React from "react";
import "./Button.css";

const ButtonConvert = () => {
  return (
    <>
    <div className="container-box">
      <div className="box">
        <input className="link-box" type="text" placeholder="Please paste the YouTube video URL here..."></input>
      </div>
    </div>

    {/* Spacing between link box and button */}
    <div className="spacing-between-link-box-btn"></div>
    
    <div className="container-btn">
      <button className="convert-btn">Convert</button>
    </div>
    
    </>
  );
};

export default ButtonConvert;
