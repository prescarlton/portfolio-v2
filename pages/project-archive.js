import useSWR from "swr";
import { Navbar } from "../components/navbar";
import { RepoCard } from "../components/RepoCard";
import Link from 'next/link'
import { ArrowLeft } from "react-feather";

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function ProjectArchive() {
    const { data, error } = useSWR('https://api.github.com/users/prescarlton/repos', fetcher);
    if (!data) return <h1>Loading...</h1>;
    console.log(data)
    return (
        <div className='h-screen flex flex-col'>
            <Navbar active='projects' />
            <div className='flex flex-col flex-1 p-6 pb-12 md:px-36 items-stretch'>
                <div className='header-container mb-3'>
                    <h1 className='text-4xl mb-1 font-black'>project archive</h1>
                    <div className='header-underline h-2 w-10 rounded-lg bg-blue-500'></div>
                </div>
                {data.message ? (<h2>Hey! You hit the GitHub API limit! Chill out before they send people after me</h2>) : data.map(repo => {
                    return (
                        <RepoCard {...repo} key={repo.id} />
                    )
                })}
            </div>
        </div>
    )
}