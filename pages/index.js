import React from 'react'
import PageHead from '../components/PageHead';
import Hero from '../components/Hero'
import Summary from '../components/Summary'
import Education from '../components/Education'
import Courses from '../components/Courses'
import Certifications from '../components/Certifications';
import Technology from '../components/Technology';
import Footer from '../components/Footer'
import Repos from '../components/Repos';

const Index = ({ repos, user}) => {
    //jsx
    return(
        <div className='container mx-auto px-4 '>
            
            <PageHead />
            <Hero />
            <Summary />
            <Education />
            <Courses />
            <Certifications />
            <Technology />
            <Repos user={user} repos={repos} /> 
            <Footer />            
        </div>
    )
}
export async function getServerSideProps(context){
    const request = await fetch(process.env.API_URL + '/api/getUser')
    const { repos, user } = await request.json()
    return{
        props:{
            currentDate: new Date().toString(),
            repos, 
            user
        }
    }
}
export default Index