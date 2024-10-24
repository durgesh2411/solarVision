import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["detection", "quantization", "evaluation"];
  const words1 = ["solar panels", "solar panels", "solar energy"]

  return (
    <div className="relative h-[10rem] w-screen flex justify-left items-center px-4 -left-[15vw] bg-transparent">
      <div className="text-4xl mx-auto font-normal text-white"> {/* Changed color to white */}
        A unique approach for
        <FlipWords words={words} /> <br /> {/* Removed className here */}
        of Solar Panels using Artificial <br />
        Intelligence and Machine Learning
      </div>
    </div>
  );
}
