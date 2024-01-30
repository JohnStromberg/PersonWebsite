import  "./Navbar.css"
import { Link } from 'react-scroll'
import React from "react";
import Logo from "../../img/logo.png"

const Navbar = () => {
    return (
        <div className="nav">
            <img src={Logo} alt="Logo" className="icon"/>
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