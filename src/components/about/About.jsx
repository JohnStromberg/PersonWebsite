import "./about.css"
import Drum from "../../img/drum.JPG"
import {useContext} from "react";
import {ThemeContext} from "../../context"
import Python from "../../img/python.png"
import Java from "../../img/java.png"
import JavaScript from "../../img/javascript.png"
import C from "../../img/c.png"
import Cplus from "../../img/c++.png"
import React from "../../img/react.png"
import SQL from "../../img/mysql.png"
import R from "../../img/r.png"
import GitHub from "../../img/github.png"
import CSharp from "../../img/CSharp.png"
import Resume from "../../files/JohnStrombergResume.pdf"

const About = () => {
    const theme = useContext(ThemeContext)
    return (
        <div>
            <div className="a-first">
                <hr className="a-div"/>
            </div>
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={Drum} alt="" className="a-image"/>
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me:</h1>
                <p className="a-sub">
                    Hello, my name is John Stromberg, I am a computer science student at Bethel University. I am from St. Paul Minnesota.
                </p>
                <p className="a-desc">
                    I am currently studying computer science with a mathematics minor. I am currently a computer science and math tutor at Bethel Univeristy and a clerical assistant from the registrar's office.
                    In my free time, I enjoy playing in the Bethel University Wind Symphony.
                </p>
                    <h1 className="a-title">My Skills:</h1>
                    <div className="a-container">
                        <img src={Python} alt="Python" className="a-icon"/>
                        <img src={Java} alt="Java" className="a-icon"/>
                        <img src={JavaScript} alt="Javascript" className="a-icon"/>
                        <img src={GitHub} alt="GitHub" className="a-icon"/>
                        <img src={SQL} alt="React" className="a-icon"/>
                    </div>
                    <div className="a-container">
                        <img src={C} alt="C" className="a-icon"/>
                        <img src={Cplus} alt="C++" className="a-icon"/>
                        <img src={CSharp} alt="GitHub" className="a-icon"/>
                        <img src={React} alt="React" className="a-icon"/>
                        <img src={R} alt="React" className="a-icon"/>
                    </div>
            </div>
        </div>
            <div className="a-credit">Photo by ON2 Percussion</div>
            <div className="a-bottom">
                <a href={Resume} download={Resume} className="a-link" style={{textDecoration:'none'}}><button className="a-button">Download My Resume</button></a>
                <section id="projects"/>
            </div>
        </div>
    )
}

export default About