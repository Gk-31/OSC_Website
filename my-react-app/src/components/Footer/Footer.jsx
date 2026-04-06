import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full  flex items-center justify-center gap-4 font-serif  static bottom-0 left-0 bg-[#181818] text-white">
      {/* Logo Section */}
      <div className="flex-shrink-0">
        <img 
          src="/group.svg" 
          alt="OSC Logo" 
          className="w-16 h-auto"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center">
        <h2 className="text-osc-orange text-xl font-medium leading-tight">
          Open Source Community
        </h2>
        <h3 className="text-osc-orange text-xl font-medium leading-tight">
          FCIS Student Activity
        </h3>
        <p className="text-gray-400 text-sm mt-1 font-sans">
          Copy right OSC @2024 All rights are reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;