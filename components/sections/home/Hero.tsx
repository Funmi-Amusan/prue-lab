'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Hero = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const textTransform = `translateX(${-scrollY * 0.5}px) translateY(${scrollY * -0.3}px) rotate(${scrollY * -0.05}deg)`
  const imageTransform = `translateX(${scrollY * 0.5}px) translateY(${scrollY * -0.3}px) rotate(${scrollY * 0.05}deg)`

  return (
    <section className='h-screen w-screen grid grid-cols-2 overflow-hidden'>
      <div 
        className='flex flex-col justify-between items-center p-24'
        style={{ transform: textTransform }}
      >
        <h1 className='text-5xl text-primary  flex flex-col text-center uppercase'>
          <span>Where Every </span>
          <span className='flex items-center justify-center whitespace-nowrap'>
            Spoon 
            <img 
              src="/purple-smiley.avif" 
              className='w-16 h-10 mx-2 inline-block' 
              alt="" 
            /> 
            is
          </span>
          <span> a joyful </span>
          <span>journey</span>
        </h1>
        <p className='text-center'>
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
          className='w-full h-screen object-cover' 
        />
      </div>
    </section>
  )
}

export default Hero