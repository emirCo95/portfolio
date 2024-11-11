import React from 'react';
import { permanentMarker } from '../ui/fonts';
import Image from 'next/image';
import { BsGlobe } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="w-full flex flex-col justify-evenly items-center overflow-hidden bg-no-repeat bg-cover bg-center h-full bg-[url('/projects.jpg')]">
      <div className="w-full flex flex-col md:flex-row justify-evenly items-center mt-[20vh] md:mt-[20vh]">
        <div className="w-full h-[350px] md:h-[300px] m-5 md:m-0 flex flex-col justify-evenly items-center bg-cream transition duration-500 hover:scale-110 z-0 backdrop-filter backdrop-blur-sm bg-opacity-70">
          <div className="w-full flex justify-center items-center">
            <h1 className={`${permanentMarker.className} antialiased text-4xl`}>
              MY PERSONAL PROJECTS
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-evenly items-center mt-10 mb-10 z-0">
        <div className="z-10 w-full h-[650px] md:h-[300px] flex flex-col md:flex-row justify-center items-center gap-10 bg-teaGreen shadow-md  backdrop-filter backdrop-blur-md bg-opacity-70">
          <div className="h-full w-[450px] flex flex-col md:flex-row justify-center items-center p-5">
            <div className="h-[50%] md:h-full">
              <Image
                className="w-full h-full object-cover border-2 border-black"
                src="/borcelle.png"
                alt="borcelle"
                width={1500}
                height={1500}
              />
            </div>
          </div>
          <div className="h-full flex justify-center items-start md:items-center gap-20 md:mb-0">
            <div className="flex flex-col justify-center items-center gap-5">
              <BsGlobe className="text-white" size={80} />
              <Link
                target="_blank"
                className="border-2 border-black p-2 hover:text-white"
                href="https://borcelle-boutique.netlify.app/"
              >
                <span className="text-center">View Live</span>
              </Link>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <FaGithub className="text-purple-900" size={80} />
              <Link
                target="_blank"
                className="border-2 border-black p-2 hover:text-white"
                href="https://github.com/emirCo95/flower_shop"
              >
                <span className="text-center">View on Github</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-evenly items-center mt-10 mb-10 z-0">
        <div className="z-10 w-full h-[650px] md:h-[300px] flex flex-col md:flex-row justify-center items-center gap-10 bg-teaGreen shadow-md  backdrop-filter backdrop-blur-md bg-opacity-70">
          <div className="h-full w-[450px] flex flex-col md:flex-row justify-center items-center p-5">
            <div className="h-full">
              <Image
                className="w-full h-full object-cover border-2 border-black"
                src="/cuisine.png"
                alt="cuisine"
                width={1500}
                height={1500}
              />
            </div>
          </div>
          <div className="h-full flex justify-center items-start md:items-center gap-20 md:mb-0">
            <div className="flex flex-col justify-center items-center gap-5">
              <BsGlobe className="text-white" size={80} />
              <Link
                target="_blank"
                className="border-2 border-black p-2 hover:text-white"
                href="https://cuisine-restaurant1.netlify.app/"
              >
                <span className="text-center">View Live</span>
              </Link>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <FaGithub className="text-purple-900" size={80} />
              <Link
                target="_blank"
                className="border-2 border-black p-2 hover:text-white"
                href="https://github.com/emirCo95/cuisine_restaurant"
              >
                <span className="text-center">View on Github</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
