import { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

export const MiniPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return(
    <div className={`fixed bottom-4 right-4 ${isPlaying? "glow" : ""} flex items-center space-x-2 bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 text-white py-2 px-4 rounded-full shadow-lg hover:scale-105 transition-all z-50`}>
      <div className="flex items-center space-x-4">
        <button onClick={togglePlay} className="flex items-center space-x-2">
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          <span className='text-sm font-semibold'>Play a vibe</span>
        </button>
        <audio ref={audioRef} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" preload='auto' />
      </div>
    </div>
  );
};