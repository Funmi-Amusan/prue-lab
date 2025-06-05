import React from 'react'
import Image from 'next/image'
import { InfiniteSlider } from '@/components/InfiniteMovingImages'

const Socials = () => {
  return (
    <div className='w-full mt-[-100vh] h-[300vh] bg-blue-300'>
       
    
              <div className="h-screen flex items-center sticky top-0">
                     <InfiniteSlider >
  <Image 
             src="/choc-chip.jpg" 
             alt="" 
             width={3105} 
             height={2705} 
             className='w-20 object-contain rounded-full' 
           />
             <Image 
             src="/choc-chip.jpg" 
             alt="" 
             width={3105} 
             height={2705} 
             className='w-80 object-contain rounded-full' 
           />
             <Image 
             src="/choc-chip.jpg" 
             alt="" 
             width={3105} 
             height={2705} 
             className='w-60 object-contain rounded-full' 
           />
             <Image 
             src="/choc-chip.jpg" 
             alt="" 
             width={3105} 
             height={2705} 
             className='w-60 object-contain rounded-full' 
           />
             <Image 
             src="/choc-chip.jpg" 
             alt="" 
             width={3105} 
             height={2705} 
             className='w-30 object-contain rounded-full' 
           />
             <Image 
             src="/choc-chip.jpg" 
             alt="" 
             width={3105} 
             height={2705} 
             className='w-40 object-contain rounded-full' 
           />
  </InfiniteSlider>
                </div>
    </div>
  )
}

export default Socials