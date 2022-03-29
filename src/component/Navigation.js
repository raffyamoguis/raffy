import React from 'react'
import avatar from '../img/avatar.jpg'

const Navigation = () => {
    return (
        <>
            <div className='navigation'>
                <img className='img rounded-circle' src={avatar} width="150" height='150' alt='profile'></img>
                <h2 className='navigation-brand'>RAFFY AMOGUIS</h2>
            </div>
            <nav class="nav flex-column justify-content-center">
                <a class="nav-link active" aria-current="page" href="#">Active</a>
                <a class="nav-link" href="#">Link</a>
                <a class="nav-link" href="#">Link</a>
                <a class="nav-link disabled">Disabled</a>
            </nav>
        </>
    )
}

export default Navigation