import { Navbar } from "../components/navbar"

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className='px-6 my-16 md:m-0 flex flex-1 flex-col md:px-36 justify-end items-end md:items-start md:justify-center'>
        <h1 className='text-4xl my-3'>Hey, I'm Preston.</h1>
        <h3 className='text-gray-600 md:text-2xl md:w-3/5 text-right md:text-left'>I'm a junior software developer from charleston, sc. click below to check out some of the stuff i've been working on in my free time.</h3>
        <button className='cursor-pointer bg-blue-500 py-2 px-6 rounded-md text-white hover:bg-blue-600 transition'>PROJECTS</button>
      </div>
    </div>
  )
}
