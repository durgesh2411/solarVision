import React from "react";
import Image from 'next/image';

const InferenceII = () => {
      return (
         <div className='relative w-screen  h-[40rem] flex flex-row justify-center items-center'>
            <div className='relative  w-[80vw] h-[85%] flex justify-around'>
            <div className='relative w-[40%] flex flex-col justify-around'>
               <div className=' w-full h-[4rem] text-4xl'>Location :
                  <span className='text-blue-500 pl-[3rem]  text-3xl'>Shadnagar, NRSC</span>
               </div>
               <div className=' w-full h-[4rem] text-4xl'>Area :
               <span className='text-blue-500 pl-[3rem] text-3xl'>2976.46 sq. meters</span>
               </div>
               <div className=' w-full h-[4rem] text-3xl'>Energy <span className='pl-[1rem]'></span> Produced :  <span className='text-blue-500 pl-[3rem] text-3xl'>522.19 kWh</span>
               </div>
               <div className=' w-full h-[4rem] text-3xl'>Accuracy of Power Generation :<span className='pl-[1rem]'></span> <span className='text-blue-500 pl-[3rem] text-3xl'>89.33 %</span>
               </div>
               <div className=' w-full h-[rem] flex flex-row justify-around items-center'>
                  <div className=' text-center w-[30%] text-xl'>Precision : <span className='text-blue-500 pl-[1rem] text-2xl'>89.63 %</span></div>
                  <div className=' text-center w-[30%] text-xl'>Recall : <span className='text-blue-500 pl-[1rem] text-2xl'>75.28 %</span></div>
                  <div className=' text-center w-[30%] text-xl'>mAP50 : <span className='text-blue-500 pl-[1rem] text-2xl'>83.33 %</span></div>
               </div>
               </div>
               <div className='relative  w-[40%] flex flex-row'>
                  <Image src='/s2.jpg' alt='inference' width={800} height={100} className='relative object-contain' />
               </div>
            </div>
         </div>
      );
}

export default InferenceII;
