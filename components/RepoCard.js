import { GitHub } from "react-feather"

export const RepoCard = ({ name, description, updated_at, language, html_url }) => {

    const updated_year = updated_at.slice(0, 4)

    return (
        <div className='card rounded-lg p-6 flex items-center justify-evenly border-2 border-gray-200 hover:border-blue-500 hover:shadow transition m-2'>
            <p className='m-2'>{updated_year}</p>
            <h1 className='text-xl text-blue-500 flex-1 m-2'>{name}</h1>
            <h2 className='text-lg text-gray-400 m-2'>{language}</h2>
            <a href={html_url} target="_blank"><GitHub className='text-gray-400 hover:text-blue-500 m-2' /></a>
        </div>
    )
}