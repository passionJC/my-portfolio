import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { NavHashLink } from 'react-router-hash-link';
import BurgerMenu from './BurgerMenu';


function Navbar() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);


    return (
        <div className={`navContainer ${show && "navContainerBlack"}`} >
            <div className="burgerMenu">
                <BurgerMenu />
            </div>

            <ul className="navMenu">
                <li><NavHashLink smooth to="#home" className="navLink" >Home</NavHashLink></li>
                <li><NavHashLink smooth to="#about" className="navLink" >About</NavHashLink></li>
                <li><NavHashLink smooth to="#works" className="navLink" >Works</NavHashLink></li>
                <li><NavHashLink smooth to="#skills" className="navLink" >Skills</NavHashLink></li>
                <li><NavHashLink smooth to="#contact" className="navLink" >Contact</NavHashLink></li>
            </ul>
        </div>
    )
}

export default Navbar;