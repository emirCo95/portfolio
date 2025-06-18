import React from 'react';

const Footer = () => {
  return (
    <div className="flex items-center justify-center flex-col mt-24">
      <div className="flex items-center gap-2 p-4 dark:text-white">
        <span className="text-xl">Emir</span>
        <div className="w-2 h-2 rounded-full bg-amber-500"></div>
      </div>
      <div className="p-4">
        <span>emir.cokrlija@gmail.com</span>
      </div>
      <div className="">
        <span className="text-gray-600 dark:text-white">
          © {new Date().getFullYear()} Emir. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
