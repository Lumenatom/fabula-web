import React from 'react'
import './Contact.css'

function Contact() {
    return(
        <div className='contact'>
            <div className='contact_wrapper'>
                <div className='container'>
                    <div className='contact_content'>
                        <h2>Fabula wait your message</h2>
                        <div className="contact_form">
                            <input className='contact_form_name' type='text' placeholder='Name'/>
                            <input className='contact_form_email' type='email' placeholder='E-mail'/>
                            <textarea className='contact_form_text' placeholder='Your message'></textarea>
                        </div>
                        <button className='contact_btn'>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact