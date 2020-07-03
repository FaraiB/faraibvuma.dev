import React from 'react'

const Courses = () => {
    return (
        <div class='grid grid-cols-2'>
        <div className='bg-blue font-bold text-3xl rounded-lg shadow-lg border-t-8 border-yellow text-yellow px-4'>
            <h2>Cursos</h2>
        </div>
        <div className='rounded-lg shadow-lg text-white px-4'>
            <p className='font-bold'>Fullstack Master</p>
            <p>Devpleno</p>
            <p className='font-bold'>Installation, Storage, and Compute with Windows Server 2016</p>
            <p>BfBiz</p>
        </div>
        </div>
    )
}

export default Courses