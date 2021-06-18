import React from 'react'

// Images
import Img from "../assets/Logo/transparent background files/output-onlinepngtools (2).png"

export default function Hero() {
    return (
        <header className="heroWrapper">
            {/* <div className="darkCover">sdagf</div> */}
            <img className="heroImg" src={Img} alt='Eagle'></img>
            {/* <h1>Ten Fingers</h1> */}
            <p>Front End - Web and App Development - Worlwide Reach</p>
        </header>
    )
}
