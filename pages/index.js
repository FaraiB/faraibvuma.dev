import React from 'react'
import getUser from '../utils/getUser'


import PageHead from '../components/PageHead';
import Hero from '../components/Hero'

const Index = ({ repos, user}) => {
    //jsx
    return(
        <div className='container mx-auto px-4 '>
            
            <PageHead />
            <Hero />
 
            <div class='grid grid-cols-2'>
                <div className='bg-blue font-bold text-3xl rounded-lg shadow-lg border-t-8 border-yellow text-yellow px-4'>
                    <h2 >Sobre</h2>
                </div>
                <div className='rounded-lg shadow-lg text-white px-4'>
                    <p>Formado em sistemas de informação, tenho experiencia fazendo suporte bilingue aos aplicações.
                    Procurando recolocação como desenvolvedor Fullstack </p>
                </div>
            </div>
            <div class='grid grid-cols-2'>
                <div className='bg-blue font-bold text-3xl rounded-lg shadow-lg border-t-8 border-yellow text-yellow px-4'>
                    <h2 >Educação</h2>
                </div>
                <div className='rounded-lg shadow-lg text-white px-4'>
                    <p className='font-bold'>Comuputing and Information Systems</p>
                    <p >Univesity of London International Programmes</p>
                </div>
            </div>
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
            <div class='grid grid-cols-2'>
                <div className='bg-blue font-bold text-3xl rounded-lg shadow-lg border-t-8 border-yellow text-yellow px-4'>
                    <h2>Certificações</h2>
                </div>
                <div className='rounded-lg shadow-lg text-white px-4'>
                    <p>SCRUM Fundamentals Certified (SFC)</p>
                    <p>Microsoft Certified Professional – Querying Microsoft SQL Server 2012/2014</p>
                </div>
                </div>

            <div class='grid grid-cols-2'>
                <div className='bg-blue font-bold text-3xl rounded-lg shadow-lg border-t-8 border-yellow text-yellow px-4'>
                    <h2 >Technologias</h2>
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
            <div class='grid grid-cols-2'>
                <div className='bg-blue rounded-lg shadow-lg border-t-8 border-yellow text-yellow px-4'>
                    <h2 className='text-3xl font-bold'>Meus repositórios no GitHub</h2>
                    <p  className='text-white' >Github stats: public repos: {user.public_repos} / public_gists: {user.public_gists} / followers: {user.followers} </p>
                </div>        
            <div class='md:grid md:grid-cols-2 rounded-lg shadow-lg '>
            {repos.map(repo => {
                return(
                    <div key={repo.id} className='rounded bg-gray-200 mx-8 my-4 p-4 hover:shadow-md'>
                        <h3 className='font-bold hover:underline'><a href={'https://github.com/' + repo.full_name}>{repo.full_name}</a></h3>
                        <p>Language: {repo.language} /Stars: {repo.stargazers_count}</p>
                    </div>
                )
            })}
            </div>
            </div>

            <div>
           
            <p className='text-center border-t-2 rounded bg-white'>
            Esse site foi desenvolvido utilizando NextJS, TailwindCSS, PurgeCSS e Vercel como plataforma.<br />
            O código fonte pode ser encontrado no site:<br />
            <a href='https://github.com/FaraiB/faraibvuma.dev'>https://github.com/FaraiB/faraibvuma.dev</a>
            </p>
            </div>
        </div>
    )
}
export async function getServerSideProps(context){
    const { repos, user } = await getUser('faraib')
    return{
        props:{
            currentDate: new Date().toString(),
            repos, 
            user
        }
    }
}
export default Index