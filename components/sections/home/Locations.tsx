'use client'

import React from 'react'
import Image from 'next/image'
import { WorldMapDemo } from '@/components/WorldMaps';
import WordReveal from '@/components/WordReveal';
import { Carousel } from '@/components/Carousel';

const Locations = () => {
 
  const iceCreams = [
    {
      name: 'Hazelnut',
      src: '/acai.avif'
    },
    {
      name: 'Pistacio',
      src: '/acai.avif'
    },
    {
      name: 'Acai',
      src: '/acai.avif'
    },
    {
      name: 'Mint',
      src: '/acai.avif'
    },
  
  ]


  return (
    <section className='h-full w-screen bg-background z-50 relative overflow-x-clip'>
      <Image 
        src="/large-icecream.jpg" 
        alt="" 
        width={500} 
        height={500} 
        className='w-full h-[70vh] p-4 object-cover' 
      />
      <div className='h-screen bg-purple-300 flex flex-col items-center relative overflow-hidden' style={{
        borderBottomLeftRadius: '40% 40%',
        borderBottomRightRadius: '40% 40%'
      }}>
        <WordReveal texts={['Best choices']} className={'text-primary font-bold font-yorkgame leading-none text-[14vw]'} />
        <div className="relative overflow-hidden w-full h-full pb-20">
      <Carousel slides={iceCreams} />
    </div>
      </div>
      
      <div className="w-full flex justify-center items-center py-12">
        <h2 className='uppercase font-bold font-yorkgame text-7xl text-center'>
          <WordReveal texts={['We are delighted ', 'to welcome you soon']} className={'text-primary font-bold font-yorkgame text-7xl flex flex-col gap-4'} />
        </h2>
      </div>
      <WorldMapDemo />
    </section>
  )
}

export default Locations