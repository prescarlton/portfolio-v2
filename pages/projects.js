import { Navbar } from "../components/navbar";
import { useState } from 'react';
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from "react-feather";

// temp until api is setup
let projects = [
    {
        title: 'projects (under construction)',
        // description: 'I spent a lot of time thinking about and desining this page, but wasn\'t really a fan of the traditional grid layout for these types of pages. This is what I ended up coming up with. To check out some of the projects I have on spotlight, click through the arrows at the bottom of the screen. To see a less pretty list of all my projects, click the little blue button right there.'
        description: `I've redesigned my site a few times now, and each time this page is the primary reason. 
        I can never settle on a layout that I actually like, but I think what I've landed on 
        this iteration is pretty unique. Whereas the majority of people go for a grid 
        layout for their projects, I chose to have a full-page 
        slideshow of a few spotlighted projects, and an archive of all my public GitHub repos. Still working on the highlighted projects, but click below to see the archive!`
    },
    // {
    //     title: 'Bevvy',
    //     tags: ['UI/UX', 'Mobile'],
    //     description: 'An app to help you find happy hours near you. Currently in development!',
    //     github: false,
    //     inProd: false
    // },
    // {
    //     title: 'Splitgate Stat Tracker',
    //     tags: ['UI/UX', 'API',],
    //     description: 'A super simple site that takes advantage of Splitgate\'s API to view player stats.',
    //     github: true,
    //     inProd: false
    // },
    // {
    //     title: 'Project #3',
    //     tags: ['UI/UX', 'API',],
    //     description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore beatae ad consectetur eaque obcaecati cupiditate! Ad in ipsum eveniet, architecto earum labore, distinctio totam sint fuga expedita, aperiam dignissimos cupiditate.',
    //     github: true,
    //     inProd: false
    // }
]


const getProjectContent = (pageNum) => {
    return pageNum == 0 ? (
        <div className='project-content flex-1 flex flex-col justify-center items-start'>
            <div className='header-container mb-3'>
                <h1 className='text-4xl mb-1 font-black'>{projects[pageNum].title}</h1>
                <div className='header-underline h-2 w-10 rounded-lg bg-blue-500'></div>
            </div>
            <p className='py-2 mb-3 text-lg'>{projects[pageNum].description}</p>
            <button className='cursor-pointer bg-blue-500 py-2 px-4 rounded-md text-white hover:bg-blue-600 transition'><Link href='/project-archive'>VIEW ALL PROJECTS</Link></button>
        </div>
    ) : (
        <div className='project-content flex-1 flex flex-col justify-end mb-3'>
            <div className='header-container mb-3 transition'>
                <h1 className='text-2xl md:text-3xl flex items-center'>{projects[pageNum].title} {projects[pageNum].inProd && <span className='text-sm bg-blue-500 rounded-2xl py-1 px-2 text-white ml-2'>LIVE</span>}</h1>
                <div className='header-underline h-1 w-10 rounded-lg bg-blue-500'></div>
            </div>
            <p className='py-2 mb-3 md:w-1/2 text-gray-600'>{projects[pageNum].description}</p>
            <ul className='tags flex'>{projects[pageNum].tags?.map(tag => {
                return (
                    <div className='h2 rounded-2xl bg-gray-200 px-4 py-1 mr-2 select-none'>{tag}</div>
                )
            })}</ul>
        </div>
    )
}

export default function Projects() {

    const [pageNumber, setPageNumber] = useState(0)

    const prevProject = () => {
        if (pageNumber != 0)
            setPageNumber(pageNumber - 1)
    }

    const nextProject = () => {
        if (pageNumber != projects.length - 1)
            setPageNumber(pageNumber + 1)
    }

    return (
        <div className='h-screen flex flex-col'>
            <Navbar active='projects' />

            <div className='flex flex-col flex-1 p-6 pb-12 md:px-36'>
                <div className='project-card min-h-full rounded-lg flex flex-col'>
                    {getProjectContent(pageNumber)}
                    <div className='projects-controls flex justify-between items-center'>
                        <div className={`${pageNumber < 1 && 'invisible'}`} onClick={() => prevProject()}><ChevronLeft className='text-blue-500 h-8 w-8' /></div>
                        <div className='page-dots flex justify-evenly'>
                            {projects.length > 1 && projects.map((proj, i) => {
                                return (
                                    <div className={`mx-1 h-3 w-3 rounded-2xl ${i == pageNumber ? 'bg-blue-500' : 'bg-gray-200'}`}></div>
                                )
                            })}
                        </div>
                        <div className={`${pageNumber == projects.length - 1 && 'invisible'}`} onClick={() => nextProject()}><ChevronRight className='text-blue-500 h-8 w-8' /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}