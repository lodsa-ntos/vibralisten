import { useState, useEffect, useRef } from "react";

export const VideoPlayer = () => {
  const [ currentVideo, setCurrentVideo ] = useState(0);
  const [ fade, setFade ] = useState("opacity-100");
  const videoRef = useRef(null);
  const videoList = [
    "videos/video_1.mp4",
    "videos/video_2.mp4",
    "videos/video_3.mp4",
    "videos/video_4.mp4",
    "videos/video_5.mp4",
    "videos/video_6.mp4",
  ];

  useEffect(() => {
    const video = videoRef.current;

    const handleVideoEnd = () => {
      // Inicia fade-out antes da troca de vídeo
      // Start fade-out before video change
      setFade("opacity-0");
      setTimeout(() => {
        // Troca o vídeo atual
        // Change current video
        setCurrentVideo((prev) => (prev + 1) % videoList.length);
        // Inicia fade-in após a troca de vídeo
        // Start fade-in after video change
        setFade("opacity-100");
      }, 500);
    };

    video.addEventListener("ended", handleVideoEnd);
    return () => {
      video.removeEventListener("ended", handleVideoEnd);
    };
  }, [currentVideo]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      <video 
      ref={videoRef} 
      // Força React a recarregar o elemento <video> quando o vídeo muda
      // Forces React to reload the <video> element when the video changes
      key={currentVideo}
      className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out object-cover ${fade}`} 
      autoPlay
      muted
      playsInline
      controls
      >
        <source src={videoList[currentVideo]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};