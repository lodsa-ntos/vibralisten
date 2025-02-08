import React from "react";
import { useState } from "react";
import axios from "axios";
import "./buttonConvert.css";

const ButtonConvert = () => {
  const [ isValid, setIsValid ] = useState(null);
  const [ videoUrl, setvideoUrl ] = useState("");
  const [ status, setStatus ] = useState(null);
  const [ downloadUrl, setdownloadUrl ] = useState("");
  const [ loading, setLoading] = useState(false);

  const validateLink = (e) => {
    const link = e.target.value.trim();
    const youtubeRegex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
    
    if (link === "") {
      setIsValid(null);
    } else if (youtubeRegex.test(link)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    setvideoUrl(link);
  };

  const handleChange = (e) => {
    setvideoUrl(e.target.value);
  };

  const handleInputChange = (e) => {
    validateLink(e);
    handleChange(e);
  };

  const handleConvert = async () => {
    if (!videoUrl) {
      alert("Please enter a valid Youtube URL.");
      return;
    }

    const youtubeRegex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;

    if (!youtubeRegex.test(videoUrl)) {
      setIsValid(false);
      alert("Invalid YouTube URL. Please enter a correct link.");
      return
    } else {
      setIsValid(true);
    }

    setLoading(true);

    try {
      const response = await axios.post("https://backendvibralisten.com/api/convert", { url: videoUrl });

      if (response.status === 200) {
        setStatus("success");
        setdownloadUrl(response.data.downloadUrl);
      }
    } catch (error) {
      setStatus(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
    <div className="container-box">
      <div className="box">
        <input 
          className={`link-box ${isValid === true ? "valid" : isValid === false ? "invalid" : ""}`} 
          type="text" 
          value={videoUrl}
          onChange={handleInputChange} 
          id="input-link" 
          placeholder="Please paste the YouTube video URL here..."
        >
        </input>

        <button className="bnt" onClick={handleConvert} disabled={loading}>{loading ? "Converting..." : "Convert"}</button>
        {status === "success" && (
          <div className="success-message-convert">
            ✅ Conversion Successful! 
            <a href={downloadUrl} download className="download-btn">Download MP3</a>
          </div>
          )}
        {status === "error" && (
          <div className="error-message-convert">
            ❌ Error processing the request. Try again later.
          </div>
          )}
      </div>
    </div>
    </React.Fragment>
  );
};

export default ButtonConvert;

