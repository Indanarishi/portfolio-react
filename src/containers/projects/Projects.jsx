
// styles
import './projects.css'

const Projects = () => {
    return (
        <section id="projects" class="projects">
            <div class="container">
                <div class="project-item">
                    <div class="project-item-left">
                        <img src="images/works-1.png" alt="gpt-3" />
                    </div>
                    <div class="project-item-right">
                        <h2 class="project-title">Projects</h2>
                        <h3 class="project-item-title">
                            GPT-3 AI React Website with Framer Motion
                        </h3>
                        <div class="project-item-btns">
                            <a href="#" class="btn github-btn">View GitHub</a>
                            <a href="#" class="btn demo-btn">View Live Demo</a>
                        </div>
                    </div>
                </div>
                <div class="project-item">
                    <div class="project-item-left">
                        <img src="images/works-2.png" alt="social" />
                    </div>
                    <div class="project-item-right">
                        <h3 class="project-item-title">
                            "SOCIAL" Social Media React Website with Sanity.io
                        </h3>
                        <div class="project-item-btns">
                            <a href="#" class="btn github-btn">View GitHub</a>
                            <a href="#" class="btn demo-btn">View Live Demo</a>
                        </div>
                    </div>
                </div>
                <div class="project-item">
                    <div class="project-item-left">
                        <img src="images/works-3.png" alt="portfolio" />
                    </div>
                    <div class="project-item-right">
                        <h3 class="project-item-title">
                            Indana Portfolio Website with Bootstrap 5, SASS and Animated On Scroll JS Library
                        </h3>
                        <div class="project-item-btns">
                            <a href="#" class="btn github-btn">View GitHub</a>
                            <a href="#" class="btn demo-btn">View Live Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Projects;
