import React from 'react'

const Intro = () => {
    return (
        <div className="over card">
            <div className="row justify-content-center">
                <div className="col-md mt-5">
                    <h1><i className="bi bi-tv ico"></i></h1>
                    <h2>Front-end</h2>
                    <p>I value simple content structure, and thoughtful interactions.</p>
                    <h6 className="color-secondary">Front-end languages I know:</h6>
                    <p>HTML, CSS, Bootstrap</p>
                    <p>Javascript, Jquery, React.js</p>
                    <h6 className="color-secondary">Design Tools</h6>
                    <p>Framer</p>
                    <p>Adobe Photoshop</p>
                </div>
                <div className="col-md mt-5">
                    <h1><i className="bi bi-code-slash ico"></i></h1>
                    <h2>Back-end</h2>
                    <p>I like to code things from scratch, and enjoy bringing ideas to life.</p>
                    <h6 className="color-secondary">Back-end languages I know:</h6>
                    <p>PHP, Laravel, Python, Node.js, Java</p>
                    <h6 className="color-secondary">Coding Tools</h6>
                    <p>VS Code</p>
                    <p>Sublime Text</p>
                    <p>Github</p>
                    <p>Terminal</p>
                    <p>Postman</p>
                </div>
            </div>
        </div>
    )
}

export default Intro