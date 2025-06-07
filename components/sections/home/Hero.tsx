'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Hero = () => {
  const [scrollY, setScrollY] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768) // Disable animation on mobile (<768px)
    }
    
    const handleScroll = () => {
      if (isDesktop) {
        setScrollY(window.scrollY)
      }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)

    // Initial check
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
    <section className='h-screen w-screen flex flex-col md:grid md:grid-cols-2 overflow-hidden'>
      <div 
        className='flex flex-col justify-between items-center p-12 md:p-24'
        style={{ transform: textTransform }}
      >
        <h1 className='md:text-5xl text-4xl text-primary flex flex-col text-center uppercase'>
          <span>Where Every </span>
          <span className='flex items-center justify-center whitespace-nowrap'>
            Spoon<img 
              src="/purple-smiley.avif" 
              className='md:w-32 w-16 h-auto inline-block' 
              alt="" 
            />is</span>
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
