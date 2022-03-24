import React from 'react'
import emailjs from 'emailjs-com';
import send_email from '../img/send_email.png'
import '../css/Message.css'
import { useNavigate, Routes, Route } from 'react-router-dom';
import MessageSuccess from './MessageSuccess'

const Message = () => {
    const navigate = useNavigate();

    function sendMailSuccess() {
        navigate('/success');
    }

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
            'service_47ilz2g', 'template_oe9dhuv', e.target, 'EAKW3jryQd0IjFQPy'
        ).then(res => {
            console.log(res);
            sendMailSuccess();
        }).catch(err => {
            console.log(err)
        });
    }

    return (
        <>
            <div className='container'>
                <div className='img-send text-center'><img class='text-center' src={send_email}></img></div>

                <h1 className='text-center'><b>Thanks for reaching out, send me a mail?</b></h1>
                <form class="send-mail-form row mt-5" style={{ width: '60%', margin: 'auto' }} onSubmit={sendEmail}>
                    <div class="col-md-6 col-sm-6">
                        <input type="text" name='name' className="form-control shadow-none rounded-0" placeholder="Name" aria-label="Name"></input>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <input type="email" name='user_email' className="form-control shadow-none rounded-0" placeholder="Email" aria-label="Email"></input>
                    </div>
                    <div className="col-md-12 mt-4">
                        <textarea className="form-control shadow-none rounded-0" name='message' id="exampleFormControlTextarea1" rows="8"></textarea>
                    </div>
                    <button type='submit' className='btn btn-md rybtn rybtn-primary mt-4' style={{ width: '20%', margin: 'auto' }}>Submit</button>
                </form>

            </div>
        </>
    )
}

export default Message