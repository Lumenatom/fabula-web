import React, { useCallback, useState } from "react";
import './Feedback.css'


const Feedback = () => {
const[valueInput, setValueInput] = useState('')
const onSubmit = useCallback(() => {
    setValueInput('')
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
                                <input type="text" value={valueInput} onChange={(e)=>setValueInput(e.target.value)}/>
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