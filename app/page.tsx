"use client";

import Snowflakes from "@/components/Snowflakes";
import { useRef, useState } from "react";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isRotating, setIsRotating] = useState<boolean>(false);
  const [showPlayPrompt, setShowPlayPrompt] = useState<boolean>(true);
  const [name, setName] = useState<string>("");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);

  const startMusic = async () => {
    try {
      setName(nameRef.current?.value || "");

      if (audioRef.current) {
        await audioRef.current.play();
        setIsPlaying(true);
        setIsRotating(true);
        setShowPlayPrompt(false);
      }
    } catch (error) {
      console.log("Autoplay error:", error);
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsRotating(false);
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsRotating(true);
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-red-900 via-green-900 to-blue-900 flex items-center justify-center p-3 sm:p-4 md:p-6 relative overflow-hidden">
      {/* Play Music Prompt Overlay */}
      {showPlayPrompt && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md text-center shadow-2xl">
            <div className="text-6xl mb-4">🎵</div>
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Type your name to see your greeting card!
            </h2>
            <input
              ref={nameRef}
              type="text"
              placeholder="Your name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 mb-6 text-gray-700"
            />
            <button
              onClick={startMusic}
              className="bg-linear-to-r from-red-500 to-green-500 text-white font-bold py-4 px-8 rounded-full text-lg hover:scale-110 active:scale-95 transition-transform duration-300 shadow-lg"
            >
              🎄 Open 🎅
            </button>
          </div>
        </div>
      )}

      {/* Snowflakes - Only render on client */}
      {name && (
        <>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Snowflakes />
          </div>

          {/* Christmas Lights - Only render on client */}
          <div className="absolute top-8 left-0 right-0 flex justify-around p-2 sm:p-4">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 sm:w-3 sm:h-3 rounded-full animate-pulse"
                style={{
                  backgroundColor: [
                    "#ff0000",
                    "#00ff00",
                    "#ffff00",
                    "#ff00ff",
                    "#00ffff",
                  ][i % 5],
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>

          {/* Main Card */}
          <div className="relative z-10 bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 max-w-2xl w-full border-4 sm:border-8 border-red-600 transform hover:scale-105 transition-transform duration-300 mx-2">
            {/* Decorative Elements */}
            <div className="absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-1/2 text-4xl sm:text-6xl">
              🎄
            </div>
            <div className="absolute -top-3 sm:-top-4 left-4 sm:left-8 text-2xl sm:text-4xl animate-bounce">
              ⭐
            </div>
            <div
              className="absolute -top-3 sm:-top-4 right-4 sm:right-8 text-2xl sm:text-4xl animate-bounce"
              style={{ animationDelay: "0.5s" }}
            >
              ⭐
            </div>

            {/* Card Content */}
            <div className="text-center space-y-4 sm:space-y-6 mt-2 sm:mt-4">
              <h1
                className="text-3xl sm:text-4xl font-bold text-red-600 drop-shadow-lg mb-0"
                style={{ fontFamily: "Georgia, serif" }}
              >
                🎅 Merry Christmas 🎅
              </h1>
              <h1
                className="text-3xl sm:text-4xl font-bold text-red-600 drop-shadow-lg mb-0"
                style={{ fontFamily: "Georgia, serif" }}
              >
                &
              </h1>

              <div className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-green-600 to-red-600 bg-clip-text text-transparent mb-0">
                Happy New Year 2025
              </div>

              <div className="border-t-2 sm:border-t-4 border-b-2 sm:border-b-4 border-green-600 py-4 sm:py-6 my-4 sm:my-6 px-2">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed italic">
                  May the light of the season illuminate your path to happiness
                  and prosperity in the coming twelve months. Merry Christmas
                  and a Prosperous New Year!
                </p>
              </div>

              <div className="flex justify-center gap-2 sm:gap-4 text-2xl sm:text-3xl md:text-4xl">
                🎁 🔔 🕯️ 🎊 ✨
              </div>

              <div className="text-xl sm:text-2xl font-semibold text-green-700 mt-4 sm:mt-6">
                🙏 God Bless You! 🙏
              </div>

              {/* Bottom Decoration */}
              <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                <span className="text-2xl sm:text-3xl">🎁</span>
                <span className="text-2xl sm:text-3xl">🎄</span>
                <span className="text-2xl sm:text-3xl">🎁</span>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Floating Music Player - Spinning Disk */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-red-500 to-green-500 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-300 border-2 sm:border-4 border-white z-50"
        aria-label={isPlaying ? "Pause Music" : "Play Music"}
      >
        <div className={`vinyl-disk ${isRotating ? "vinyl-spinning" : ""}`}>
          {/* Vinyl disk appearance */}
          <div className="absolute inset-0 rounded-full border-2 border-white/30"></div>
          <div className="absolute inset-2 sm:inset-3 rounded-full border-2 border-white/30"></div>
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full"></div>
        </div>

        {/* Play/Pause Icon Overlay */}
        <div className="absolute text-white text-lg sm:text-xl">
          {isPlaying ? "⏸️" : "▶️"}
        </div>
      </button>

      <audio ref={audioRef} loop src="/assets/song.mp3" preload="auto" />
    </div>
  );
}

