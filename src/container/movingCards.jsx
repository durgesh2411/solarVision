"use client";

import React from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    (<div
      className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>)
  );
}
const testimonials = [
  {
    quote:"This paper presents a real-time deep learning model for detecting defects such as cracks, erosion, and dust deposition on photovoltaic panels. The model uses multi-variant neural networks and a higher-order localization technique to accurately identify and localize defects.",
    name: "M. Arif Wani and T. Mujtaba",
    title: "Renewable Energy Researchers",
  },
  {
    quote:"This study applied Self-Supervised Learning (SSL) for solar panel segmentation to handle corrupted datasets, improving the detection accuracy of solar panels in aerial imagery, even withlimited annotated data. The method reduces annotation costs while maintaining robust performance.",
    name: "De-Yue Chen et al",
    title: "Researchers in Remote Sensinget",
  },
  {
    quote:"A proposed lightweight deep learning model for solar panel defect detection uses MobileNet-based architecture. This method performs segmentation and defect localization using less computational power, making it suitable for devices with limited resources.",
    name: "M. Arif Wani and T. Mujtaba",
    title: "Researchers in Photovoltaic Systems",
  },
  {
   quote:"HyperionSolarNet, a deep learning-based approach to detect and map solar panels globally using satellite imagery. The model achieves high accuracy in classifying and segmenting solar panels from aerial views, aiding in renewable energy planning",
    name: "Jane Austen",
    title: "Pride and Pr and udice",
  },
  {
    quote:"Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    quote:"Investigation into the impact of solar irradiation angles and temperature on photovoltaic module performance. The study quantifies how these factors affect power output and efficiency, with the findings emphasizing the importance of panel orientation and temperature management.",
    title: "Moby-Dick",
  },
];
