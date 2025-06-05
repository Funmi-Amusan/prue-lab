'use client'

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
  const CurvedText = ({ text, radius, fontSize, className, isBottom = false, rotation = 0 }: { text: string, radius: number, fontSize: string, className: string, isBottom?: boolean, rotation?: number }) => {
    const letters = Array.from(text)
    const totalAngle = Math.PI * 0.3
    const angleStep = totalAngle / (letters.length - 5)
    const startAngle = isBottom ? Math.PI * 0.5 : - Math.PI * 0.5 

    return (
      <div 
        className={`absolute inset-0  ${className}`}
        style={{ 
          transform: `rotate(${-rotation}deg)`,
          transformOrigin: 'center center'
        }}
      >
        {letters.map((letter, i) => {
          const angle = startAngle + (angleStep * i)
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius
          const letterRotation = (angle * 180) / Math.PI + 90

          return (
            <span
              key={i}
              className={`absolute ${fontSize} font-bold font-poetsen transition-all duration-300`}
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${letterRotation}deg)`,
                transformOrigin: 'center center'
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          )
        })}
      </div>
    )
  }
  const TextArc = ({ data, index, scrollOffset }: { data: { top: string, bottom: string }, index: number, scrollOffset: number }) => {
    const baseRotation = scrollOffset > 1000 ? (scrollOffset * 0.09) + (index * 90) : 0;
    const topRotation = baseRotation;
    const bottomRotation = baseRotation;
  
    return (
      <div className="absolute top-2/3 w-screen origin-center h-full">
        <CurvedText 
          text={data.top.toUpperCase()}
          radius={window.innerWidth * 0.5 } 
          fontSize="text-7xl" 
          className="text-primary "
          isBottom={false}
          rotation={topRotation}
        />
          <CurvedText 
          text={data.bottom.toUpperCase()}
          radius={window.innerWidth  * 0.45} 
          fontSize="text-7xl"
          className="text-primary top-8"
          isBottom={false}
          rotation={topRotation}
        />

<CurvedText 
          text={data.top.toUpperCase()}
          radius={window.innerWidth * 0.5 } 
          fontSize="text-7xl" 
          className="text-primary "
          isBottom={true}
          rotation={bottomRotation}
        />
          <CurvedText 
          text={data.bottom.toUpperCase()}
          radius={window.innerWidth * 0.45} 
          fontSize="text-7xl"
          className="text-primary top-8"
          isBottom={true}
          rotation={bottomRotation}
        />
      
      </div>
    );
  };  

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