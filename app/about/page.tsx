import React from 'react';
import { permanentMarker } from '../ui/fonts';

const Page = () => {
  return (
    <div className="w-full flex flex-col justify-evenly items-center overflow-hidden bg-cover bg-center h-full bg-[url('/about.jpg')]">
      <div className="w-full flex flex-col md:flex-row justify-evenly items-center mt-[20vh] md:mt-[20vh]">
        <div className="w-full h-[350px] md:h-[300px] m-5 md:m-0 flex flex-col justify-evenly items-center bg-cream transition duration-500 hover:scale-110 z-0 backdrop-filter backdrop-blur-sm bg-opacity-90">
          <div className="w-full flex justify-center items-center">
            <h1
              className={`${permanentMarker.className} antialiased text-6xl text-center`}
            >
              More Than A Developer
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-evenly items-center mt-10 z-0">
        <div className="z-10 w-full h-[350px] md:h-[300px] flex flex-col justify-evenly items-center bg-teaGreen shadow-md transition duration-500 hover:scale-110 backdrop-filter backdrop-blur-sm bg-opacity-90">
          <div className="w-full flex justify-center items-center">
            <h1
              className={`${permanentMarker.className} text-4xl md:text-3xl text-center`}
            >
              UI/UX Designer
            </h1>
          </div>
          <div className="w-full flex justify-center items-center">
            <p className="pl-16 pr-16 md:pl-10 md:pr-10 text-center text-lg">
              UI/UX design allows me to create intuitive, visually engaging
              experiences that make technology feel natural and enjoyable for
              users.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-evenly items-center mt-10 z-0">
        <div className="z-10 w-full h-[350px] md:h-[300px] flex flex-col justify-evenly items-center bg-teaGreen shadow-md transition duration-500 hover:scale-110 backdrop-filter backdrop-blur-sm bg-opacity-90">
          <div className="w-full flex justify-center items-center">
            <h1
              className={`${permanentMarker.className} text-4xl md:text-3xl text-center`}
            >
              Photographer
            </h1>
          </div>
          <div className="w-full flex justify-center items-center">
            <p className="pl-16 pr-16 md:pl-10 md:pr-10 text-center text-lg">
              Photography lets me interact with the world outside of technology,
              by allowing me to capture nature, people and moments while
              integrating them into my work later on.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-evenly items-center mt-10 mb-10 z-0">
        <div className="z-10 w-full h-[350px] md:h-[300px] flex flex-col justify-evenly items-center bg-teaGreen shadow-md transition duration-500 hover:scale-110 backdrop-filter backdrop-blur-sm bg-opacity-90">
          <div className="w-full flex justify-center items-center">
            <h1
              className={`${permanentMarker.className} text-4xl md:text-3xl text-center`}
            >
              Artist
            </h1>
          </div>
          <div className="w-full flex justify-center items-center">
            <p className="pl-16 pr-16 md:pl-10 md:pr-10 text-center text-lg">
              My passion for sketching and drawing brings my developer skills to
              another level. It heightens my skill of paying attention to detail
              and how different components fit well together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
