import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactMe = () => {
    return(
        <p className='pt-6 px-4'>
            <a href='https://www.linkedin.com/in/faraibvuma/' title='Linkedin Profile'><FaLinkedin className='text-5xl inline-block mr-6 '/></a>
            <a href='https://github.com/FaraiB/' title='Github Profile'><FaGithub className='text-5xl inline-block'/></a>
            <br />
            <span className='text-white text-2xl inline-block mt-4'>faraibvuma@yahoo.co.uk</span>
        </p>
    )
}

export default ContactMe