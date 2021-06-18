import React from 'react'

export default function Contact() {
    return (
        <section className="contactWrapper">
            <h2>Contact Me</h2>
            <div className="divider"></div>
            <input 
                id="contactInput" 
                type='text' 
                placeholder="Full Name">
            </input>
            <input 
                className="contactInput" 
                type='email' 
                placeholder="Email">
            </input>
            <input 
                className="contactInput" 
                type='tel' 
                placeholder="Phone Number">
            </input>
            <textarea 
                className="contactTextArea" 
                type='text' 
                placeholder="Message">
            </textarea>
            <button className="btn">Send</button>
        </section>
    )
}
