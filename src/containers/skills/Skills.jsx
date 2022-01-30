
// styles
import './skills.css'

const Skills = () => {
    return (
        <section id="skills" class="skills">
            <div class="container">
                <h2 class="skills-title">Skills</h2>
                <div class="skills-item">
                    <img src="/images/html-icons.svg" alt="html" />
                    <p>HTML</p>
                </div>
                <div class="skills-item">
                    <img src="/images/css-icons.svg" alt="css" />
                    <p>CSS</p>
                </div>
                <div class="skills-item">
                    <img src="/images/sass-icons.svg" alt="sass" />
                    <p>SASS</p>
                </div>
                <div class="skills-item">
                    <img src="/images/bootstrap-icons.svg" alt="bootstrap" />
                    <p>Bootstrap</p>
                </div>
                <div class="skills-item">
                    <img src="/images/javascript-icons.svg" alt="javascript" />
                    <p>Javascript</p>
                </div>
                <div class="skills-item">
                    <img src="/images/react-icons.svg" alt="react" />
                    <p>React</p>
                </div>
            </div>
        </section>
    )
};

export default Skills;
