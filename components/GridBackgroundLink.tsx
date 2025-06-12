import React from 'react'

const GridBackgroundLink = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='relative group'>
    <button className='bg-background relative z-10 border border-primary uppercase font-semibold inline-flex items-center justify-center gap-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500 ease-in-out ' >
   {children}
    </button>
    <div className='grid-background absolute inset-0 z-0'></div>
    </div>
  )
}

export default GridBackgroundLink