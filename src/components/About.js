import React from 'react'

// Images
import linkedinImg from "../assets/linkedin.png";
import cvImg from "../assets/cvImg.svg";
import githubImg from "../assets/github.png";
// PDF cv
import cv from "../assets/cv.pdf";

export default function About() {
    return (
        <article className="aboutWrapper">
            <h2 className="aboutH2">About</h2>
            <div className="divider"></div>
            <p className="aboutP">Hello, I´m Mandus Lindström born year 1985 in Örnsköldsvik, Sweden.</p>
            <p className="aboutP">I am a Front End student and i am looking for work opportunities.</p>
            <p className="aboutP">I have a big passion for coding and especially to get the coding result in a fast and understandable way, both for my peers and future Mandus Lindström. The most difficult coding problems i think is the most fun.</p>
            <p className="aboutP"> One day I will be happy to call me a fullstack developer. Right now I am enjoying coding with JS and React very much, my Back End skills need improvments... With that said i do not have anything against learning new skills, but for now i am focused on deepening my skillset.</p>
            <div className="aboutLinkContainer">
                <a href="https://www.linkedin.com/in/mandus-lindstr%C3%B6m-3b2971136/" target="_blank"  rel="noreferrer">
                    <img className="skillsImg1" src={linkedinImg} alt='linkedinImg'></img>
                </a>

                <a href={cv} target="_blank" rel="noreferrer">
                    <img className="skillsImg1" src={cvImg} alt='cvImg'></img>
                </a>

                <a href="https://github.com/DutenLobarn" target="_blank" rel="noreferrer">
                    <img className="skillsImg3" src={githubImg} alt='githubImg'></img>
                </a>
            </div>
        </article>
    )
}
