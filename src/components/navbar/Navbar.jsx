import { useState } from 'react';
import { motion } from 'framer-motion';

// styles
import './navbar.css'

// motion
const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            delayChildren: .5,
            staggerChildren: 0.3
        }
    }
}

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: .5
        }
    }
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <nav id="navbar" className={toggleMenu ? 'navbar show' : 'navbar'}>
            <div className="container">
                <motion.div 
                    className="navbar-left"
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 1.5 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <a href="/#" className="navbar-logo"><span>by</span> IndanaRishi</a>
                </motion.div>
                <div className="navbar-mid">
                    <ul className="navbar-lists">
                        <motion.li 
                            className="navbar-list"
                            initial="hidden"
                            variants={container}
                            animate="visible"
                        >
                            <motion.a variants={item} href="#about" className="navbar-item">About</motion.a>
                            <motion.a variants={item} href="#skills" className="navbar-item">Skills</motion.a>
                            <motion.a variants={item} href="#projects" className="navbar-item">Projects</motion.a>
                            <motion.a variants={item} href="#contact" className="navbar-item">Contact Me</motion.a>
                        </motion.li>
                    </ul>
                </div>
                <motion.div 
                    className="navbar-right"
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 1.5, delay: 1.3 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <a href="#contact" className="navbar-btn btn">Contact Me</a>
                </motion.div>
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
