import React from 'react'

const Intro = () => {
    return (
        <div className="over card">
            <div className="row justify-content-center">
                <div className="col-md mt-5">
                    <h1><i className="bi bi-tv ico"></i></h1>
                    <h3 className='f-b'>Front-end</h3>
                    <h5>I value simple content structure, and thoughtful interactions.</h5>
                    <h5 className="color-secondary">Front-end languages I know:</h5>
                    <p>HTML, CSS, Bootstrap</p>
                    <p>Javascript, Jquery, React.js</p>
                    <h5 className="color-secondary">Design Tools</h5>
                    <p>Framer</p>
                    <p>Adobe Photoshop</p>
                </div>
                <div className="col-md mt-5">
                    <h1><i className="bi bi-code-slash ico"></i></h1>
                    <h3 className='f-b'>Back-end</h3>
                    <h5>I like to code things from scratch, and enjoy bringing ideas to life.</h5>
                    <h5 className="color-secondary">Back-end languages I know:</h5>
                    <p>PHP, Laravel, Python, Node.js, Java</p>
                    <h5 className="color-secondary">Coding Tools</h5>
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