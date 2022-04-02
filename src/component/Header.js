import React from 'react'
import logo from '../img/2X2.jpg'

const Header = () => {

    return (
        <>
            <div className="header text-center">
                <h1 className='f-b'>Designer, Full Stack Developer</h1>
                <h5>I design and code beautifully, I love what I do.</h5>

                <img src={logo} className="rounded-circle mt-4" alt="..." width="200" height="200" />
            </div>

            <div className="intro container-fluid">
                <div className="p-5 a">
                    <h2 className='f-b' style={{ marginTop: '2em' }}>Hi I'm, Raffy. Nice to meet you.</h2>
                    <h5 className='intro-p' >Since my college days I always love to design and build applications, Ive done several projects that showcase my skills. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</h5>
                </div>
            </div>
        </>
    )
}

export default Header