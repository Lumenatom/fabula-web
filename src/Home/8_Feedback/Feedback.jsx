import axios from "axios";
import React, { useCallback, useState } from "react";
import './Feedback.css'
import validator from 'validator'



const Feedback = () => {

const [valueInput, setValueInput] = useState('')
const [emailError, setEmailError] = useState('')


const onSubmit = useCallback(() => {
  if (validator.isEmail(valueInput)) {
    setEmailError('')
    axios.post('https://sheetdb.io/api/v1/jt7dj10m6oh29', {Email: valueInput});
    setValueInput('')
  } else {
    setEmailError('Enter valid Email!')
  }
})

    return(
        <div className='feedback'>
            <div className='feedback_wrapper'>
                <div className='container'>
                    <div className='feedback_content'>
                    <h2 className="title_comunity">Make fabula your home</h2>
                    <div className="wraper_blocks_feedback">
                        <div className="left_block_feedback">
                            <div className="left_block_content_feedback">
                                <h4>Sign up and Start Exploring Today</h4>
                                <input type="text" value={valueInput} onChange={(e)=>{setValueInput(e.target.value)}}/>
                                <span style={{
                                fontWeight: '400',
                                color: 'white',
                                }}>{emailError}</span>
                                <p>Enter your e-mail for updates about Fabula, future play test and more!</p>
                                <button onClick={onSubmit}>
                                Sign Up
                                </button>                                                     
                             </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feedback;