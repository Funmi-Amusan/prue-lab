import React from 'react'
import Image from 'next/image'
import { InfiniteSlider } from '@/components/InfiniteMovingImages'
import { PiInstagramLogoFill } from "react-icons/pi";
import GridBackgroundLink from '@/components/GridBackgroundLink';

const Socials = () => {
  return (
    <div className='w-full mt-[-100vh] h-[300vh] bg-blue-300 relative'>
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
                <div className='h-screen flex flex-col items-center sticky top-0 justify-center z-30 gap-8'>
<h2 className='text-7xl  text-center max-w-[30rem]'>ENJOY A FEW SCOOPS OF OUR JOYFUL JOURNEY</h2>
<GridBackgroundLink>
<PiInstagramLogoFill size={24} className='m-auto' />
<span className='border-l-2 border-primary p-2'>
  follow us
</span>
</GridBackgroundLink>
                </div>
    </div>
  )
}
export default Socials