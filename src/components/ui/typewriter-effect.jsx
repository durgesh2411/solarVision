"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const renderWords = () => {
    return (
      <div className="flex">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block bg-black-1">
              {word.text.map((char, index) => (
                <span
                  key={`char-${index}`}
                  className={cn(`dark:text-white text-black text-4xl md:text-4xl lg:text-8xl bg-black-1`, word.className)}>
                  {char}
                </span>
              ))}
              <span className="inline-block bg-black-1">&nbsp;</span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
<div className={cn("flex items-center justify-center text-2xl space-x-1 my-8 h-auto pt-2 bg-black-1 rounded-2xl", className)}>
<motion.div
        className="overflow-hidden pb-2"
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "fit-content",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}>
        <div
          className="text-xs sm:text-base md:text-xl lg:3xl xl:text-6xl lora-small bg-black-1"
          style={{
            whiteSpace: "nowrap",
          }}>
          {renderWords()}
        </div>
      </motion.div>
    </div>
  );
};
