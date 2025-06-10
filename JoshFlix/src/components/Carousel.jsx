
import { useState } from 'react';
import { imageData } from '../data/images';


function Photocard({photo, text}) {
    return (
      <div class = "bg-cyan-50/10 h-full w-1/2 flex flex-col items-center rounded-2xl overflow-hidden">
       
        <h4 className='h-full w-full items-center flex justify-center  md:text-2xl'>
          <img
           className='h-1/2'
            src = {photo}>
          </img>{text}</h4>
      </div>
    );
  }

  export default function Carousel() {
    return (
    <div className='flex h-full w-1/3 space-x-3 justify-between'>
      {imageData.map((image,index) => 
        <Photocard
        photo = {image.src}
        text = {image.alt}
        /> 
        )}
      {/* // <Photocard  */}
    </div>
  );
 
}