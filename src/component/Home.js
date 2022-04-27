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

            <div className="intro-ongoing container-fluid">
                <div className="p-5">
                    <h2 className='f-b' style={{ marginTop: '3em' }}>Ongoing Projects</h2>
                    <h5>Projects I currenntly working on.</h5>
                </div>
            </div>

            <OngoingProjects />

            <div className="container-fluid text-center investing">
                <h2 className='f-b'>Interested in collaborating or investing?</h2>
                <h3>I'm always open to discussing product design or work opportunities,
                    <a className='color-secondary' target='_blank' rel="noreferrer noopener" href='javascript:void(0)' onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=amoguisraffy1@gmail.com&su=*Subject&body=*How can I help you with')}> message me</a>
                </h3>
            </div>

            <Footer />
        </>
    )
}

export default Home
