import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black py-4 flex items-center justify-center">
      <p className="text-white text-[14px] font-medium tracking-wide">
        Made with <span className="text-red-500 mx-1">❤</span> by Priyansh Bhatt
      </p>
    </footer>
  );
};

export default Footer;
