import React from 'react'
import { Link } from 'react-router-dom'

const MessageSuccess = () => {
    const container = {
        position: 'relative'
    }
    const child = {
        marginTop: '14em'
    }
    const iconStyle = {
        fontSize: '50pt',
        color: '#6246ea'
    }
    return (
        <div className='container' style={container}>
            <div className='text-center' style={child}>
                {/* <img className='img' src={{ receive }}></img> */}
                <i className="bi bi-check-circle-fill" style={iconStyle}></i>
                <h1>Message Receive. Thanks!</h1>
                <h5>I'll be in touch with you shortly</h5>
                <Link to='/'><button className='btn rybtn rybtn-primary mt-4'>Back to home</button></Link>
            </div>
        </div>
    )
}

export default MessageSuccess