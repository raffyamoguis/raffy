import React from 'react'
import Header from './Header'
import Intro from './Intro'
import Projects from './Projects'
import OngoingProjects from './OngoingProjects'
import Footer from './Footer'

const Home = () => {
    return (
        <>
            <Header />
            <Intro />
            <Projects />

            <div className="intro container-fluid">
                <div className="p-5">
                    <h2 className='mt-5'><b>Ongoing Projects</b></h2>
                    <p>Projects I currenntly working on.</p>
                </div>
            </div>

            <OngoingProjects />

            <div className="container-fluid text-center investing">
                <h2><b>Interested in collaborating or investing?</b></h2>
                <h2>I'm always open to discussing product design or work opportunities,
                    <a className='color-secondary' target='_blank' rel="noreferrer noopener" href='javascript:void(0)' onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=amoguisraffy1@gmail.com&su=*Subject&body=*How can I help you with')}> message me</a>
                </h2>
            </div>

            <Footer />
        </>
    )
}

export default Home
