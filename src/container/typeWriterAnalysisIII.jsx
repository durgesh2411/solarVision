"use client";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";

export function TypewriterEffectSmoothDemoIII() {
  const words = [
    {
      text: "Inference ",
    },
    {
      text: "Analysis",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="flex flex-col items-left justify-center h-[12rem] pl-[24rem] w-screen rounded-2xl">
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col items-left justify-center h-[12rem] pl-[10rem] w-screen rounded-2xl">
      </div>
    </div>
  );
}
