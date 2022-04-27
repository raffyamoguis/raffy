import React from 'react'
import { AiOutlineLaptop } from 'react-icons/ai'
import { RiCodeSSlashFill } from 'react-icons/ri'
const Intro = () => {
    return (
        <div className="over card">
            <div className="row justify-content-center">
                <div className="col-md mt-5">
                    <h1>< AiOutlineLaptop className='ico' /></h1>
                    <h3 className='mt-3'><b />Front-end</h3>
                    <h5 className='mt-2'>I value simple content structure, and thoughtful interactions.</h5>
                    <h5 className="color-secondary mt-4">Front-end languages I know:</h5>
                    <p>HTML, CSS, Bootstrap</p>
                    <p>Javascript, Jquery, React.js</p>
                    <h5 className="color-secondary mt-4">Design Tools</h5>
                    <p>Framer</p>
                    <p>Adobe Photoshop</p>
                </div>
                <div className="col-md mt-5">
                    <h1><RiCodeSSlashFill className='ico' /></h1>
                    <h3 className='mt-3'> <b />Back-end</h3>
                    <h5 className='mt-2'>I like to code things from scratch, and enjoy bringing ideas to life.</h5>
                    <h5 className="color-secondary mt-4">Back-end languages I know:</h5>
                    <p>PHP, Laravel, Python, Node.js, Java</p>
                    <h5 className="color-secondary mt-4">Coding Tools</h5>
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