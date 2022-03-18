import React from 'react'
import logo from '../img/logo-1.png'
const Header = () => {
    return (
        <>
            <div className="header text-center">
                <h1 className="f-b">Designer, Full Stack Developer</h1>
                <h6>I design and code beautifully, I love what I do.</h6>

                <img src={logo} className="rounded-circle mt-4" alt="..." width="204" height="200" />
            </div>

            <div className="intro container-fluid">
                <div className="p-5">
                    <h2 className="f-b">Hi I'm, Raffy. Nice to meet you.</h2>
                    <p>I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p>
                </div>
            </div>
        </>
    )
}

export default Header