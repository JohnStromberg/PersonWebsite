import  "./Navbar.css"
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import React, {useRef} from "react";
import Logo from "../../img/logo.png"

const Navbar = () => {
    const scollToRef = useRef();
    return (
        <div className="nav">
            <img src={Logo} alt="Python" className="icon"/>
            <li>
                <Link activeClass="active" smooth spy to="home">
                    Home
                </Link>
            </li>
            <li>
                <Link activeClass="active" smooth spy to="about">
                    About
                </Link>
            </li>
            <li>
                <Link activeClass="active" smooth spy to="projects">
                    Projects
                </Link>
            </li>
            <li>
                <Link activeClass="active" smooth spy to="contact">
                    Contact
                </Link>
            </li>
        </div>
    );
};

export default Navbar;