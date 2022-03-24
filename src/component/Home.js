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
                <h2>I'm always open to discussing product design or work opportunities</h2>
                <button className="btn rybtn rybtn-primary mt-5" type>View More on Github</button>
            </div>

            <Footer />
        </>
    )
}

export default Home