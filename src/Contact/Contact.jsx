import React from 'react';
import { useState } from 'react';
import './Contact.css';
import validator from 'validator';
import axios from 'axios';

function Contact() {
  const [valueName, setValueName] = useState('');
  const [valueEmail, setValueEmail] = useState('');
  const [valueMessage, setValueMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = () => {
    if (validator.isEmail(valueEmail)) {
      setEmailError('');
      axios.post('https://sheetdb.io/api/v1/bxj20ht5ecko3', {
        Name: valueName,
        Email: valueEmail,
        Message: valueMessage,
      });
      setValueName('');
      setValueEmail('');
      setValueMessage('');
    } else {
      setEmailError('Enter valid Email!');
    }
  };
  return (
    <div className="contact">
      <div className="contact_wrapper">
        <div className="container">
          <div className="contact_content">
            <h2>Fabula wait your message</h2>
            <div className="contact_form">
              <input
                value={valueName}
                onChange={(e) => setValueName(e.target.value)}
                className="contact_form_name"
                type="text"
                placeholder="Name"
              />
              <input
                value={valueEmail}
                onChange={(e) => setValueEmail(e.target.value)}
                className="contact_form_email"
                type="email"
                placeholder="E-mail"
              />
              <span
                style={{
                  fontWeight: '400',
                  color: 'white',
                }}
              >
                {emailError}
              </span>
              <textarea
                value={valueMessage}
                onChange={(e) => setValueMessage(e.target.value)}
                className="contact_form_text"
                placeholder="Your message"
              ></textarea>
            </div>
            <button onClick={handleSubmit} className="contact_btn">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
