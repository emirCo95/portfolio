import React from 'react';

const Footer = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-evenly items-center overflow-hidden">
      <div className="w-full h-[100px] md:h-[100px] md:m-0 flex flex-col justify-evenly items-center bg-battleship transition duration-500 hover:scale-110 z-0 backdrop-filter backdrop-blur-sm bg-opacity-70">
        <div className="w-full flex justify-center items-center">
          <h2 className="text-l">Emir Cokrlija 2025.</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
