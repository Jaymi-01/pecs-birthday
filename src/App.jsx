import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiFillHeart } from "react-icons/ai";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer"
import "./index.css"; // Ensure CSS is imported

const App = () => {
  const audioRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [showBalloons, setShowBalloons] = useState(false);

  const handleStart = () => {
    const audio = audioRef.current;

    if (audio) {
      audio
        .play()
        .then(() => {
          setHasStarted(true);
          setShowBalloons(true);
          setTimeout(() => setShowBalloons(false), 6000); // Remove balloons after 6s
        })
        .catch((error) => {
          console.error("Audio playback failed:", error);
          alert(
            "Audio could not play. Please make sure your browser allows autoplay or try again."
          );
        });
    }
  };

  // Smooth fade between loops
  const fadeAudio = (audio, type = "out", duration = 2000) => {
    const steps = 20;
    const interval = duration / steps;
    let currentStep = 0;

    const fade = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      if (type === "out") {
        audio.volume = 1 - progress;
      } else {
        audio.volume = progress;
      }

      if (currentStep >= steps) {
        clearInterval(fade);
        if (type === "out") {
          audio.currentTime = 0;
          audio.play().then(() => fadeAudio(audio, "in"));
        }
      }
    }, interval);
  };

  // Handle end of audio to restart with fade
  useEffect(() => {
    const audio = audioRef.current;

    if (hasStarted && audio) {
      audio.volume = 1;

      const handleEnded = () => fadeAudio(audio, "out");
      audio.addEventListener("ended", handleEnded);

      return () => {
        audio.removeEventListener("ended", handleEnded);
      };
    }
  }, [hasStarted]);

  // Pause when tab is hidden
  useEffect(() => {
    const audio = audioRef.current;

    const handleVisibilityChange = () => {
      if (!audio) return;

      if (document.hidden) {
        audio.pause();
      } else {
        audio.play().catch((err) => {
          console.warn("Audio not resumed automatically:", err);
        });
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [hasStarted]);

  return (
    <div
      className={`min-h-screen flex flex-col items-center ${
        hasStarted ? "justify-start" : "justify-between"
      }  relative overflow-hidden`}
    >
      {hasStarted && (
        <>
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
              className="text-2xl md:text-4xl font-bold"
            >
            Happy Birthday
            </motion.h1>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-2xl md:text-4xl font-bold text-pink-500 flex items-center gap-2"
            >
              Peculiar{" "}
              <AiFillHeart className="pulsing-heart" size={32} color="red" />
            </motion.span>
          </div>
          <Hero />
          <Slider />
          <Card />
          <Footer />
        </>
      )}

      {!hasStarted && (
        <button
          onClick={handleStart}
          className="mt-100
          py-3
          px-6
          text-lg
          font-bold
          bg-hot-pink
          text-white
          rounded-lg
          shadow-md
          transition"
        >
          Start App
        </button>
      )}

      <audio ref={audioRef} src="/music.mp3" preload="auto" />

      {/* Floating Balloons */}
      {showBalloons && (
        <>
          {[1, 2, 3, 4, 5, 6, 7]
            .map((i) => ({
              id: i,
              delay: Math.random() * 3, // delay between 0–3s
              left: Math.floor(Math.random() * 80) + 5, // left between 5%–85%
            }))
            .sort((a, b) => a.delay - b.delay) // optional: smoother visual flow
            .map(({ id, delay, left }) => (
              <img
                key={id}
                src={`/b${id}.png`}
                alt={`Balloon ${id}`}
                className="balloon"
                style={{
                  position: "absolute",
                  bottom: "-100px",
                  left: `${left}%`,
                  width: "60px",
                  animation: `floatUp 5s ease-out forwards`,
                  animationDelay: `${delay}s`,
                  zIndex: 9999,
                  opacity: 0,
                  animationFillMode: "forwards",
                }}
              />
            ))}
        </>
      )}
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
// 				a very happy birthday
