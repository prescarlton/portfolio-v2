import { Navbar } from "../components/navbar";

const stuff = [
    {
        name: 'React.js',
        level: 6
    },
    {
        name: 'Node.js',
        level: 5
    },
    {
        name: 'jQuery',
        level: 6
    },
    {
        name: 'Python',
        level: 6
    },
    {
        name: 'Git',
        level: 5
    },
    {
        name: 'Vue.js',
        level: 3
    },
    {
        name: 'ES6+ JavaScript',
        level: 6
    },
    {
        name: 'HTML/CSS',
        level: 7
    },
    {
        name: 'Sass',
        level: 4
    },
    {
        name: 'tailwindcss',
        level: 3
    },
]

const trails = [
    {
        name: 'Rainbow Falls',
        location: 'Greenville, SC',
        distance: 3.4
    },
    {
        name: 'Pilot Rock',
        location: 'Brevard, NC',
        distance: 24.1
    }
]

export default function About() {
    return (
        <div className='h-screen flex flex-col'>
            <Navbar active='about' />
            <div className='flex flex-col flex-1 p-6 pb-12 md:px-36'>
                <div className='header-container mb-3'>
                    <h1 className='text-4xl mb-1 font-black'>about me</h1>
                    <div className='header-underline h-2 w-10 rounded-lg bg-blue-500'></div>
                </div>
                <p className='text-lg'>Hey! I'm a junior software from Charleston, SC that loves learning new software and technologies.</p>
                <p className='text-lg'>When I'm not hunched over my laptop, cursing the creator of JavaScript, I spend a lot of time in the woods hiking, camping, and backpacking.</p>
                <div className='about-more md:flex'>
                    <div className='software md:w-1/2'>
                        <div className='header-container mb-3 mt-8 flex flex-col items-end font-bold md:items-start'>
                            <h2 className='text-3xl'>software i use</h2>
                            <div className='header-underline h-1 w-6 rounded-lg bg-blue-500'></div>
                        </div>
                        <ul className='flex flex-col items-end'>
                            {stuff.map(item => {
                                return (
                                    <li className='flex justify-between w-full items-center flex-row-reverse'>
                                        <div className='bar-bg bg-gray-100 rounded-lg h-3 w-32'>
                                            <div className={`bar-color bg-blue-500 h-3 w-${item.level * 4} rounded-lg`}></div>
                                        </div>
                                        <p className='font-medium'>{item.name}</p>
                                    </li>
                                )
                            }
                            )}
                        </ul>
                    </div>
                    <div className='trails md:w/1-2'>
                        <div className='header-container mb-3 mt-8 flex flex-col items-start font-bold md:items-end'>
                            <h2 className='text-3xl'>recent hikes</h2>
                            <div className='header-underline h-1 w-6 rounded-lg bg-blue-500'></div>
                        </div>
                        <ul className='flex flex-col items-end'>
                            {trails.map(trail => {
                                return (
                                    <li className='flex justify-between w-full items-start flex-col mb-3'>
                                        <div className='trail-head flex items-center '>
                                            <h3 className='font-medium text-xl mr-1'>{trail.name}</h3>
                                            &middot;
                                            <p className='text-gray-500 ml-1 text-md'>{trail.distance} mi</p>
                                        </div>
                                        <div className='trail-info flex'>
                                            <h4 className='text-gray-500 text-lg'>{trail.location}</h4>
                                        </div>
                                    </li>
                                )
                            }
                            )}
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    )
}