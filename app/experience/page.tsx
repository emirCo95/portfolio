import React from 'react';
import { permanentMarker } from '../ui/fonts';

const Page = () => {
  return (
    <div className="w-full flex flex-col justify-evenly items-center overflow-hidden bg-no-repeat bg-cover bg-center h-full bg-[url('/experience.jpg')]">
      <div className="w-full flex flex-col md:flex-row justify-evenly items-center mt-[20vh] md:mt-[20vh]">
        <div className="w-full h-[350px] md:h-[300px] m-5 md:m-0 flex flex-col justify-evenly items-center bg-cream transition duration-500 hover:scale-110 z-0 backdrop-filter backdrop-blur-sm bg-opacity-70">
          <div className="w-full flex justify-center items-center">
            <h1 className={`${permanentMarker.className} antialiased text-4xl`}>
              EXPERIENCE & EDUCATION
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-evenly items-center mt-10 mb-10 z-0">
        <div className="z-10 w-full h-[350px] md:h-[300px] flex flex-col md:flex-row justify-evenly items-center bg-teaGreen shadow-md transition duration-500 hover:scale-110 backdrop-filter backdrop-blur-md bg-opacity-70">
          <div className="text-center">
            <h1 className="text-xl text-bold">Software/Security Engineer</h1>
            <h3>TRJ & Associates</h3>
            <h4>March 2023 - November 2024</h4>
          </div>
          <div className="text-center">
            <h1 className="text-xl text-bold">Front End Developer</h1>
            <h3>NeuroLeap Corp.</h3>
            <h4>April 2022 - April 2023</h4>
          </div>
          <div className="text-center">
            <h1 className="text-xl text-bold">React Web Developer Intern</h1>
            <h3>InstaHub</h3>
            <h4>February 2021 - July 2021</h4>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-evenly items-center mt-10 mb-10 z-0">
        <div className="z-10 w-full h-[350px] md:h-[300px] flex flex-col md:flex-row justify-evenly items-center bg-teaGreen shadow-md transition duration-500 hover:scale-110 backdrop-filter backdrop-blur-md bg-opacity-70">
          <div className="text-center">
            <h1 className="text-xl text-bold">
              New York City College of Technology
            </h1>
            <h3>BTech in Technology</h3>
            <h4>2013 - 2017</h4>
          </div>
          <div className="text-center">
            <h1 className="text-xl text-bold">Pace University</h1>
            <h3>Software Development & Engineering</h3>
            <h4>2022 - 2025</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
