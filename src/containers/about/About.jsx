import { motion } from 'framer-motion';

// styles
import './about.css'

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="about-left">
                    <motion.h2 
                        className="about-title"
                        initial={{ opacity: 0, top: 100 }}
                        transition={{ duration: 1.5 }}
                        whileInView={{ opacity: 1, top: -50 }}
                    >
                        About
                    </motion.h2>
                    <motion.h3 
                        className="about-subtitle"
                        initial={{ opacity: 0, y: 100 }}
                        transition={{ duration: 2.5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        A few words about me
                    </motion.h3>
                </div>
                <motion.div 
                    className="about-right"
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 2.5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                >
                    <p className="about-desc">
                        Hi, my name is Indana and I am a Front-End Web Developer based in Indonesia.
                        I graduated from Dian Nuswantoro University with a degree in computer science.
                        My main goal as a developer is to write less code more efficiently.
                    </p>
                </motion.div>
            </div>
        </section>
    )
};

export default About;
