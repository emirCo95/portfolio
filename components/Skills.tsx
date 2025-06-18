import React from 'react';
import { FaGit, FaReact } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTypescript } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';

const Skills = () => {
  return (
    <div
      id="skills"
      className="flex flex-col items-center justify-center gap-4 p-4 mt-36"
    >
      <div className="flex flex-col gap-4 text-center">
        <span>What I Offer</span>
        <h1 className="text-5xl">Technologies I Use</h1>
        <p className="w-[700px] text-gray-600 dark:text-white">
          I am proficient in a variety of technologies that enable me to build
          dynamic and responsive web applications. My skill set includes:
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4 px-16 py-4 mt-8">
        <div className="w-[300px] h-[300px] border">
          <div className="flex flex-col gap-4 items-center justify-center h-full">
            <FaReact className="text-6xl text-blue-600" />
            <span>ReactJS</span>
          </div>
        </div>
        <div className="w-[300px] h-[300px] border">
          <div className="flex flex-col gap-4 items-center justify-center h-full">
            <RiNextjsFill className="text-6xl text-gray-600" />
            <span>NextJS</span>
          </div>
        </div>
        <div className="w-[300px] h-[300px] border">
          <div className="flex flex-col gap-4 items-center justify-center h-full">
            <IoLogoJavascript className="text-6xl text-yellow-400" />
            <span>JavaScript</span>
          </div>
        </div>
        <div className="w-[300px] h-[300px] border">
          <div className="flex flex-col gap-4 items-center justify-center h-full">
            <SiTypescript className="text-6xl text-blue-400" />
            <span>TypeScript</span>
          </div>
        </div>
        <div className="w-[300px] h-[300px] border">
          <div className="flex flex-col gap-4 items-center justify-center h-full">
            <FaGit className="text-6xl text-black dark:text-white" />
            <span>Git</span>
          </div>
        </div>
        <div className="w-[300px] h-[300px] border">
          <div className="flex flex-col gap-4 items-center justify-center h-full">
            <RiTailwindCssFill className="text-6xl text-blue-200" />
            <span>TailwindCSS</span>
          </div>
        </div>
        <div className="w-[300px] h-[300px] border">
          <div className="flex flex-col gap-4 items-center justify-center h-full">
            <FaHtml5 className="text-6xl text-orange-500" />
            <span>HTML 5</span>
          </div>
        </div>
        <div className="w-[300px] h-[300px] border">
          <div className="flex flex-col gap-4 items-center justify-center h-full">
            <FaCss3 className="text-6xl text-blue-500" />
            <span>CSS 3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
