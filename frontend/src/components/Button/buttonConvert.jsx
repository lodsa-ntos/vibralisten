import React from "react";
import "./buttonConvert.css";

const ButtonConvert = () => {
  return (
    <React.Fragment>
    <div className="container-box">
      <div className="box">
        <input className="link-box" type="text" id="input-link" placeholder="Please paste the YouTube video URL here..."></input>
        <button className="bnt">Convert</button>
      </div>
    </div>
    
    </React.Fragment>
  );
};

export default ButtonConvert;
