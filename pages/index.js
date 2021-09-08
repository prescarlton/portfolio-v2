import { Navbar } from "../components/navbar"
import Link from 'next/link'
export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className='lines absolute top-64'>
        <div className='line-1 flex my-2'>
          <div className='shape-1 h-5 w-8 bg-gray-100 rounded-r-xl mr-2'></div>
          <div className='shape-1 h-5 w-16 bg-gray-100 rounded-xl mr-2'></div>
        </div>
        <div className='line-2 flex my-2'>
          <div className='shape-1 h-5 w-10 bg-gray-100 rounded-r-xl mr-2'></div>
          <div className='shape-1 h-5 w-24 bg-gray-100 rounded-xl mr-2'></div>
        </div>
        <div className='line-3 flex my-2'>
          <div className='shape-1 h-5 w-6 bg-gray-100 rounded-r-xl mr-2'></div>
          <div className='shape-1 h-5 w-24 bg-gray-100 rounded-xl mr-2'></div>
        </div>
      </div>
      <div className='px-6 my-16 md:m-0 flex flex-1 flex-col md:px-36 justify-end items-end md:items-start md:justify-center'>
        <h1 className='text-4xl my-4'>Hey, I'm Preston.</h1>
        <h3 className='text-gray-600 md:text-2xl md:w-3/5 text-right md:text-left my-1'>I'm a junior software developer from Charleston, SC. click below to check out some of the stuff i've been working on in my free time.</h3>
        <button className='cursor-pointer bg-blue-500 py-2 px-6 rounded-md text-white hover:bg-blue-600 transition my-1'><Link href='/projects'>PROJECTS</Link></button>
      </div>
    </div>
  )
}
