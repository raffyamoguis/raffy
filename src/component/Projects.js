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
                <p>Here are some projects I worked on recently.</p>
                <ul className="grid cs-style-2">
                    <li>
                        <figure>
                            <img src={pr1} alt="img02" />
                            <figcaption>
                                <h3>Digita</h3>
                                <span>Online Digital Shop</span>
                                <a className="visit" href="https://digitashop.netlify.app">Visit<i
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
                                <a className="visit" href="https://weeb-hub.netlify.app/">Visit<i
                                    className="bi bi-chevron-right is-5"></i></a>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src={pr3} alt="img06" />
                            <figcaption>
                                <h3>Lorem</h3>
                                <span></span>
                                <a className="visit" href="http://dribbble.com/shots/1118904-Game-Center">Visit<i
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
                                <a className="visit" href="http://dribbble.com/shots/1116775-Safari">Visit<i
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
                                <a className="visit" href="http://dribbble.com/shots/1117308-Phone">Visit<i
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
                                <a className="visit" href="http://dribbble.com/shots/1115632-Camera">Visit<i
                                    className="bi bi-chevron-right is-5"></i></a>
                            </figcaption>
                        </figure>
                    </li>
                </ul>
                <button className="btn rybtn rybtn-primary" type>View More on Github</button>
            </div>
        )
    }
}