import Link from 'next/link'
import React from 'react'
import GridBackgroundLink from './GridBackgroundLink'

const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full z-50'>
        <nav className='flex justify-between items-center p-4'>
                <a className='text-2xl font-bold text-primary uppercase'>PrueLab</a>
                <ul className='flex space-x-4'>
                <GridBackgroundLink>
                <Link href="/" className='link'>DE</Link>
</GridBackgroundLink>
<GridBackgroundLink>
<Link href="/about" className='link'>MENU</Link>
</GridBackgroundLink>
                </ul>
        </nav>
    </header>
  )
}

export default Header