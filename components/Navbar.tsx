import Link from 'next/link';
import React from 'react';
import { ModeToggle } from './mode-toggle';

const Navbar = () => {
  return (
    <div className="fixed w-full flex justify-between items-center px-16 md:px-26 py-10">
      <div className="flex items-center gap-2 p-4 dark:text-white">
        <span className="text-xl">Emir</span>
        <div className="w-2 h-2 rounded-full bg-amber-500"></div>
      </div>
      <div className="hidden md:flex gap-4 px-16 py-4 rounded-full shadow-md dark:text-black dark:bg-white backdrop-blur-2xl">
        <Link href="#home">Home</Link>
        <Link href="#about-me">About Me</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#my-work">My Work</Link>
      </div>
      <div className="">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
