import React from 'react'
import '../css/Projects.css'
import pr1 from '../img/pr-1.png'
import pr2 from '../img/pr-2.png'
import pr3 from '../img/pr-3.png'
import pr4 from '../img/pr-4.jpg'
import pr5 from '../img/pr-5.jpg'
import pr6 from '../img/pr-6.jpg'

export default class Header extends React.Component {
    render() {
        return (
            <div className="container-fluid recent-work text-center">
                <h2 className="f-b">My Recent Work</h2>
                <h5>Here are some projects I worked on recently.</h5>
                <ul className="grid cs-style-1">
                    <li>
                        <figure >
                            <img src={pr1} alt="img02" />
                            <figcaption>
                                <h3>Digita</h3>
                                <span>Online Digital Shop</span>
                                <a className="visit" href="https://digitashop.netlify.app" target='_blank' rel="noreferrer noopener">Visit Website<i
                                    className="bi bi-chevron-right is-5"></i></a>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src={pr2} alt="img04" />
                            <figcaption>
                                <h3>Weeb Hub</h3>
                                <span>A social site for anime lovers</span>
                                <a className="visit" href="https://weeb-hub.netlify.app/" target='_blank' rel="noreferrer noopener">Visit Website<i
                                    className="bi bi-chevron-right is-5"></i></a>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src={pr3} alt="img06" />
                            <figcaption>
                                <h3>Gamer Profile</h3>
                                <span>Gamer profile landing page.</span>
                                <a className="visit" href='https://gamer-landing.vercel.app' target='_blank' rel="noreferrer noopener">Visit Website<i
                                    className="bi bi-chevron-right is-5"></i></a>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src={pr4} alt="img05" />
                            <figcaption>
                                <h3>Lorem</h3>
                                <span></span>
                                <a className="visit" href target='_blank' rel="noreferrer noopener">Visit Website<i
                                    className="bi bi-chevron-right is-5"></i></a>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src={pr5} alt="img03" />
                            <figcaption>
                                <h3>Lorem</h3>
                                <span></span>
                                <a className="visit" href target='_blank' rel="noreferrer noopener">Visit Website<i
                                    className="bi bi-chevron-right is-5"></i></a>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src={pr6} alt="img01" />
                            <figcaption>
                                <h3>Lorem</h3>
                                <span></span>
                                <a className="visit" href target='_blank' rel="noreferrer noopener">Visit Website<i
                                    className="bi bi-chevron-right is-5"></i></a>
                            </figcaption>
                        </figure>
                    </li>
                </ul>
                <a className="btn rybtn rybtn-primary" href='https://github.com/raffyamoguis' target='_blank' rel="noreferrer noopener">View More on Github</a>
            </div>

            // <div class="row row-cols-1 row-cols-md-2 g-4">
            //     <div class="col">
            //         <div class="card">
            //             <img src="..." class="card-img-top" alt="..." />
            //             <div class="card-body">
            //                 <h5 class="card-title">Card title</h5>
            //                 <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            //             </div>
            //         </div>
            //     </div>
            //     <div class="col">
            //         <div class="card">
            //             <img src="..." class="card-img-top" alt="..." />
            //             <div class="card-body">
            //                 <h5 class="card-title">Card title</h5>
            //                 <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            //             </div>
            //         </div>
            //     </div>
            //     <div class="col">
            //         <div class="card">
            //             <img src="..." class="card-img-top" alt="..." />
            //             <div class="card-body">
            //                 <h5 class="card-title">Card title</h5>
            //                 <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            //             </div>
            //         </div>
            //     </div>
            //     <div class="col">
            //         <div class="card">
            //             <img src="..." class="card-img-top" alt="..." />
            //             <div class="card-body">
            //                 <h5 class="card-title">Card title</h5>
            //                 <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        )
    }
}