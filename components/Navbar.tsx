'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center bg-coolYellow">
      <Image
        className="ml-[10%]"
        src="/logo.png"
        alt="logo"
        width={150}
        height={150}
      />
      {menuOpen ? (
        <div className="flex flex-col relative">
          <X className="mr-10 md:hidden" onClick={() => setMenuOpen(false)} />
          <ul className=" z-10 rounded-md absolute top-20 right-0 w-[200px] h-[500px] flex flex-col justify-between items-center p-10 bg-coolYellow md:hidden">
            <li className="">
              <Link href="#about">About</Link>
            </li>
            <li className="">
              <Link href="#about">Experience</Link>
            </li>
            <li className="">
              <Link href="#about">Skills</Link>
            </li>
            <li className="">
              <Link href="#about">Projects</Link>
            </li>
            <li className="">
              <Link href="#about">Resume</Link>
            </li>
          </ul>
        </div>
      ) : (
        <Menu className="mr-10 md:hidden" onClick={() => setMenuOpen(true)} />
      )}
      <ul className="hidden md:mr-10 md:flex md:justify-between md:items-center md:w-[50%]">
        <li className="hover:text-white hover:bg-black p-2 rounded-md">
          <Link href="#about">About</Link>
        </li>
        <li className="hover:text-white hover:bg-black p-2 rounded-md">
          <Link href="#about">Experience</Link>
        </li>
        <li className="hover:text-white hover:bg-black p-2 rounded-md">
          <Link href="#about">Skills</Link>
        </li>
        <li className="hover:text-white hover:bg-black p-2 rounded-md">
          <Link href="#about">Projects</Link>
        </li>
        <li className="hover:text-white hover:bg-black p-2 rounded-md">
          <Link href="#about">Resume</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
