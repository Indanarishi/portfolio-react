import { useState } from 'react';

// styles
import './navbar.css'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <nav id="navbar" className={toggleMenu ? 'navbar show' : 'navbar'}>
            <div className="container">
                <div className="navbar-left">
                    <a href="/#" className="navbar-logo"><span>by</span> IndanaRishi</a>
                </div>
                <div className="navbar-mid">
                    <ul className="navbar-lists">
                        <li className="navbar-list">
                            <a href="#about" className="navbar-item">About</a>
                            <a href="#skills" className="navbar-item">Skills</a>
                            <a href="#projects" className="navbar-item">Projects</a>
                            <a href="#contact" className="navbar-item">Contact Me</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-right">
                    <a href="#contact" className="navbar-btn btn">Contact Me</a>
                </div>
                <div className="navbar-hamburger">
                    <button id="open-btn" onClick={() => setToggleMenu(true)}>
                        <img src="images/icon-hamburger.svg" alt="hamburger-menu" />
                    </button>
                    <button id="close-btn" onClick={() => setToggleMenu(false)}>
                        <img src="images/icon-close.svg" alt="close-menu" />
                    </button>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;
