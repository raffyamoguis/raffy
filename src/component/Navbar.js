import React from 'react'
import Brand from '../img/RAFFY.png'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const currentLocation = useLocation();

    const iconHomeStyle = {
        fontSize: '30pt',
        color: '#6246ea',
    }

    return (
        <nav className={`navbar ${currentLocation.pathname === '/message' || currentLocation.pathname === '/success' ? ' navbar-toggleable-xl' : ' navbar-expand-lg'} py-4`}>
            <div className="container">
                <Link to='/'>
                    <a className="navbar-brand">
                        <img src={Brand} alt="" class="rounded-circle" width="60" height="60" />
                    </a>
                </Link>
                {
                    currentLocation.pathname === '/message' || currentLocation.pathname === '/success' ?
                        <div className=''>
                            <ul className="navbar-nav float-end">
                                <Link to='/'><i style={iconHomeStyle} class="bi bi-x"></i></Link>
                            </ul>
                        </div> :
                        <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            {/* <!-- <span class="navbar-toggler-icon"></span> --> */}
                            <i className="bi bi-list"></i>
                        </button>
                }
                {/* <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                     <!-- <span class="navbar-toggler-icon"></span> --> 
                    <i className="bi bi-list"></i>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto">
                        {currentLocation.pathname === '/message' || currentLocation.pathname === '/success' ? '' : <Link to='/message'><button id='toggle-btn' className="btn btn-md rybtn rybtn-primary" >Message Me</button></Link>}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar