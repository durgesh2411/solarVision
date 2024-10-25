"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../components/ui/tracing-beam";

export function TracingBeamDemo() {
  return (
    (<TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-2xl w-[24rem] px-4 py-2 mb-4">
              {item.badge}
            </h2>

            <p className={"relative text-[6rem] top-[8rem] mb-4"}>
              {item.title}
            </p>

            <div className="relative -top-[10rem] bg-transparent text-xl prose prose-sm dark:prose-invert left-[10vw] para">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="relative rounded-lg left-[12vw] mb-10 object-cover" />
              )}
              <div className='para1'>{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>)
  );
}

const dummyContent = [
  {
    title: "Week I",
    description: (
      <>
        <p>
          Performed Data Collection and preprocessing on multiple satellite images from both
          India and foreign. The data collected was of diversified nature and was used for annotation
          of Images in roboflow. The data collected is of variable orietations to encapsulate the diversity of solar panel and solar panel arrays in the dataset taken from urban areas.
        </p>
      </>
    ),
    badge: "Data Collection and Preprocessing",
    image:
      "/Vellore.png",
  },
  {
    title: "Week II",
    description: (
      <>
        <p>
          Data Annotation is done on the images collected in the previous week. The images are annotated using Roboflow and the annotations are exported in YOLO format. The annotated images are then used for training the model. There are multiple models developed and stacked over each other for optimisation of resources and providing better accuracy.
        </p>
      </>
    ),
    badge: "Data Annotation and Model Training",
    image:
      "/analysis-img1.jpg",
  },
  {
    title: "Week III",
    description: (
      <>
        <p>
            The model trained in the previous week is tested on the test dataset. The model is tested for accuracy and the model is then evaluated for Canny Edge Detection and Area Evaluation. The model is then used to predict the solar panels in the images and the results are evaluated for accuracy and precision. The model is then tuned for better ccuracy by applying Canny Edge and Holistic Edge Detection Algorithms to evaluate the number of solar panels.
        </p>
      </>
    ),
    badge: "Canny Edge and Area Evaluation",
    image:
      "/Vellore.png",
  },
  {
    title: "Week IV",
    description: (
      <>
        <p>
          The entire work is compressed and compiled into reports and the work is finally done and the results are evaluted. The project report encapsulates the entire work done and the proposed methodology is provided in the research paper. The research paper is then submitted to the respective authorities for evaluation and the results are then evaluated for the final submission.
        </p>
      </>
    ),
    badge: "Research and Report Work",
    image:
      "/Vellore.png",
  },
];
