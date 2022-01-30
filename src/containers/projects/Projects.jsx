
// styles
import './projects.css'

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="project-item">
                    <div className="project-item-left">
                        <img src="images/works-1.png" alt="gpt-3" />
                    </div>
                    <div className="project-item-right">
                        <h2 className="project-title">Projects</h2>
                        <h3 className="project-item-title">
                            GPT-3 AI React Website with Framer Motion
                        </h3>
                        <div className="project-item-btns">
                            <a href="#" className="btn github-btn">View GitHub</a>
                            <a href="#" className="btn demo-btn">View Live Demo</a>
                        </div>
                    </div>
                </div>
                <div className="project-item">
                    <div className="project-item-left">
                        <img src="images/works-2.png" alt="social" />
                    </div>
                    <div className="project-item-right">
                        <h3 className="project-item-title">
                            "SOCIAL" Social Media React Website with Sanity.io
                        </h3>
                        <div className="project-item-btns">
                            <a href="#" className="btn github-btn">View GitHub</a>
                            <a href="#" className="btn demo-btn">View Live Demo</a>
                        </div>
                    </div>
                </div>
                <div className="project-item">
                    <div className="project-item-left">
                        <img src="images/works-3.png" alt="portfolio" />
                    </div>
                    <div className="project-item-right">
                        <h3 className="project-item-title">
                            Indana Portfolio Website with Bootstrap 5, SASS and Animated On Scroll JS Library
                        </h3>
                        <div className="project-item-btns">
                            <a href="#" className="btn github-btn">View GitHub</a>
                            <a href="#" className="btn demo-btn">View Live Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Projects;
