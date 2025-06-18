import Link from 'next/link';
import React from 'react';
import { ModeToggle } from './mode-toggle';

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center px-36 py-10">
      <div className="flex items-center gap-2 shadow-md p-4 rounded-full dark:bg-white dark:text-black">
        <span className="text-xl">Emir</span>
        <div className="w-2 h-2 rounded-full bg-amber-500"></div>
      </div>
      <div className="hidden md:flex gap-4 px-16 py-4 rounded-full shadow-md dark:text-black dark:bg-white backdrop-blur-2xl">
        <Link href="/">Home</Link>
        <Link href="/">About Me</Link>
        <Link href="/">Experience</Link>
        <Link href="/">Education</Link>
        <Link href="/">My Work</Link>
      </div>
      <div className="">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
