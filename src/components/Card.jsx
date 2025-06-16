import React, { useState } from 'react';
import '../components/Card.css';
import b1 from '/b1.png';
import b2 from '/b2.png';
import b3 from '/b3.png';
import coverImage from '../images/five.jpg';

const Card = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-10 flex items-center justify-start">
      <div className="relative w-[250px] h-[300px] perspective" onClick={() => setIsOpen(!isOpen)}>
        {/* Inside (right flap) */}
        <div
          className={`card-inside absolute top-0 left-0 h-full bg-white border-4 border-pink-400 rounded-lg p-6 shadow-xl transition-all duration-700 ease-in-out overflow-hidden ${
            isOpen ? 'w-[250px] md:w-[200px]' : 'w-0'
          }`}
        >
          <h3 className="text-pink-600 font-semibold">To The Pain In The Ass</h3>
          <p className="text-pink-800 font-bold">Peculiar</p>
          <p className="mt-2 text-black leading-snug text-xl">
            Your light is soft, yet fierce and true,
            You turn the dark to brighter days.
            A blazing sun, a northern star
            May your new year bloom and sing.
          </p>
          <p className="mt-2 text-right text-pink-600 font-medium">— Joel</p>
        </div>

        {/* Front cover flap */}
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
      </div>
    </div>
  );
};

export default Card;
