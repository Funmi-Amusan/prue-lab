'use client'

import React from 'react'
import Image from 'next/image'
import { TbArrowBigRightLinesFilled, TbArrowBigLeftLinesFilled } from "react-icons/tb";
import Magnet from '@/components/MagnetButton';

const Locations = () => {
 

  return (
    <section className='h-full w-screen z-50 relative overflow-x-clip '>
    <Image 
            src="/large-icecream.jpg" 
            alt="" 
            width={500} 
            height={500} 
            className='w-full h-[50vh] object-cover' 
          />
          <div className='h-screen bg-purple-300 justify-center flex flex-col items-center'>
<h2 className='text-5xl text-primary font-bold font-poetsen'>Best Choices</h2>
<div className='flex justify-center px-24 '>
<Image 
            src="/acai.avif" 
            alt="" 
            width={500} 
            height={500} 
            className='w-[15vw] object-contain' 
          />
          <div className='flex w-full items-center justify-center  gap-8'>
          <Magnet>
<TbArrowBigLeftLinesFilled size={24} />
</Magnet>
          <div className='bg-white rounded-full p-8'>
          <Image 
            src="/acai.avif" 
            alt="" 
            width={500} 
            height={500} 
            className='w-[25vw] object-contain' 
          />
          </div>
          <Magnet>
<TbArrowBigRightLinesFilled className='z-100' size={24} />
</Magnet>
          </div>
          <Image 
            src="/acai.avif" 
            alt="" 
            width={500} 
            height={500} 
            className='w-[15vw] object-contain' 
          />
</div>
          </div>
    </section>
  )
}

export default Locations