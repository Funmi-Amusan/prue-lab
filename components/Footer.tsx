'use client'
import React from 'react'
import { TextFillGray } from './TextColorGrey';

const Footer = () => {
   const [hoveredItem, setHoveredItem] = React.useState<number|null>(null);

   const menuItems = ['Products', 'About', 'Services', 'Contact', 'Careers'];

  return (
   <footer className='bg-primary text-white h-full flex flex-col gap-8 w-full px-12 pt-8 md:px-24'>
<div className='flex flex-col md:flex-row justify-between items-stretch '>
  <a className='text-2xl font-bold uppercase text-white'>PrueLab</a>
  <div className='gap-4 flex flex-col justify-between '>
    <p className='max-w-sm font-medium text-lg'>Follow us on social media for exclusive insights, inspiring moments of enjoyment, and the secrets behind our unique creations – don&apos;t miss out.</p>
    <ul className='-ml-4'>
      <li>
        <a href="">
          <img  src="/purple-smiley.avif"  className='md:w-16 w-8 h-auto inline-block'   alt=""  />
          <span className='uppercase text-white text-lg font-bold'>Facebook</span>
        </a>
      </li>
      <li>
        <a href="">
          <img  src="/purple-smiley.avif"  className='md:w-16 w-8 h-auto inline-block'   alt=""  />
          <span className='uppercase text-white text-lg font-bold'>Instagram</span>
        </a>
      </li>
      <li>
        <a href="">
          <img  src="/purple-smiley.avif"  className='md:w-16 w-8 h-auto inline-block'   alt=""  />
          <span className='uppercase text-white text-lg font-bold'>Tiktok</span>
        </a>
      </li>
    </ul>
  </div>
  <ul className='flex flex-col'>
    {menuItems.map((item, index) => (
      <li key={index}>
        <a 
          href="" 
          className='uppercase text-white text-3xl font-yorkgame leading-8'
          onMouseEnter={() => setHoveredItem(index)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <TextFillGray 
            texts={[item]} 
            isHovered={hoveredItem !== null && hoveredItem !== index} 
          />
        </a>
      </li>
    ))}
  </ul>
</div>
<div className='flex justify-between text-white/60 pb-4 font-medium'>
<p>© 2025 Funmilayo Amusan. All rights reserved.</p>


<p>Design by Hyumi</p>
</div>
   </footer>
  )
}

export default Footer


