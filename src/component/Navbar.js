import React, { useRef, useEffect } from 'react'
import '../css/custom.css'
import Brand from '../img/RAFFY.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const currentLocation = useLocation();
    const history = useNavigate();
    const navToggler = useRef(null);

    const iconHomeStyle = {
        fontSize: '30pt',
        color: '#6246ea',
    }

    const showCloseButton = () => {
        var menu = document.querySelector('.togglerI') // Using a class instead, see note below.
        menu.classList.toggle('bi-x-lg');
    }

    const resetToggler = () => {
        history('/');
    }

    useEffect(() => {
        //Close the toggler
        if (navToggler.current.classList.contains('show')) {
            navToggler.current.classList.toggle('show')
        }
    })

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
                            <ul className="navbar-nav float-end" onClick={resetToggler}>
                                <i style={iconHomeStyle} class="bi bi-x"></i>
                            </ul>
                        </div> :
                        <button onClick={showCloseButton} className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <i className='togglerI bi bi-list'></i>
                        </button>
                }
                <div className="collapse navbar-collapse" ref={navToggler} id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto">
                        {currentLocation.pathname === '/message' || currentLocation.pathname === '/success' ? '' : <Link to='/message'><button id='toggle-btn' className="btn btn-md rybtn rybtn-primary" >Message Me</button></Link>}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar