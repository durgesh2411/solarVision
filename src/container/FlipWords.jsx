import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["detection", "quantization", "evaluation"];
  const words1 = ["solar panels", "solar panels", "solar energy"]

  return (
    <div className="relative h-[30rem] w-screen flex justify-left bg-black-1 items-center pl-[8vw] left-[0vw]">
      <div className="text-5xl mx-auto font-normal text-white bg-black-1 w-screen para"> {/* Changed color to white */}
        A unique approach for
        <FlipWords words={words} /> <br /> {/* Removed className here */}
        of Solar Panels using Artificial <br />
        Intelligence and Machine Learning
      </div>
    </div>
  );
}
