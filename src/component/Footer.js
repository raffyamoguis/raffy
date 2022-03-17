import React from 'react'

const Footer = () => {
    return (
        <div className="container-fluid footer mt-5">
            <div className="p-5">
                <h1 className="mt-5">Living, learning & leveling up one day at a time</h1>

                <div className="icons-social">
                    <button className="btn ico-footer rounded-circle mt-5" type><i className="bi bi-facebook"></i></button>
                    <button className="btn ico-footer rounded-circle mt-5" type><i className="bi bi-twitter"></i></button>
                    <button className="btn ico-footer rounded-circle mt-5" type><i className="bi bi-github"></i></button>
                    <button className="btn ico-footer rounded-circle mt-5" type><i className="bi bi-envelope"></i></button>
                </div>

                <h4 className="mt-5">Handcrafted by Me</h4>
                <h4 className="mt-4">Made with <i className="bi bi-bootstrap"></i></h4>


            </div>
        </div>
    )
}

export default Footer