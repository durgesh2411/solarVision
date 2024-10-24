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

            <div className="relative -top-[10rem] bg-transparent text-xl prose prose-sm dark:prose-invert left-[10vw]">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="relative rounded-lg left-[12vw] mb-10 object-cover" />
              )}
              {item.description}
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
          of Images in roboflow.
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
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
          veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
          reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
          cillum ut mollit.
        </p>
      </>
    ),
    badge: "Data Annotation and Model Training",
    image:
      "/Vellore.png",
  },
  {
    title: "Week III",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
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
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
      </>
    ),
    badge: "Research and Report Work",
    image:
      "/Vellore.png",
  },
];
