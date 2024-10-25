"use client";
import Image from 'next/image';
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Work ",
    },
    {
      text: "Analysis",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="flex flex-col items-left justify-center h-[12rem] pl-[24rem] w-screen rounded-2xl"> {/* Updated line */}
      {/* <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p> */}
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col items-left justify-center h-[12rem] pl-[10rem] w-screen rounded-2xl"> {/* Updated line */}
      </div>
    </div>
  );
}
