import { Navbar } from "../components/navbar";
import Image from 'next/image';
import { useState } from 'react';

import leftIcon from '../public/img/left.svg';
import rightIcon from '../public/img/right.svg';

// temp until api is setup
let projects = [
    {
        title: 'projects',
        description: 'I spent a lot of time designing this layout, but wasn\'t really a fan of the traditional grid layout for these types of pages. This is what I ended up coming up with. To check out some of the projects I have highlighted, click through the arrows at the bottom of the screen.'
    },
    {
        title: 'Bevvy',
        tags: ['UI/UX', 'Mobile'],
        description: '[WIP] an app to help you find happy hours near you. Currently in development!',
        github: false
    },
    {
        title: 'Splitgate Stat Tracker',
        tags: ['UI/UX', 'API', 'Public'],
        description: 'A super simple site that takes advantage of Splitgate\'s API to view player stats.',
        github: true
    },
    {
        title: 'Project #3',
        tags: ['UI/UX', 'API', 'Public'],
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore beatae ad consectetur eaque obcaecati cupiditate! Ad in ipsum eveniet, architecto earum labore, distinctio totam sint fuga expedita, aperiam dignissimos cupiditate.',
        github: true
    }
]


const getProjectContent = (pageNum) => {
    return (
        <div className='project-content flex-1 flex flex-col justify-end mb-3'>
            <div className='header-container mb-3'>
                <h1 className='text-2xl'>{projects[pageNum].title}</h1>
                <div className='header-underline h-1 w-10 rounded-lg bg-blue-500'></div>
            </div>
            <p className='py-2 mb-3'>{projects[pageNum].description}</p>
            <ul className='tags flex'>{projects[pageNum].tags?.map(tag => {
                return (
                    <div className='h2 rounded-2xl bg-gray-200 px-4 py-1 mr-2'>{tag}</div>
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
            <Navbar />

            <div className='flex flex-col flex-1 p-6'>
                <div className='project-card min-h-full p-6 pb-12 bg-gray-100 rounded-lg flex flex-col relative'>
                    {getProjectContent(pageNumber)}
                    <div className='projects-controls flex justify-between items-center'>
                        <div className={`${pageNumber < 1 && 'invisible'}`} onClick={() => prevProject()}><Image src={leftIcon} className='cursor-pointer'/></div>
                        <div className='page-dots flex justify-evenly'>
                            {projects.map((proj, i) => {
                                return (
                                    <div className={`mx-1 h-3 w-3 rounded-2xl ${i == pageNumber ? 'bg-blue-500' : 'bg-gray-200'}`}></div>
                                )
                            })}
                        </div>
                        <div className={`${pageNumber == projects.length - 1 && 'invisible'}`} onClick={() => nextProject()}><Image src={rightIcon} className='cursor-pointer'/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}