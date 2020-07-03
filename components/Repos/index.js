import React from 'react'
import Repo from './Repo'
import UserStats from './UserStats'

const Repos = ({user, repos}) => {
    return (
        <div class='grid grid-cols-2'>
        <div className='bg-blue rounded-lg shadow-lg border-t-8 border-yellow text-yellow px-4'>
            <h2 className='text-3xl font-bold'>Meus repositórios no GitHub</h2>
            <UserStats user={user}/>
        </div>        
        <div class='md:grid md:grid-cols-2 rounded-lg shadow-lg '>
        {repos.map(repo => {
        return(
            <Repo key={repo.id} repo={repo}/>
        )
    })}
    </div>
    </div>
    )
}

export default Repos