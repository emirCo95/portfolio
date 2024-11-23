import React from 'react';
import { permanentMarker } from '../ui/fonts';
import { FaHtml5 } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io5';
import { FaReact } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaGitAlt } from 'react-icons/fa';
import { FaFigma } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';

const Page = () => {
  return (
    <div className="w-full flex flex-col justify-evenly items-center overflow-hidden bg-no-repeat bg-cover bg-center h-full bg-[url('/skills.jpg')]">
      <div className="w-full flex flex-col md:flex-row justify-evenly items-center mt-[20vh] md:mt-[20vh]">
        <div className="w-full h-[350px] md:h-[300px] m-5 md:m-0 flex flex-col justify-evenly items-center bg-cream transition duration-500 hover:scale-110 z-0 backdrop-filter backdrop-blur-sm bg-opacity-90">
          <div className="w-full flex justify-center items-center">
            <h1 className={`${permanentMarker.className} antialiased text-4xl`}>
              FAVORITE TECHNOLOGIES
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-evenly items-center mt-10 mb-10 z-0">
        <div className="z-10 w-full h-full p-10 md:h-full flex flex-wrap gap-5 justify-evenly items-center bg-teaGreen shadow-md backdrop-filter backdrop-blur-sm bg-opacity-90">
          <div className="h-full w-[150px] flex flex-col justify-center items-center transition duration-500 hover:scale-110">
            <FaHtml5 className="w-full h-[50%] text-orange-500" />
            <span className="font-bold">HTML 5</span>
          </div>
          <div className="h-full w-[150px] flex flex-col justify-center items-center transition duration-500 hover:scale-110">
            <IoLogoCss3 className="w-full h-[50%] text-blue-500" />
            <span className="font-bold">CSS 3</span>
          </div>
          <div className="h-full w-[150px] flex flex-col justify-center items-center transition duration-500 hover:scale-110">
            <IoLogoJavascript className="w-full h-[50%] text-yellow-400" />
            <span className="font-bold">JavaScript</span>
          </div>
          <div className="h-full w-[150px] flex flex-col justify-center items-center transition duration-500 hover:scale-110">
            <FaReact className="w-full h-[50%] text-blue-500" />
            <span className="font-bold">React JS</span>
          </div>
          <div className="h-full w-[150px] flex flex-col justify-center items-center transition duration-500 hover:scale-110">
            <RiNextjsFill className="w-full h-[50%] text-black" />
            <span className="font-bold">Next JS</span>
          </div>
          <div className="h-full w-[150px] flex flex-col justify-center items-center transition duration-500 hover:scale-110">
            <RiTailwindCssFill className="w-full h-[50%] text-blue-400" />
            <span className="font-bold">TailwindCSS</span>
          </div>
          <div className="h-full w-[150px] flex flex-col justify-center items-center transition duration-500 hover:scale-110">
            <FaFigma className="w-full h-[50%] text-black" />
            <span className="font-bold">Figma</span>
          </div>
          <div className="h-full w-[150px] flex flex-col justify-center items-center transition duration-500 hover:scale-110">
            <FaGitAlt className="w-full h-[50%] text-orange-700" />
            <span className="font-bold">Git</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
