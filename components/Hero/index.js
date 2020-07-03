import React from 'react'
import ContactMe from './ContactMe'

const Hero = () => {
    return(
        <div className="md:grid md:grid-cols-2 leading-none">
        <div className='bg-blue rounded-lg shadow-lg pt-4'><img src = '/images/profile.png'/></div>
        <div>
            <h1 className='text-white bold text-4xl pt-4 px-4'>Olá, sou o Farai Bvuma</h1>
            <h2 className='text-white font  text-1xl uppercase px-4'>Desenvolvedor Fullstack</h2>
            <ContactMe />
        </div>
    </div>
    )

}
export default Hero