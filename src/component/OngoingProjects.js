import React from 'react'
import anisocial from '../img/weeb-hub.png'
import bikeshop from '../img/bikeshop.png'
import youtubed from '../img/youtubed.png'

const OngoingProjects = () => {
    return (
        <>
            <div className="over-on">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-lg-4">
                            <div class="card-box text-center p-5">
                                <img src={anisocial} />
                                <h3>Weeb Hub</h3>
                                <p class="text-secondary">A social media website for anime lovers it has features that is unique from other sites.</p>
                                <h6 className="card-subtitle mb-2 text-muted"><i className="bi bi-gear it-5"></i>In Development</h6>

                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4">
                            <div class="card-box text-center p-5">
                                <img src={bikeshop} width='66' height='66' />
                                <h3 className='mt-4'>BikeShop</h3>
                                <p class="text-secondary">An e-commerce bikeshop that has functionality an e-commerce website, login, cart, etc.</p>
                                <h6 className="card-subtitle mb-2 text-muted"><i className="bi bi-gear it-5"></i>In Development</h6>

                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4">
                            <div class="card-box text-center p-5">
                                <img src={youtubed} width='66' height='66' />
                                <h3 className='mt-4'>Youtube Downloader</h3>
                                <p class="text-secondary">A youtbe downloader web app built with youtube downloader api.</p>
                                <h6 className="card-subtitle mb-2 text-muted"><i className="bi bi-gear it-5"></i>In Development</h6>

                            </div>
                        </div>


                    </div>
                </div>
                {/* <div className="row row-cols-1 row-cols-md-3 g-4 mt-4 ongoing-projects">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Hello</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quas
                                    eaque at numquam possimus aperiam nihil,</p>
                                <h6 className="card-subtitle mb-2 text-muted"><i className="bi bi-gear it-5"></i>In Development</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Hello</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quas
                                    eaque at numquam possimus aperiam nihil,</p>
                                <h6 className="card-subtitle mb-2 text-muted"><i className="bi bi-gear it-5"></i>In Development</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Hello</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quas
                                    eaque at numquam possimus aperiam nihil,</p>
                                <h6 className="card-subtitle mb-2 text-muted"><i className="bi bi-gear it-5"></i>In Development</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Hello</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quas
                                    eaque at numquam possimus aperiam nihil,</p>
                                <h6 className="card-subtitle mb-2 text-muted"><i className="bi bi-gear it-5"></i>In Development</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Hello</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quas
                                    eaque at numquam possimus aperiam nihil,</p>
                                <h6 className="card-subtitle mb-2 text-muted"><i className="bi bi-gear it-5"></i>In Development</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Hello</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quas
                                    eaque at numquam possimus aperiam nihil,</p>
                                <h6 className="card-subtitle mb-2 text-muted"><i className="bi bi-gear it-5"></i>In Development</h6>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default OngoingProjects