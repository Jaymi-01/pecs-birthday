import React, { useState } from "react";
import "../components/Card.css"; // Make sure this path is correct
import b1 from "/b1.png";
import b2 from "/b2.png";
import b3 from "/b3.png";
import coverImage from "../images/five.jpg";
import { AiFillHeart } from "react-icons/ai";

const Card = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const cardPages = [
    {
      title: "To The Beautifool",
      message: `It's finally your birthday, Fool.
      although, I'd be with you by the time you read this, I will still wish you a happy birthday (Joel begged me).
      Thank you for the bread money, words of encouragement, and headaches. You're the sister I never had even though na me born you. Do have a beautiful year ahead. Try marry inside that period too. A fool at 22!!! .`,
      signature: "Loba",
      bgColor: "bg-white",
      textColor: "text-black",
      headerColor: "text-pink-600",
    },
    {
      title: "Happy Birthday, Beautiful,",
      message: `You're an amazing woman and an even stronger woman but it won't be bad if you add height.
      Every moments with you; online and offline are amazing. forever here with you. keep being sexy, Pecs
      I love you loads`,
      signature: "Tobi",
      bgColor: "bg-white",
      textColor: "text-black",
      headerColor: "text-blue-600",
      
    },
    {
      title: "Happy Birthday, Pecu-chan",
      message: `You're a wonderful woman, and a great friend. A force to be reckoned with. A menace to the world. and the light to my life (allegedly).
      I am proud of the woman you are becoming, and I can't wait to see you take the world by storm.
      I hope this year brings you all the happiness and success you deserve, and I pray you never lose you smile. I love you lot`,
      signature: "Joel",
      bgColor: "bg-white",
      textColor: "text-black",
      headerColor: "text-green-600",
    },
  ];

  const handleCardClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      setCurrentPage(0);
    } else {
      if (currentPage < cardPages.length - 1) {
        setCurrentPage(currentPage + 1);
      } else {
        setIsOpen(false);
        setTimeout(() => setCurrentPage(0), 700);
      }
    }
  };

  const currentContent = cardPages[currentPage];

  return (
    <div className="mt-10 flex items-center justify-start">
      <div
        className="relative w-[350px] h-[400px] perspective"
        onClick={handleCardClick}
      >
        <div
          className={`card-front absolute w-full h-full bg-cover bg-center border-4 border-pink-400 rounded-lg shadow-xl transform origin-left transition-transform duration-700 ease-in-out ${
            isOpen ? "-rotate-y-180" : ""
          }`}
          style={{ backgroundImage: `url(${coverImage})` }}
        >
          <div className="flex flex-col justify-end items-center h-full text-center p-4 bg-black/20 rounded-lg">
            <h2 className="text-2xl font-bold text-white drop-shadow">
              HAPPY BIRTHDAY!
            </h2>
            <p className="text-md text-white/80 mt-1">Click to open</p>
            <div className="flex mt-4 space-x-2">
              <img
                src={b1}
                alt="balloon"
                className="w-6 h-6 balloon-straight"
              />
              <img
                src={b2}
                alt="balloon"
                className="w-6 h-6 balloon-straight"
              />
              <img
                src={b3}
                alt="balloon"
                className="w-6 h-6 balloon-straight"
              />
            </div>
          </div>
        </div>

        {isOpen && (
          <div
            className={`card-inside absolute top-0 left-0 w-full h-full border-4 border-pink-400 rounded-lg p-6 shadow-xl transition-all duration-300 ease-in-out
              ${currentContent.bgColor}`}
            style={{
              backgroundImage: currentContent.bgImage
                ? `url(${currentContent.bgImage})`
                : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: isOpen ? 1 : 0,
              zIndex: 0,
            }}
          >
            <div
              className="absolute inset-0 flex flex-col justify-between p-6"
              style={{
                backgroundColor: currentContent.bgImage
                  ? "rgba(255,255,255,0.7)"
                  : "transparent",
              }}
            >
              <div>
                <h3
                  className={`${currentContent.headerColor} font-semibold text-lg`}
                >
                  {currentContent.title}
                </h3>

                <p
                  className={`mt-1 ${currentContent.textColor} leading-snug text-md whitespace-pre-line font-secondary`}
                >
                  {currentContent.message}
                  <AiFillHeart className="inline-block ml-1 mb-1 text-red-500 " />
                </p>
              </div>
              <p
                className={`mt-1 text-right ${currentContent.headerColor} font-medium text-3xl font-script`}
              >
                — {currentContent.signature}
              </p>
              <div className="absolute bottom-1 left-0 right-0 text-center text-md text-gray-500">
                {currentPage < cardPages.length - 1
                  ? "Click to continue"
                  : "Click to close"}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
