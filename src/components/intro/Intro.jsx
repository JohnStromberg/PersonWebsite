import "./intro.css";
import Me from "../../img/me.png"
import {useRef} from "react";
import React from "react";
import {AiOutlineMail, AiFillGithub, AiFillLinkedin} from "react-icons/ai"

const Intro = () => {
    const scollToRef = useRef();
    return (
      <div className="i-base">
        <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className="i-intro">Hello, my name is</h2>
            <h1 className="i-name">John Stromberg</h1>
            <div className="i-container">
              <div className="i-intro">I am a</div>
              <div className="i-title">
                <div className="i-title-wrapper">
                  <div className="i-title-item">Programmer</div>
                  <div className="i-title-item">Musician</div>
                  <div className="i-title-item">Tutor</div>
                </div>
              </div>
            </div>
              <div className="i-icon-holder">
                  <div className="i-icon-first">
                      <a href="mailto:jes65764@bethel.edu" target="_blank" className="c-info-item"><AiOutlineMail size={42}/><div className="c-inside"></div></a>
                  </div>
                  <div className="i-icon">
                      <a href="https://github.com/JohnStromberg" target="_blank" className="c-info-item"><AiFillGithub size={42}/><div className="c-inside"></div></a>
                  </div>
                  <div className="i-icon">
                      <a href="https://www.linkedin.com/in/j-stromberg/" target="_blank" className="c-info-item"><AiFillLinkedin size={42}/><div className="c-inside"></div></a>
                  </div>
              </div>
          </div>
        </div>
        <div className="i-right">
          <div className="i-bg"></div>
            <div className="i-bg2"></div>
            <div className="i-img-container">
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
      </div>
      </div>
  );
};

export default Intro;
