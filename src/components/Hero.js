import React from 'react'

// Images
import Img from "../assets/Logo/transparent background files/output-onlinepngtools (2).png"

export default function Hero() {
    return (
        <header className="heroWrapper">
            <img className="heroImg" src={Img} alt='Eagle'></img>
            <p>Front End - Web and App Development - Worlwide Reach</p>
        </header>
    )
}
