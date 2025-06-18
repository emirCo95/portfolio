'use client';
import project_1 from '@/assets/project_1.png';
import project_2 from '@/assets/project_2.png';
import project_3 from '@/assets/project_3.png';
import project_4 from '@/assets/project_4.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Work = () => {
  const router = useRouter();

  return (
    <div
      id="my-work"
      className="flex flex-col items-center justify-center gap-4 p-4 mt-36"
    >
      <div className="flex flex-col gap-4 text-center">
        <span>My Portfolio</span>
        <h1 className="text-5xl">My Latest Work</h1>
        <p className="w-[700px] text-gray-600 dark:text-white">
          Welcome to my web development portfolio! Explore a collection of
          projects showcasing my expertise in front end development.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4 px-16 py-4 mt-8">
        <div className="w-[300px] h-[350px] border">
          <div
            onClick={() => router.push('https://hiking-landing.netlify.app/')}
            className="flex flex-col gap-4 items-center justify-center h-full cursor-pointer"
          >
            <Image
              src={project_1}
              alt="Project 1"
              className="w-full h-full object-cover"
            />
            <span className="pb-4">MNTN Landing</span>
          </div>
        </div>
        <div
          onClick={() => router.push('https://borcelle-boutique.netlify.app/')}
          className="w-[300px] h-[350px] border"
        >
          <div className="flex flex-col gap-4 items-center justify-center h-full cursor-pointer">
            <Image
              src={project_2}
              alt="Project 2"
              className="w-full h-full object-cover"
            />
            <span className="pb-4">Flower Boutique</span>
          </div>
        </div>
        <div
          onClick={() =>
            router.push('https://cuisine-restaurant1.netlify.app/')
          }
          className="w-[300px] h-[350px] border"
        >
          <div className="flex flex-col gap-4 items-center justify-center h-full cursor-pointer">
            <Image
              src={project_3}
              alt="Project 3"
              className="w-full h-full object-cover border-b"
            />
            <span className="pb-4">Cuisine Restaurant</span>
          </div>
        </div>
        <div
          onClick={() =>
            router.push('https://elysium-photography.netlify.app/')
          }
          className="w-[300px] h-[350px] border"
        >
          <div className="flex flex-col gap-4 items-center justify-center h-full cursor-pointer">
            <Image
              src={project_4}
              alt="Project 4"
              className="w-full h-full object-cover"
            />
            <span className="pb-4">Photo Studio</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
