'use client'

import { TextFill } from '@/components/TextColor'
import React from 'react'

const JoinUs = () => {
  return (
    <section className='min-h-screen bg-background flex flex-col items-center justify-center'>
   <TextFill 
        texts={['BECOME A', 'FRANCHISE OWNER']}
        className="text-primary"
        fontSize="text-7xl"
        fontFamily="font-poetsen"
        duration={1.2}
      />
   </section>
  )
}

export default JoinUs