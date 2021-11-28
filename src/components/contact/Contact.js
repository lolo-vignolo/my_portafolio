import React, { useState } from 'react';
import "./contact.scss";


export const Contact = () => {

    const [message, setmessage] = useState(false)


    const handleSubmit = (event) =>{
       event.preventDefault() 
       setmessage(true)
    }

    return (
        <div className = "contact" id="contact">
            <div className = "left">
                <img src="assets/deals.jpg" />

            </div>
            <div className = "right">
            <h2> Contact me:</h2>
                <form onSubmit = {handleSubmit}>
                    <input
                    type= "text"
                    placeholder = "Email"
                     />
                    <textarea placeholder = "Message"> </textarea>
                    <button
                    className = "btn btn-success"
                    type="submit"
                    >Send</button>
                    {message && <spa> Thank you for your message, I will reply you soon :)</spa> }
                </form>
                </div>
            
        </div>
    )
}
