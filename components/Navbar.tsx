'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { pacifico } from '@/app/ui/fonts';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=" fixed w-full flex justify-between items-center bg-ashGray z-10">
      <Link href={'/'} className="ml-[10%]">
        <Image
          className="ml-[10%]"
          src="/logo.png"
          alt="logo"
          width={150}
          height={150}
        />
      </Link>

      {menuOpen ? (
        <div className="flex flex-col relative">
          <X className="mr-10 md:hidden" onClick={() => setMenuOpen(false)} />
          <ul className=" z-10 rounded-md absolute top-20 right-0 w-[200px] h-[500px] flex flex-col justify-between items-center p-10 bg-ashGray md:hidden">
            <li
              className={`${pacifico.className} hover:text-white hover:bg-black p-2 text-xl`}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`${pacifico.className} hover:text-white hover:bg-black p-2 text-xl`}
            >
              <Link href="/about">About</Link>
            </li>
            <li
              className={`${pacifico.className} hover:text-white hover:bg-black p-2 text-xl`}
            >
              <Link href="/experience">Experience</Link>
            </li>
            <li
              className={`${pacifico.className} hover:text-white hover:bg-black p-2 text-xl`}
            >
              <Link href="/skills">Skills</Link>
            </li>
            <li
              className={`${pacifico.className} hover:text-white hover:bg-black p-2 text-xl`}
            >
              <Link href="/projects">Projects</Link>
            </li>
          </ul>
        </div>
      ) : (
        <Menu className="mr-10 md:hidden" onClick={() => setMenuOpen(true)} />
      )}
      <ul className="hidden md:mr-10 md:flex md:justify-between md:items-center md:w-[50%]">
        <li
          className={`${pacifico.className} hover:text-white hover:bg-black p-2 text-xl lg:text-2xl xl:text-3xl`}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={`${pacifico.className} hover:text-white hover:bg-black p-2 text-xl lg:text-2xl xl:text-3xl`}
        >
          <Link href="/about">About</Link>
        </li>
        <li
          className={`${pacifico.className} hover:text-white hover:bg-black p-2 text-xl lg:text-2xl xl:text-3xl`}
        >
          <Link href="/experience">Experience</Link>
        </li>
        <li
          className={`${pacifico.className} hover:text-white hover:bg-black p-2 text-xl lg:text-2xl xl:text-3xl`}
        >
          <Link href="/skills">Skills</Link>
        </li>
        <li
          className={`${pacifico.className} hover:text-white hover:bg-black p-2 text-xl lg:text-2xl xl:text-3xl`}
        >
          <Link href="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
