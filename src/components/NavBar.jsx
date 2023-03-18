import React, { useState } from "react";
import { Link } from "react-scroll";
import "../styles/navbar.css";
import cv from '../assests/CV-MARIAN GARCIA-FSD.pdf'

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 60) {
        setColor(true);
        } else {
        setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);

    return (
        <>
        <div className={color ? "header header__bg" : "header"}>
            <div className="nav__container">
            <span className="nav__logo">Marian García</span>
            <div className={`nav__items ${isOpen && "open"}`}>
                <Link
                to="/"
                // spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
                className="nav__links"
                >
                Home
                </Link>
                <Link
                to="about"
                // spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                className="nav__links"
                >
                About
                </Link>
                <Link
                to="portfolio"
                // spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                className="nav__links"
                >
                Work
                </Link>
                <Link
                to="contact"
                // spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                className="nav__links"
                >
                Contact
                </Link>
                <a href={cv} target="_blank" rel="noopener noreferrer" className="nav__links">CV</a>
            </div>
            <div
                className={`nav__toggle ${isOpen && "open"}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="bar"></div>
            </div>
            </div>
        </div>
        </>
    );
}