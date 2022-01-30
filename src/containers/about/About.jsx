
// styles
import './about.css'

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="about-left">
                    <h2 className="about-title">About</h2>
                    <h3 className="about-subtitle">
                        A few words about me
                    </h3>
                </div>
                <div className="about-right">
                    <p className="about-desc">
                        Hi, my name is Indana and I am a Front-End Web Developer based in Indonesia.
                        I graduated from Dian Nuswantoro University with a degree in computer science.
                        My main goal as a developer is to write less code more efficiently.
                    </p>
                </div>
            </div>
        </section>
    )
};

export default About;
