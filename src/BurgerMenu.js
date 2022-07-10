import React, { useState, useEffect } from 'react';
import './BurgerMenu.css';
import { NavHashLink } from 'react-router-hash-link';
import { Squash as Hamburger } from 'hamburger-react';


function BurgerMenu() {

    const [show, handleShow] = useState(false);

    const [isOpen, setOpen] = useState(false)

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

    useEffect(() => {
        window.addEventListener('resize', () => {
            setOpen(false);
        });
        return () => {
            window.removeEventListener('resize');
        }
    }, []);

    return (
        <div className={`burgerNavContainer ${show && "navContainerBlack"}`} >
            <Hamburger toggled={isOpen} toggle={setOpen}
                rounded={true}
            />
            {isOpen && (
                <div className="burgerMenuContainer">
                    <ul>
                        <li><NavHashLink smooth to="#home" className="burgerNavLink"
                            onClick={() => { setOpen(false) }}
                        >Home</NavHashLink></li>
                        <li><NavHashLink smooth to="#about" className="burgerNavLink"
                            onClick={() => { setOpen(false) }}
                        >About</NavHashLink></li>
                        <li><NavHashLink smooth to="#works" className="burgerNavLink"
                            onClick={() => { setOpen(false) }}
                        >Works</NavHashLink></li>
                        <li><NavHashLink smooth to="#skills" className="burgerNavLink"
                            onClick={() => { setOpen(false) }}
                        >Skills</NavHashLink></li>
                        <li><NavHashLink smooth to="#contact" className="burgerNavLink"
                            onClick={() => { setOpen(false) }}
                        >Contact</NavHashLink></li>
                    </ul>
                </div>
            )
            }
        </div>
    )
}

export default BurgerMenu;