import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL, CSRF_BASE_URL } from "../../config/generalConfigFrontend";
import "./buttonConvert.css";

const ButtonConvert = () => {
  const [isValid, setIsValid] = useState(null);
  const [videoUrl, setvideoUrl] = useState("");
  const [status, setStatus] = useState(null);
  const [downloadUrl, setdownloadUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [videoTitle, setvideoTitle] = useState(false);
  const [progress, setProgress] = useState(false);
  const quality = "128";

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
    validateLink(e);
    setvideoUrl(e.target.value);
  };

  const handleInputChange = (e) => {
    validateLink(e);
    handleChange(e);
  };

  const getCsrfToken = async () => {

    try {

      console.log("CSRF_BASE_URL: ", CSRF_BASE_URL);

      const response = await axios.get(`${CSRF_BASE_URL}/csrf-token`, { credentials: "include" });
      console.log("CSRF token recebido no frontend: ", response.data.csrfToken);
      return response.data.csrfToken;
    } catch (error) {
      console.error("Error getting CSRF token: ", error);
      return null;
    }
  };

  const handleDownload = async () => {
    try {
      if (!downloadUrl) {
        alert("Download link is not available");
        return;
      }

      console.log("API_BASE_URL: ", API_BASE_URL);

      const fullUrl = `${API_BASE_URL}/downloads/${downloadUrl.split("/").pop()}`;
  

      console.log("Download URL received on frontend: ", fullUrl);

      // Verificar se o ficheiro existe antes de tentar baixar
      // Check if the file exists before trying to download
      const response = await fetch(fullUrl);
      
      if (!response.ok) {
        throw new Error(`Download failed: ${response.statusText}`);
      }
  
      const linkDownload = document.createElement("a");
      linkDownload.href = fullUrl; // URL retornada pelo backend | // URL returned by backend
      linkDownload.setAttribute("download", "");
      document.body.appendChild(linkDownload);
      linkDownload.click();
      document.body.removeChild(linkDownload);

      console.log("✅ Download started!");
    } catch (error) {
      console.error("Error downloading: ", error);
    }
  };

  const handleConvert = async () => {
    if (!videoUrl || !isValid) {
      alert("Please enter a valid Youtube URL.");
      return;
    }

    const youtubeRegex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;

    if (!youtubeRegex.test(videoUrl)) {
      setIsValid(false);
      alert("Invalid YouTube URL. Please enter a correct link.");
      return;
    } else {
      setIsValid(true);
    }

    setIsValid(true);
    setLoading(true);
    setShowResult(false);
    setProgress(5);

    try {

      const csrfTokenFrontend = await getCsrfToken();

      if (!csrfTokenFrontend) {
        alert("CSRF token not found!");
        setLoading(false);
        return
      }

      console.log("Sending conversion request... ", csrfTokenFrontend);
      console.log("API_BASE_URL: ", API_BASE_URL);

      const response = await axios.post(`${API_BASE_URL}/link-convert`, { videoUrl, quality },
        {
          method: "POST",
          headers: {
            // Certifica-se de incluir o token corretamente
            // Ensures to include the token correctly
            "X-CSRF-Token": csrfTokenFrontend,
            "Content-Type": "application/json",
          },
          // Garante que os cookies necessários são enviados
          // Ensures that the necessary cookies are sent
         credentials: "include",
         onDownloadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setProgress(percentCompleted);
         },
        });

        console.log("✅ Backend response: ", response.data);

      if (response.status === 200) {
        console.log("Conversion in progress... Waiting for response...");

        let simulatedProgress = 10;  

        const interval = setInterval (() => {
          simulatedProgress += 10;
          setProgress(simulatedProgress);
          if (simulatedProgress >= 100) {
            clearInterval(interval);
            setStatus("success");
            setdownloadUrl(response.data.downloadUrl);
            setvideoTitle(response.data.videoTitle || "Unknown Title");
            setShowResult(true);
            setLoading(false);
          }
        }, 300);
      } else {
        throw new Error("Failed to convert video");
      }
    } catch (error) {
      console.error("Conversion failed: ", error);
      setStatus("error");
      setShowResult(false);
      setLoading(false);
    }
  };

  // Reset para converter outro vídeo
  // Reset to convert another video
  const handleReset = () => {
    setvideoUrl("");
    setStatus(null);
    setdownloadUrl("");
    setShowResult(false);
    setIsValid(null);
    setvideoTitle("");
    setProgress(0);
  };

  return (
    <React.Fragment>
      <div className="container-box">
        {!showResult ? (
          <div className="box">
            <input
              className={`link-box ${
                isValid === true ? "valid" : isValid === false ? "invalid" : ""
              }`}
              type="text"
              autoComplete="off"
              spellCheck="off"
              value={videoUrl}
              onChange={handleInputChange}
              id="input-link"
              placeholder="Please paste the YouTube video URL here..."
            />
            <button className="bnt" onClick={handleConvert} disabled={loading}>
              {loading ? ( 
                <> 
                <progress className={progress === 0 ?"loading-bar" : ""} value={progress} max="100"></progress> 
                <p className="converting-word">Converting...</p>
                </>
                ) : (
                "Convert"
                )}
            </button>
          </div>
        ) : (
          <div className="result-container">
            {status === "success" && (
              <>
                <h3 className="video-title">{videoTitle}</h3>
                <div className="result-content">
                  <p className="success-message-convert">
                    ✅ Conversion Successful!{" "}
                  </p>
                  <button onClick={handleDownload} className="download-btn">
                    Download MP3
                  </button>
                  <button className="convert-next-btn" onClick={handleReset}>
                    Convert Next 🔄
                  </button>
                </div>
              </>
            )}
            {status === "error" && (
              <p className="error-message-convert">
                {" "}
                ❌ Error processing the request. Try again later.
              </p>
            )}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default ButtonConvert;
