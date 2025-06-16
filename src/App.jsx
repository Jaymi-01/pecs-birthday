import React, { useRef, useState } from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import { motion } from "framer-motion";
import { AiFillHeart } from 'react-icons/ai';

import "./index.css"; // for balloon animation

const App = () => {
  const audioRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  const handleStart = () => {
    const audio = audioRef.current;

    if (audio) {
      audio
        .play()
        .then(() => {
          setHasStarted(true); // Trigger content and animation
        })
        .catch((error) => {
          console.error("Audio playback failed:", error);
        });
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: hasStarted ? "flex-start" : "space-between",
        alignItems: "center",
        // padding: '2rem'
      }}
    >
      {/* Show content and balloons only after starting */}
      {hasStarted && (
        <>
          {/* Floating Balloons */}
          <div className="balloon-container">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <img
                key={i}
                src={`/b${i}.png`}
                alt={`balloon ${i}`}
                className="balloon"
                style={{
                  left: `${i * 10 + Math.random() * 5}%`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

          {/* Main Content */}
          <Header />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              margin: "1.5rem 0",
            }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                margin: 0,
              }}
            >
            Happy Birthday
            </motion.h1>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                color: "#FC6C85",
                marginTop: "0.5rem",
              }}
            >
              Peculiar <AiFillHeart className="pulsing-heart" size={32} color="red" />
            </motion.span>
          </div>
          <Slider />
        </>
      )}

      {/* Start Button (shown only before app starts) */}
      {!hasStarted && (
        <button
          onClick={handleStart}
          style={{
            marginTop: "auto",
            padding: "1rem 2rem",
            fontSize: "1.5rem",
            fontWeight: "bolder",
            backgroundColor: "#FF69B4",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginBottom: "2rem",
          }}
        >
          Start App with Sound
        </button>
      )}

      {/* Hidden Audio */}
      <audio ref={audioRef} src="/music.mp3" preload="auto" />
    </div>
  );
};

export default App;

// but...
// 				don't worry
// 				because...
// 				God has your back
// 				and
// 				this year will be better
// 				and I hope
// 				you'll find...
// 				happiness along the way
// 				keep your spirit up
// 				enjoy every single moment...
// 				that you experience today
// 				fill it with your most beautiful smile
// 				and make it the best memory..
// 				lastly...
// 				I'd like to wish you one more time
// 				a very happy birthday Sapthesh V
