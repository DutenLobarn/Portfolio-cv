import React from 'react'

// Images
import htmlImg from "../assets/html.png";
import cssImg from "../assets/css.png";
import sassImg from "../assets/sass.png";
import jsImg from "../assets/js.png";
import reactImg from "../assets/react.png";
import reduxImg from "../assets/redux.png";
import nodejsImg from "../assets/nodejs.png";
import expressImg from "../assets/express.png";
import mongodbImg from "../assets/mongodb.png";
import mongooseImg from "../assets/mongoose.png";
import figmaImg from "../assets/figma.png";

export default function Skills() {
    return (
        <div className="skillsbgcolor" id="skills">
            <h2 className='skillsH2'>Skills</h2>

            <div className="divider"></div>

            <section className='skillsImgWrapper'>
                <div className="skillsImgContainer">
                    <img className="skillsImg" src={htmlImg} alt='htmlImg'></img>
                </div>
                <div className="skillsImgContainer">
                    <img className="skillsImg" src={cssImg} alt='cssImg'></img>
                </div>
                <div className="skillsImgContainer">
                    <img className="skillsImg" src={sassImg} alt='sassImg'></img>
                </div>
                <div className="skillsImgContainer">
                    <img className="skillsImg" src={jsImg} alt='jsImg'></img>
                </div>
                <div className="skillsImgContainer">
                    <img className="skillsImg" src={reactImg} alt='reactImg'></img>
                </div>
                <div className="skillsImgContainer">
                    <img className="skillsImg" src={reduxImg} alt='reduxImg'></img>
                </div>
                <div className="skillsImgContainer">
                    <img className="skillsImg" src={nodejsImg} alt='nodejsImg'></img>
                </div>
                <div className="skillsImgContainer">
                    <img className="skillsImg" src={expressImg} alt='expressImg'></img>
                </div>
                <div className="skillsImgContainer">
                    <img className="skillsImg" src={mongodbImg} alt='mongodbImg'></img>
                </div>
                <div className="skillsImgContainer">
                    <img className="skillsImg" src={mongooseImg} alt='mongooseImg'></img>
                </div>
                <div className="skillsImgContainer">
                    <img className="skillsImg" src={figmaImg} alt='figmaImg'></img>
                </div>
            </section>
        </div>
    )
}