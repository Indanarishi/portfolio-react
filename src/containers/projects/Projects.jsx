import { motion } from 'framer-motion';

// styles
import './projects.css'

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="project-item">
                    <motion.div 
                        className="project-item-left"
                        initial={{ opacity: 0, y: 100 }}
                        transition={{ duration: 2.5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <img src="images/works-1.png" alt="gpt-3" />
                    </motion.div>
                    <div className="project-item-right">
                        <motion.h2 
                            className="project-title"
                            initial={{ opacity: 0, top: 100 }}
                            transition={{ duration: 1.5 }}
                            whileInView={{ opacity: 1, top: -25 }}
                        >
                            Projects
                        </motion.h2>
                        <motion.h3 
                            className="project-item-title"
                            initial={{ opacity: 0, y: 100 }}
                            transition={{ duration: 2.5 }}
                            whileInView={{ opacity: 1, y: 0 }}
                        >
                            GPT-3 AI React Website with Framer Motion
                        </motion.h3>
                        <motion.div 
                            className="project-item-btns"
                            initial={{ opacity: 0, y: 100 }}
                            transition={{ duration: 2.5 }}
                            whileInView={{ opacity: 1, y: 0 }}
                        >
                            <a href="/#" className="btn github-btn">View GitHub</a>
                            <a href="/#" className="btn demo-btn">View Live Demo</a>
                        </motion.div>
                    </div>
                </div>
                <div className="project-item">
                    <motion.div 
                        className="project-item-left"
                        initial={{ opacity: 0, y: 100 }}
                        transition={{ duration: 2.5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <img src="images/works-2.png" alt="social" />
                    </motion.div>
                    <div className="project-item-right">
                        <motion.h3 
                            className="project-item-title"
                            initial={{ opacity: 0, y: 100 }}
                            transition={{ duration: 2.5 }}
                            whileInView={{ opacity: 1, y: 0 }}
                        >
                            "SOCIAL" Social Media React Website with Sanity.io
                        </motion.h3>
                        <motion.div 
                            className="project-item-btns"
                            initial={{ opacity: 0, y: 100 }}
                            transition={{ duration: 2.5 }}
                            whileInView={{ opacity: 1, y: 0 }}
                        >
                            <a href="/#" className="btn github-btn">View GitHub</a>
                            <a href="/#" className="btn demo-btn">View Live Demo</a>
                        </motion.div>
                    </div>
                </div>
                <div className="project-item">
                    <motion.div 
                        className="project-item-left"
                        initial={{ opacity: 0, y: 100 }}
                        transition={{ duration: 2.5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <img src="images/works-3.png" alt="portfolio" />
                    </motion.div>
                    <div className="project-item-right">
                        <motion.h3 
                            className="project-item-title"
                            initial={{ opacity: 0, y: 100 }}
                            transition={{ duration: 2.5 }}
                            whileInView={{ opacity: 1, y: 0 }}
                        >
                            Indana Portfolio Website with Bootstrap 5, SASS and Animated On Scroll JS Library
                        </motion.h3>
                        <motion.div 
                            className="project-item-btns"
                            initial={{ opacity: 0, y: 100 }}
                            transition={{ duration: 2.5 }}
                            whileInView={{ opacity: 1, y: 0 }}
                        >
                            <a href="/#" className="btn github-btn">View GitHub</a>
                            <a href="/#" className="btn demo-btn">View Live Demo</a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Projects;
