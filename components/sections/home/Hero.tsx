/* eslint-disable @next/next/no-img-element */
'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Hero = () => {
  const [scrollY, setScrollY] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1180) 
    }
    
    const handleScroll = () => {
      if (isDesktop) {
        setScrollY(window.scrollY)
      }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)

    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isDesktop])

  const textTransform = isDesktop
    ? `translateX(${-scrollY * 0.5}px) translateY(${scrollY * -0.3}px) rotate(${scrollY * -0.05}deg)`
    : "none"

  const imageTransform = isDesktop
    ? `translateX(${scrollY * 0.5}px) translateY(${scrollY * -0.3}px) rotate(${scrollY * 0.05}deg)`
    : "none"

  return (
    <section className='h-screen  w-screen py-12 md:p-24 gap-16 lg:p-0 flex flex-col lg:grid lg:grid-cols-2 overflow-hidden'>
      <div 
        className='flex flex-col justify-between h-1/2 items-center p-6 lg:p-20 '
        style={{ transform: textTransform }}
      >
        <h1 className='md:text-5xl text-[3.6rem] leading-12 md:leading-20 text-primary flex  flex-col text-center uppercase'>
          <span>Where Every </span>
          <span className='flex items-center justify-center whitespace-nowrap'>
            Spoon
            <img 
              src="/purple-smiley.avif" 
              className='md:w-32 w-16 h-auto -mx-4 inline-block' 
              alt="" 
            />
            is</span>
          <span> a joyful </span>
          <span>journey</span>
        </h1>
        <p className='text-center font-medium px-0 md:px-24'>
          EISLAB - an unparalleled ice cream experience.
          Always sustainable, always premium. Follow us
          on social media to learn more!
        </p>
      </div>
      <div style={{ transform: imageTransform }}>
        <Image 
          src="/hero-image.jpg" 
          alt="" 
          width={500} 
          height={500} 
          className=' w-full h-[40vh] lg:h-screen object-cover' 
        />
      </div>
    </section>
  )
}

export default Hero
