import React from 'react'

const Technology = () => {
    return (
        <div class='grid grid-cols-2'>
        <div className='bg-blue font-bold text-3xl rounded-lg shadow-lg border-t-8 border-yellow text-yellow px-4'>
            <h2 >Tecnologias</h2>
        </div>
        <div class='grid grid-cols-4 py-4 gap-4 rounded-lg shadow-lg px-4' >
            <img src = '/images/nodejs.png' title='Node.js'/>
            <img src = '/images/javascript.png' title='JavaScript'/>
            <img src = '/images/sql.png' title='SQL Server'/>
            <img src = '/images/mysql.png' title='MySQL'/>
            <img src = '/images/mongo.png' title='MongoDB'/>
            <img src = '/images/html.png' title='HTML 5'/>
            <img src = '/images/css.png' title='CSS'/>
            <img src = '/images/bootstrap.png' title='Bootstrap'/>
        </div>
    </div>
    )
}

export default Technology