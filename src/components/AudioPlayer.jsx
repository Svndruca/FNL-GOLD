import React, { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause, FaStepForward, FaStepBackward, FaVolumeUp, FaVolumeDown } from "react-icons/fa";

const playlist = [
  "/playlist/Papa Roach - Last Resort.mp3",
  "/playlist/Ramones - I Wanna Be Sedated.mp3",
  "/playlist/Smackdown vs Raw 2008 - Everybody Down.mp3",
  "/playlist/Smackdown vs Raw 2008 - Famous.mp3",
  "/playlist/Smackdown vs Raw 2008 - Feed.mp3",
  "/playlist/Smackdown vs Raw 2008 - Well Enough Alone.mp3"
];

export default function AudioPlayer() {
  const audioRef = useRef(null);
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const enableAudio = () => {
      if (!isPlaying) {
        setIsPlaying(true);
        audio.play().catch((error) => console.log("Autoplay bloqueado:", error));
        document.removeEventListener("click", enableAudio);
      }
    };

    document.addEventListener("click", enableAudio);
    return () => document.removeEventListener("click", enableAudio);
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);

      audio.addEventListener("play", handlePlay);
      audio.addEventListener("pause", handlePause);

      return () => {
        audio.removeEventListener("play", handlePlay);
        audio.removeEventListener("pause", handlePause);
      };
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.src = playlist[currentSong];
      if (isPlaying) {
        audio.play().catch((error) => console.log("Autoplay bloqueado:", error));
      }
    }
  }, [currentSong]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play().catch((error) => console.log("Error al reproducir:", error));
    } else {
      audio.pause();
    }
  };

  const nextSong = () => {
    setCurrentSong((prev) => {
      const nextIndex = (prev + 1) % playlist.length;
      return nextIndex;
    });

    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => console.log("Error al reproducir siguiente canción:", error));
      }
    }, 100);
  };

  const prevSong = () => {
    setCurrentSong((prev) => (prev === 0 ? playlist.length - 1 : prev - 1));

    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => console.log("Error al reproducir canción anterior:", error));
      }
    }, 100);
  };

  return (
    <div className="audio-player">
      <audio ref={audioRef} onEnded={nextSong} />

      <div className="controls">
        <button onClick={prevSong}>
          <FaStepBackward />
        </button>
        <button onClick={togglePlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button onClick={nextSong}>
          <FaStepForward />
        </button>
        <button onClick={() => setVolume(Math.max(0, volume - 0.1))}>
          <FaVolumeDown />
        </button>
        <button onClick={() => setVolume(Math.min(1, volume + 0.1))}>
          <FaVolumeUp />
        </button>
      </div>
    </div>
  );
}
