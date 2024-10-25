import React from "react";
import { MeteorsDemo } from "./buttonComp";
import { MeteorsDemo1 } from "./buttonComp1";
import { MeteorsDemo2 } from "./buttonComp2";

const ButtonComponent = () => {
   return(
      <section className='relative h-[25rem] w-screen tgb' style={{ zIndex: 1 }}>
         <div className="relative tgb flex flex-row w-full h-full justify-around items-center">
            <MeteorsDemo />
            <MeteorsDemo1 />
            <MeteorsDemo2 />
         </div>
      </section>
   )
}

export default ButtonComponent;
