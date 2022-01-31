import { motion } from 'framer-motion';

// styles
import './skills.css'

// components
import Skill from '../../components/skill/Skill';

const skillData = [
    {
        image: 'html',
        title: 'HTML'
    },
    {
        image: 'css',
        title: 'CSS'
    },
    {
        image: 'sass',
        title: 'SASS'
    },
    {
        image: 'bootstrap',
        title: 'Bootstrap'
    },
    {
        image: 'javascript',
        title: 'Javascript'
    },
    {
        image: 'react',
        title: 'React'
    }
]

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <div className="container">
                <motion.h2 
                    className="skills-title"
                    initial={{ opacity: 0, top: 100 }}
                    transition={{ duration: 2 }}
                    whileInView={{ opacity: 1, top: -25 }}
                >
                    Skills
                </motion.h2>
                {skillData.map((skill, index) => (
                    <Skill key={index} skill={skill} index={index} />
                ))}
            </div>
        </section>
    )
};

export default Skills;
