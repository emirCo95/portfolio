import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center">
      <Image
        className="mx-10"
        src="/logo.png"
        alt="logo"
        width={150}
        height={150}
      />
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
