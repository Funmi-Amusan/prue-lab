import React from 'react'
import Image from 'next/image'
import { InfiniteSlider } from '@/components/InfiniteMovingImages'
import { PiInstagramLogoFill } from "react-icons/pi";

const Socials = () => {
  const gridBackgroundStyle = {
    '--grid-size': '1.2rem',
    '--grid-strength': '2px',
    '--grid-dash': '0px',
    '--grid-gap': '0px',
    '--grid-color': '#1c1456',
    '--paper-color': '#fbfaf9',
    backgroundColor: '#fbfaf9',
    backgroundImage: `linear-gradient(#1c1456 2px, transparent 2px), linear-gradient(to right, #1c1456 2px, #fbfaf9 2px)`,
    backgroundSize: '1.6rem 1.6rem',
    border: '2px solid #1c1456',
    backgroundPosition: '-2px -4px'
  };

  return (
    <div className='w-full mt-[-100vh] h-[300vh] bg-blue-300'>
              <div className="h-screen flex items-center sticky z-10 top-0">
                     <InfiniteSlider >
                      <div className='flex flex-col'>
                      <div className='flex relative justify-between w-[200vw] px-[20vw] items-start h-1/2'>
  <Image 
             src="/choc-chip.jpg" 
             alt="" 
             width={3105} 
             height={2705} 
             className='w-[20dvh] aspect-square object-cover rounded-full' 
           />
             <Image 
             src="/fish.jpg" 
             alt="" 
             width={3105} 
             height={2705} 
             className='w-[33dvh] aspect-square object-cover rounded-full' 
           />
             <Image 
             src="/chocolate.jpg" 
             alt="" 
             width={3105} 
             height={2705} 
             className='w-[44dvh] aspect-square object-cover rounded-full' 
           />
             <Image 
             src="/waffle.jpg" 
             alt="" 
             width={3105} 
             height={2705} 
             className='w-[29dvh] aspect-square object-cover rounded-full' 
           />
                      </div>
                      <div className='flex relative justify-between w-[200vw] items-start px-[10vw] h-1/2'>
  <Image 
             src="/choc-chip.jpg" 
             alt="" 
             width={3105} 
             height={2705} 
             className='w-[50dvh] aspect-square object-cover rounded-full' 
           />
             <Image 
             src="/fish.jpg" 
             alt="" 
             width={3105} 
             height={2705} 
             className='w-[15dvh] aspect-square object-cover rounded-full' 
           />
             <Image 
             src="/choc-chip.jpg" 
             alt="" 
             width={3105} 
             height={2705} 
             className='w-[19dvh] aspect-square object-cover rounded-full' 
           />
               <Image 
             src="/choc-waffle.jpg" 
             alt="" 
             width={3105} 
             height={2705} 
             className='w-[31dvh] aspect-square object-cover rounded-full' 
           />
                      </div>
                      </div>
  </InfiniteSlider>
                </div>
                <div className='h-screen flex flex-col items-center  sticky top-1/2 z-30 gap-4'>
<h2 className='text-7xl  text-center max-w-[30rem]'>ENJOY A FEW SCOOPS OF OUR JOYFUL JOURNEY</h2>
<div className='relative group'>
<button className='bg-background relative z-10 border-2 border-primary uppercase font-semibold inline-flex items-center justify-center gap-4 group-hover:translate-x-4 group-hover:-translate-y-4 transition-all duration-100 ease-in-out ' >
<PiInstagramLogoFill size={24} className='m-auto' />
<span className='border-l-2 border-primary p-2'>
  follow us
</span>
</button>
<div style={gridBackgroundStyle} className='absolute inset-0 z-0'></div>
</div>
                </div>
    </div>
  )
}
export default Socials