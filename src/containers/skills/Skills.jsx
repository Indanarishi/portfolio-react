
// styles
import './skills.css'

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="skills-title">Skills</h2>
                <div className="skills-item">
                    <img src="/images/html-icons.svg" alt="html" />
                    <p>HTML</p>
                </div>
                <div className="skills-item">
                    <img src="/images/css-icons.svg" alt="css" />
                    <p>CSS</p>
                </div>
                <div className="skills-item">
                    <img src="/images/sass-icons.svg" alt="sass" />
                    <p>SASS</p>
                </div>
                <div className="skills-item">
                    <img src="/images/bootstrap-icons.svg" alt="bootstrap" />
                    <p>Bootstrap</p>
                </div>
                <div className="skills-item">
                    <img src="/images/javascript-icons.svg" alt="javascript" />
                    <p>Javascript</p>
                </div>
                <div className="skills-item">
                    <img src="/images/react-icons.svg" alt="react" />
                    <p>React</p>
                </div>
            </div>
        </section>
    )
};

export default Skills;
