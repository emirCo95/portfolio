import Image from 'next/image';
import React from 'react';
import about from '@/assets/about.jpg';

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 mt-36">
      <div className="flex flex-col items-center justify-center gap-2 text-center">
        <span>Introduction</span>
        <h1 className="text-5xl">About me</h1>
      </div>
      <div className="flex w-full items-start justify-center px-36 py-18 gap-10">
        <div className="w-[250px] h-[400px] rounded-lg shadow-xl">
          <Image
            className="w-full h-full object-cover rounded-lg"
            src={about}
            alt="about image"
            width={500}
            height={500}
          />
        </div>
        <div className="flex items-start justify-center gap-4 flex-col">
          <div className="w-[800px]">
            <p className="text-gray-600">
              Hello! I&apos;m a passionate web developer with a keen interest in
              creating dynamic and responsive web applications. With a strong
              foundation in HTML, CSS, and JavaScript, I enjoy building
              user-friendly interfaces and ensuring seamless user experiences.
              My goal is to continuously learn and adapt to new technologies
              while contributing to innovative projects that make a difference.
            </p>
          </div>
          <div className="flex items-center justify-start gap-4">
            <div className="w-[200px] h-[200px] border"></div>
            <div className="w-[200px] h-[200px] border"></div>
            <div className="w-[200px] h-[200px] border"></div>
          </div>
          <div className="">
            <span>Tools I use:</span>
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
