import React from 'react'

// Import redux
import { useDispatch, 
    useSelector
} from 'react-redux';

import { 
    fromValueAction, 
    guestNameValueAction, 
    phoneNumberValueAction, 
    textValueAction 
} from '../action/action';  

export default function Contact() {

     // redux dispatch
    const dispatch = useDispatch();

    // functioner dispatch
    function handleFromValueReducer(e) {dispatch(fromValueAction(e.target.value))};
    function handlGuestNameValueReducer(e) {dispatch(guestNameValueAction(e.target.value))};
    function handlePhoneNumberValueReducer(e) {dispatch(phoneNumberValueAction(e.target.value))};
    function handleTextValueReducer(e) {dispatch(textValueAction(e.target.value))};

     // redux useSelector
    const fromValueReducer = useSelector(state => state.fromValueReducer);
    const guestNameValueReducer = useSelector(state => state.guestNameValueReducer);
    const phoneNumberValueReducer = useSelector(state => state.phoneNumberValueReducer);
    const textValueReducer = useSelector(state => state.textValueReducer);
    
    let data = {from: fromValueReducer, subject: guestNameValueReducer, phone: phoneNumberValueReducer, html: textValueReducer }

    const sendEmail = () =>{
    fetch('http://localhost:5000/email', {method: 'POST',headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data) })
    .then(function(response) {
    if(response.ok) {
        console.log('Email was sent.');
        return;
    }
    throw new Error('Request failed.');
    })
    .catch(function(error) {
        console.log(error);
    });
    }

    return (
        <section className="contactWrapper" id="contact">
            <h2>Contact Me</h2>
            <div className="divider"></div>
            <input 
                id="contactInput" 
                type='text' 
                onChange={handlGuestNameValueReducer}
                placeholder="Full Name"
                >
            </input>
            <input 
                className="contactInput" 
                type='email' 
                onChange={handleFromValueReducer}
                placeholder="Email"
                >
            </input>
            <input 
                className="contactInput" 
                type='tel' 
                onChange={handlePhoneNumberValueReducer}
                placeholder="Phone Number"
                >
            </input>
            <textarea 
                className="contactTextArea" 
                type='text' 
                onChange={handleTextValueReducer}
                placeholder="Message"
                >
            </textarea>
            <button className="btn" 
            onClick={sendEmail}
            >Send</button>
        </section>
    )
}
