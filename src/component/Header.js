import React from 'react'
import logo from '../img/2X2.jpg'
import '../css/scrollindicator.css'

const Header = () => {

    return (
        <>
            <div className="header text-center">
                <h1 className='f-b'>Designer, Full Stack Developer</h1>
                <h5>I design and code beautifully, I love what I do.</h5>

                <img src={logo} className="rounded-circle mt-4" alt="..." width="200" height="200" />
            </div>

            {/* Indicator Here */}

            <div className='text-center'>
                <a className="link" href="#">
                    <span className="link__arrow">
                        <span></span>
                        <span></span>
                    </span>
                    <span className="link__line"></span>
                    <span className="link__text">Scroll</span>
                </a>
            </div>


            <div className="intro container-fluid">
                <div className="p-5 a">
                    <h2 className='f-b' style={{ marginTop: '2em' }}>Hi I'm, Raffy. Nice to meet you.</h2>
                    <h5 className='intro-p' >A self taught developer, Ive done several projects that showcase my skills. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</h5>
                </div>
            </div>
        </>
    )
}

export default Header