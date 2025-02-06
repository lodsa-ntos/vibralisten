import React from "react";
import { useState } from "react";
import "./buttonConvert.css";

const ButtonConvert = () => {
  const [ isValid, setIsValid ] = useState(null);

  const validateLink = (e) => {
    const link = e.target.value;
    const youtubeRegex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
    
    if (youtubeRegex.test(link)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <React.Fragment>
    <div className="container-box">
      <div className="box">
        <input className={`link-box ${isValid === null ? "" : isValid ? "valid-input" : "invalid-input"}`} type="text" onChange={validateLink} id="input-link" placeholder="Please paste the YouTube video URL here..."></input>
        <button className="bnt">Convert</button>
      </div>
    </div>
    
    </React.Fragment>
  );
};

export default ButtonConvert;
