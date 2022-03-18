import React from 'react'

const Footer = () => {
    return (
        <div className="container-fluid footer mt-5">
            <div className="p-5">
                <h1 className="mt-5">Living, learning & leveling up one day at a time</h1>

                <div className="icons-social">
                    <a href='https://web.facebook.com/profile.php?id=100014803868808' className="btn ico-footer shadow-none rounded-circle mt-5"><i className="bi bi-facebook"></i></a>
                    <a href='https://twitter.com/ryzon_du' className="btn ico-footer shadow-none rounded-circle mt-5"><i className="bi bi-twitter"></i></a>
                    <a href='https://github.com/raffyamoguis' className="btn ico-footer shadow-none rounded-circle mt-5"><i className="bi bi-github"></i></a>
                    <a className="btn ico-footer shadow-none rounded-circle mt-5"><i className="bi bi-envelope"></i></a>
                </div>

                <h4 className="mt-5">Handcrafted by Me</h4>
                <h4 className="mt-4">Made with <i className="bi bi-bootstrap"></i> </h4>


            </div>
        </div>
    )
}

export default Footer