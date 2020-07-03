import React from 'react'

const Certifications = () => {
    return(
        <div class='grid grid-cols-2'>
        <div className='bg-blue font-bold text-3xl rounded-lg shadow-lg border-t-8 border-yellow text-yellow px-4'>
            <h2>Certificações</h2>
        </div>
        <div className='rounded-lg shadow-lg text-white px-4'>
            <p>SCRUM Fundamentals Certified (SFC)</p>
            <p>Microsoft Certified Professional – Querying Microsoft SQL Server 2012/2014</p>
        </div>
        </div>
    )
}

export default Certifications