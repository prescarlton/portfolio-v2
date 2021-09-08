import Link from 'next/link'
import { useState } from 'react'

export const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav(!showNav);
    }

    return (
        <div className='flex justify-between p-6 md:px-36 md:pt-10 md:pb-0 w-100 md:flex-row items-start'>
            <Link href='/'>
                <h1 className='text-2xl font-semibold text-blue-500 md:text-black hover:text-blue-500 cursor-pointer md:flex-none'>
                    Preston
                </h1>
            </Link>
            <ul className='hidden md:flex justify-between items-center'>
                <Link href='/'>
                    <li className='mr-16 hover:text-blue-500 cursor-pointer'>
                        Home
                    </li>
                </Link>
                <Link href='/projects'>
                    <li className='mr-16 hover:text-blue-500 cursor-pointer'>
                        Projects
                    </li>
                </Link>
                <Link href='#contact'>
                    <li className='mr-16 hover:text-blue-500 cursor-pointer '>
                        Contact
                    </li>
                </Link>
                <Link href='#resume'>
                    <li className='cursor-pointer bg-blue-500 py-2 px-6 rounded-md text-white hover:bg-blue-600 transition'>
                        Resume
                    </li>
                </Link>
            </ul>
            <div className='md:hidden absolute top-0 right-0 p-6 z-10' onClick={() => toggleNav()}>
                {showNav ? 'close' : 'menu'}
            </div>
            <div className={`${showNav ? 'flex' : 'hidden'} flex-1 flex-col absolute h-screen bg-white items-end top-0 bottom-0 right-0 left-0 text-right p-6`}>
                <div className='nav my-24'>
                    <h1 className='text-3xl my-3'><Link href='/'>home</Link></h1>
                    <h1 className='text-3xl my-3'><Link href='/projects'>projects</Link></h1>
                    <h1 className='text-3xl my-3'>contact</h1>
                </div>
                <div>
                    <h1 className='text-3xl my-3'>social media</h1>
                    <h2 className='text-xl my-1'>instagram</h2>
                    <h2 className='text-xl my-1'>linkedin</h2>
                </div>
            </div>
        </div>

    )
}