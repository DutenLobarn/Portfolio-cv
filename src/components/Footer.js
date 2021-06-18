import React from 'react'

// Images
import fbImg from "../assets/fb.png";

export default function Footer() {
    return (
        <footer>
            <h2>Location</h2>
            <div className="divider"></div>
            <p>Koppargården 33B</p>
            <p>261 43, Landskrona</p>
            <p>Sweden</p>
            {/* <div> */}
                <h3>Social Media</h3>
                <div className="divider"></div>
                <a href="https://www.facebook.com/mandus.lindstrom" target="_blank" rel="noreferrer">
                    <img className="skillsImg" src={fbImg} alt='fbImg'></img>
                </a>
            {/* </div> */}
            <p className="copyWright">Copyright © Ten Fingers 2021</p>
        </footer>
    )
}