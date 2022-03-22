import React from 'react'
import logo from '../img/2X2.jpg'
const Header = () => {
    return (
        <>
            <div className="header text-center">
                <h1>Designer, Full Stack Developer</h1>
                <h6>I design and code beautifully, I love what I do.</h6>

                <img src={logo} className="rounded-circle mt-4" alt="..." width="200" height="200" />
            </div>

            <div className="intro container-fluid">
                <div className="p-5">
                    <h2 className='mt-4'>Hi I'm, Raffy. Nice to meet you.</h2>
                    <p>I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p>
                </div>
            </div>
        </>
    )
}

export default Header