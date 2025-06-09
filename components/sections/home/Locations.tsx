'use client'

import React from 'react'
import Image from 'next/image'
import { TbArrowBigRightLinesFilled, TbArrowBigLeftLinesFilled } from "react-icons/tb";
import Magnet from '@/components/MagnetButton';
import { WorldMapDemo } from '@/components/WorldMaps';
import WordReveal from '@/components/WordReveal';

const Locations = () => {
 

  return (
    <section className='h-full w-screen bg-background z-50 relative overflow-x-clip '>
    <Image 
            src="/large-icecream.jpg" 
            alt="" 
            width={500} 
            height={500} 
            className='w-full h-[70vh] p-4 object-cover' 
          />
          <div className='h-screen bg-purple-300  flex flex-col items-center relative overflow-hidden' style={{
            borderBottomLeftRadius: '40% 40%',
            borderBottomRightRadius: '40% 40%'
          }}>
 <WordReveal texts={['Best choices']} className={'text-primary font-bold font-yorkgame leading-none text-[14vw] '} />
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
<TbArrowBigRightLinesFilled className='z-10' size={24} />
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
          <div className="w-full flex justify-center items-center py-12">
<h2 className='uppercase font-bold font-yorkgame text-7xl text-center'>
  <WordReveal texts={['We are delighted ', 'to welcome you soon']} className={'text-primary font-bold font-yorkgame text-7xl flex flex-col gap-4'}  />
</h2>
</div>
<WorldMapDemo />
    </section>
  )

}
export default Locations