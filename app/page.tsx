import React from 'react';
import { permanentMarker } from './ui/fonts';

const Home = () => {
  return (
    <div className="w-full flex flex-col justify-evenly items-center overflow-hidden bg-no-repeat bg-cover bg-center h-screen bg-[url('/photographer.jpg')]">
      <div className="w-full flex flex-col md:flex-row justify-evenly items-center mt-[20vh] md:mt-[20vh]">
        <div className="w-full h-[350px] md:h-[300px] m-5 md:m-0 flex flex-col justify-evenly items-center bg-cream transition duration-500 hover:scale-110 z-0 backdrop-filter backdrop-blur-sm bg-opacity-70">
          <div className="w-full flex justify-center items-center">
            <h1 className={`${permanentMarker.className} antialiased text-6xl`}>
              Hello!!!
            </h1>
          </div>
          <div className="w-full flex justify-center items-center">
            <h2 className="text-4xl">I'm Emir</h2>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-evenly items-center mt-10 mb-10 z-0">
        <div className="z-10 w-full h-[350px] md:h-[300px] flex flex-col justify-evenly items-center bg-teaGreen shadow-md transition duration-500 hover:scale-110 backdrop-filter backdrop-blur-sm bg-opacity-70">
          <div className="w-full flex justify-center items-center">
            <h1
              className={`${permanentMarker.className} text-4xl md:text-3xl text-center`}
            >
              FRONT END DEVELOPER
            </h1>
          </div>
          <div className="w-full flex justify-center items-center">
            <p className="pl-16 pr-16 md:pl-10 md:pr-10 text-center">
              Front-end development lets me transform ideas into interactive,
              visually engaging experiences that connect with users and enhance
              their digital journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
