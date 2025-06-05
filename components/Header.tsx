import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full z-50'>
        <nav className='flex justify-between items-center p-4'>
                <h1 className='text-2xl font-bold text-primary uppercase'>PrueLab</h1>
                <ul className='flex space-x-4'>
               <Link href="/" className='link'>DE</Link>
                <Link href="/about" className='link'>MENU</Link>
                </ul>
        </nav>
    </header>
  )
}

export default Header