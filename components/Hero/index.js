import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Hero = () => {
    return(
        <div className="md:grid md:grid-cols-2 leading-none">
        <div className='bg-blue rounded-lg shadow-lg pt-4'><img src = '/images/profile.png'/></div>
        <div>
            <h1 className='text-white bold text-4xl pt-4 px-4'>Olá, sou o Farai Bvuma</h1>
            <h2 className='text-white font  text-1xl uppercase px-4'>Desenvolvedor Fullstack</h2>
            
                <p className='pt-6 px-4'>
                    <a href='https://www.linkedin.com/in/faraibvuma/' title='Linkedin Profile'><FaLinkedin className='text-5xl inline-block mr-6 '/></a>
                    <a href='https://github.com/FaraiB/' title='Github Profile'><FaGithub className='text-5xl inline-block'/></a>
                    <br />
                <span className='text-white text-2xl inline-block mt-4'>faraibvuma@yahoo.co.uk</span>
                </p>
        </div>
    </div>
    )

}
export default Hero