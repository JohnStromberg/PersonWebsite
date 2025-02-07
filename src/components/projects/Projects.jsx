import "./projects.css";
import React from "react";
import ProjectItem from "../projects/ProjectItem";
import farkle from "../../img/farkle.png";
import HC from "../../img/hillcipher.png";
import Gradient from "../../img/gradient.png";
import HuluFix from "../../img/hulufix.png";
import PersonWebsite from "../../img/personWebsite.png";
import Surfel from "../../img/surfel.png"

function Projects() {
    return (
            <div className="p">
                <hr className="p-div"/>
                <h1>My Personal Projects</h1>
                <div className="p-projectList">
                    <a href="https://github.com/JohnStromberg/farkleAI" target="_blank" style={{textDecoration:'none'}}>
                    <ProjectItem name="Farkle AI" image={farkle} desc="A fully functioning AI for the game Farkle. This was made in Java with JavaFX.
                    The AI uses expected value and trees to pick the best move." link="https://github.com/JohnStromberg/farkleAI"/>
                    </a>
                    <a href="https://github.com/JohnStromberg/Surfel-Rendering" target="_blank" style={{textDecoration:'none'}}>
                        <ProjectItem name="Surfel Rendering" image={Surfel} desc="Takes two 3D scan datasets and renders then using surfels.
                    This was build in WebGL." link="https://github.com/JohnStromberg/farkleAI"/>
                    </a>
                    <a href="https://github.com/Leomnz/hulufix" target="_blank" style={{textDecoration:'none'}}>
                        <ProjectItem name="HuluFix" image={HuluFix} desc="A FireFox Addon that fixes issues that are present in Hulu.com.
                     This was made in JavaScript." link="https://github.com/Leomnz/hulufix"/>
                    </a>
                    <a href="https://github.com/JohnStromberg/hill-cipher" target="_blank" style={{textDecoration:'none'}}>
                    <ProjectItem name="Hill Cipher" image={HC} desc="A working version of the Hill Cipher encrption algorithm.
                    This project was made in Python using the NumPy library." link="https://github.com/JohnStromberg/Hill-Cipher"/>
                    </a>
                    <a href="https://github.com/JohnStromberg/PersonalWebsite" target="_blank" style={{textDecoration:'none'}}>
                    <ProjectItem name="Person Website" image={PersonWebsite} desc="The source code for the website are you currently on!
                     This was made in React using JavaScript, CSS, and HTML." link="https://github.com/JohnStromberg/PersonalWebsite"/>
                    </a>
                    <a href="https://github.com/JohnStromberg/MinecraftGradientNameCreator" target="_blank" style={{textDecoration:'none'}}>
                        <ProjectItem name="Gradient Generator" image={Gradient} desc="This project uses unit vectors to determine hex values between two colors.
                     This project was made in React." link="https://github.com/JohnStromberg/MinecraftGradientNameCreator"/>
                    </a>
                </div>
        </div>
    )
}

export default Projects;