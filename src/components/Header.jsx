import React from 'react';
import { motion } from 'framer-motion';
import Banner from '../assets/banner.png';

const Header = () => {
  return (
    <div className="w-full ">
      <motion.img
        src={Banner}
        alt="Birthday Banner"
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-full h-auto"
      />
    </div>
  );
};

export default Header;
