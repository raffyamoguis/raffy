import React from 'react'
import '../css/custom.css'
import Brand from '../img/RAFFY.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg py-4">
            <div className="container">
                <a className="navbar-brand" href>
                    <img src={Brand} alt="" class="rounded-circle" width="60" height="60" />
                </a>
                <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <!-- <span class="navbar-toggler-icon"></span> --> */}
                    <i className="bi bi-list"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto">
                        <button id='toggle-btn' className="btn btn-md rybtn rybtn-primary" type>Say Hello</button>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar