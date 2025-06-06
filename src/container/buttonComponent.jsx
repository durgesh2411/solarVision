import { Button } from "@/componentscopy/ui/Button";
import React from "react";

const ButtonComponent = () => {
   return(
      <section className='relative h-[40rem] w-screen flex flex-row justify-center items-center' style={{ zIndex: 1 }}>
         <div className='absolute h-[36rem] w-full flex flex-row justify-evenly items-center'>
            <div className='relative h-[28rem] w-[24rem] flex flex-col justify-around items-center'>
               <div className='text-4xl h-[4rem] w-full dark:text-blue-500 text-center'>Low resolution model</div>
               <div className='text-2xl h-[12rem] w-full text-center para'>Use images that are of low resolution which have threshold ranging from 4m to 10m.</div>
               <a href="https://solar-vision-inference-low-res.streamlit.app/" target="_blank" rel="noopener noreferrer" className='text-2xl h-[4rem] w-full rounded-2xl dark:text-blue-500 border-button'>
  <button className='text-2xl h-[4rem] w-full rounded-2xl dark:text-blue-500 border-button'>Click Here</button>
</a>
            </div>
            <div className='relative h-[28rem] w-[24rem] flex flex-col justify-around items-center'>
               <div className='text-4xl h-[4rem] w-full dark:text-blue-500 text-center'>Research Paper</div>
               <div className='text-2xl h-[12rem] w-full text-center para'>Use this to download detailed version of research paper.</div>
               <button className='text-2xl h-[4rem] w-full rounded-2xl dark:text-blue-500 border-button'>Download</button>
            </div>
            <div className='relative h-[28rem] w-[24rem] flex flex-col justify-around items-center'>
               <div className='text-4xl h-[4rem] w-full dark:text-blue-500 text-center'>Powerpoint View</div>
               <div className='text-2xl h-[12rem] w-full text-center para'>Our submitted presentation depicting the statistis of the project.</div>
               <a href="https://www.canva.com/design/DAGTzkxmtvM/IDPjdtZH0vW2U5fy8Ez_5g/edit?utm_content=DAGTzkxmtvM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener noreferrer" className='text-2xl h-[4rem] w-full rounded-2xl dark:text-blue-500 border-button'>
  <button className='text-2xl h-[4rem] w-full rounded-2xl dark:text-blue-500 border-button'>Visit</button>
</a>
            </div>
            <div className='relative h-[28rem] w-[24rem] flex flex-col justify-around items-center'>
               <div className='text-4xl h-[4rem] w-full dark:text-blue-500 text-center'>High resolution model</div>
               <div className='text-2xl h-[12rem] w-full text-center para'>Use images that are of high resolution which have threshold ranging from 0.75m to 1.8m.</div>
               <a href="https://solar-vision-inference-high-res.streamlit.app/" target="_blank" rel="noopener noreferrer" className='text-2xl h-[4rem] w-full rounded-2xl dark:text-blue-500 border-button'>
  <button className='text-2xl h-[4rem] w-full rounded-2xl dark:text-blue-500 border-button'>Click Here</button>
  </a>
            </div>
         </div>
      </section>
   )
}

export default ButtonComponent;
