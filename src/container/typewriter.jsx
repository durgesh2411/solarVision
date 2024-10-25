"use client";
import Image from 'next/image';
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Solar ",
    },
    {
      text: "Vision",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="flex flex-col items-left justify-left h-[12rem] pl-[0rem] w-screen bg-black-1">
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 bg-black-1">
      </div>
    </div>
  );
}
