import React, { useState } from 'react';
import '../components/Card.css';
import b1 from '/b1.png';
import b2 from '/b2.png';
import b3 from '/b3.png';
import coverImage from '../images/five.jpg';

const Card = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const cardPages = [
    {
      title: 'To The Pain In The Ass',
      recipient: 'Peculiar',
      message: `Your light is soft, yet fierce and true,
                You turn the dark to brighter days.
                A blazing sun, a northern star.`,
      signature: 'Loba',
      bgColor: 'bg-white',
      textColor: 'text-black',
      headerColor: 'text-pink-600',
      bgImage: null,
    },
    {
      title: 'Page 2: A New Adventure',
      message: `Another year, another adventure! Wishing you endless joy,
                laughter, and success in everything you do.
                May this year be your best one yet!`,
      signature: 'Tobi',
      bgColor: 'bg-white',
      textColor: 'text-black',
      headerColor: 'text-blue-600',
    },
    {
      title: 'Page 3: Cherished Moments',
      message: `Remember all the good times, and look forward to
                making many more. Every moment with you is a treasure.
                Happy Birthday, dear friend!`,
      signature: 'Joel',
      bgColor: 'bg-white',
      textColor: 'text-black',
      headerColor: 'text-green-600',
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
      <div className="relative w-[250px] h-[300px] perspective" onClick={handleCardClick}>
        <div
          className={`card-front absolute w-full h-full bg-cover bg-center border-4 border-pink-400 rounded-lg shadow-xl transform origin-left transition-transform duration-700 ease-in-out ${
            isOpen ? '-rotate-y-180' : ''
          }`}
          style={{ backgroundImage: `url(${coverImage})` }}
        >
          <div className="flex flex-col justify-end items-center h-full text-center p-4 bg-black/20 rounded-lg">
            <h2 className="text-2xl font-bold text-white drop-shadow">HAPPY BIRTHDAY!</h2>
            <p className="text-md text-white/80 mt-1">Click to open</p>
            <div className="flex mt-4 space-x-2">
              <img src={b1} alt="balloon" className="w-6 h-6" />
              <img src={b2} alt="balloon" className="w-6 h-6" />
              <img src={b3} alt="balloon" className="w-6 h-6" />
            </div>
          </div>
        </div>

        {isOpen && (
          <div
            className={`card-inside absolute top-0 left-0 w-full h-full border-4 border-pink-400 rounded-lg p-6 shadow-xl transition-all duration-300 ease-in-out
              ${currentContent.bgColor}`}
            style={{
              backgroundImage: currentContent.bgImage ? `url(${currentContent.bgImage})` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: isOpen ? 1 : 0,
              zIndex: 0,
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-between p-6"
                 style={{ backgroundColor: currentContent.bgImage ? 'rgba(255,255,255,0.7)' : 'transparent' }}>
                <div>
                    <h3 className={`${currentContent.headerColor} font-semibold text-md`}>
                        {currentContent.title}
                    </h3>
                    
                    <p className={`mt-2 ${currentContent.textColor} leading-snug text-lg whitespace-pre-line`}>
                        {currentContent.message}
                    </p>
                </div>
                <p className={`mt-1 text-right ${currentContent.headerColor} font-medium text-md`}>
                    — {currentContent.signature}
                </p>
                <div className="absolute bottom-1 left-0 right-0 text-center text-sm text-gray-500">
                    {currentPage < cardPages.length - 1 ? 'Click to continue' : 'Click to close'}
                </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;