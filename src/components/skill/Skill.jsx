import { motion } from "framer-motion";

const Skill = ({ skill, index }) => {

    const { image, title } = skill

    return (
        <motion.div 
            className="skills-item"
            initial={{ opacity: 0, y: 125 }}
            transition={{ duration: 2, delay: index * .1 }}
            whileInView={{ opacity: 1, y: 0 }}
        >
            <img src={`/images/${image}-icons.svg`} alt={title} />
            <p>{title}</p>
        </motion.div>
    )
};

export default Skill;
