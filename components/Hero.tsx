import Image from 'next/image';
import React from 'react';
import head from '@/assets/head.jpg';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center gap-8 text-center p-10"
    >
      <div className="w-[200px] h-[200px] rounded-full shadow-xl">
        <Image
          className="w-full h-full rounded-full object-cover"
          src={head}
          alt="my head"
          width={500}
          height={500}
        />
      </div>
      <div className="">
        <p>Hi! I&apos;m Emir Cokrlija</p>
      </div>
      <div className="w-[500px]">
        <h2 className="text-4xl">
          frontend web developer based in new york city.
        </h2>
      </div>
      <div className="w-[500px]">
        <p>
          I am a frontend web developer with a passion for creating beautiful
          and functional user interfaces.
        </p>
      </div>
      <div className=" flex gap-4">
        <Button variant="default">about me</Button>
        <Button variant="outline">
          view my work <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
