'use client'

import { TextArc } from '@/components/TextArc'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const About = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const textData = [
    {
      top: 'Our production is',
      bottom: 'environmentally friendly'
    },
    {
      top: 'Every cup is made from',
      bottom: 'high-quality ingredients'
    },
    {
      top: 'A delight for',
      bottom: 'everyone'
    }
  ]


  return (
    <section className='h-full w-screen p-24 relative overflow-clip '>
      <div className=' flex flex-col items-center justify-between py-12 sticky top-0 z-10 h-screen '>
      <h1 className='text-center text-xl font-medium font-merienda  uppercase '>
        How ice cream should be today
      </h1>
            <TextArc data={textData[0]} index={0} scrollOffset={scrollY} />
      <Link href="/about" className='link sticky top-20 '>About us</Link>
      </div>

      {/* Images Grid */}
      <div className='grid grid-rows-6 gap-12 items-center justify-items-center -mt-[120dvh]'>
        <div className='row-span-1 flex justify-between gap-4 w-full'>
          <span />
          <Image 
            src="/choc-chip.jpg" 
            alt="" 
            width={3105} 
            height={2705} 
            className='w-60 object-contain' 
          />
        </div>
        <div className='row-span-1 flex justify-between gap-4 w-full'>
          <Image 
            src="/waffle.jpg" 
            alt="" 
            width={3105} 
            height={2705} 
            className='w-60 object-contain' 
          />
          <span />
        </div>
        <div className='row-span-1 flex justify-between gap-4 w-full'>
          <span />
          <Image 
            src="/chocolate.jpg" 
            alt="" 
            width={3105} 
            height={2705} 
            className='w-60 object-contain' 
          />
        </div>
        <div className='row-span-1 flex justify-between gap-4 w-full'>
          <Image 
            src="/fish.jpg" 
            alt="" 
            width={3105} 
            height={2705} 
            className='w-60 object-contain' 
          />
          <span />
        </div>
        <div className='row-span-1 flex justify-between gap-4 w-full'>
          <span />
          <Image 
            src="/choc-waffle.jpg" 
            alt="" 
            width={3105} 
            height={2705} 
            className='w-60 object-contain' 
          />
        </div>
        <div className='row-span-1 flex justify-between gap-4 w-full'>
          <Image 
            src="/sprinkles.jpg" 
            alt="" 
            width={3105} 
            height={2705} 
            className='w-60 object-contain' 
          />
          <span />
        </div>
      </div>
  
    </section>
  )
}

export default About