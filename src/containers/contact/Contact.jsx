import { motion } from 'framer-motion';

// styles
import './contact.css'

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
    hidden: { y: 100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 2
        }
    }
}

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <motion.h2 
                    className="contact-title"
                    initial={{ opacity: 0, top: 100 }}
                    transition={{ duration: 1.5 }}
                    whileInView={{ opacity: 1, top: 0 }}
                >
                    contact me
                </motion.h2>
                <div className="contact-top">
                    <motion.div 
                        className="contact-top-left"
                        initial="hidden"
                        variants={container}
                        whileInView="visible"
                    >
                        <motion.a variants={item} href="https://t.me/Indanarishi" rel='noreferrer' target="_blank">telegram</motion.a>
                        <motion.a variants={item} href="https://wa.me/6282235022323" rel='noreferrer' target="_blank">whatsapp</motion.a>
                        <motion.a variants={item} href="https://instagram.com/Indanarishi" rel='noreferrer' target="_blank">instagram</motion.a>
                    </motion.div>
                    <motion.div 
                        className="contact-top-right"
                        initial="hidden"
                        variants={container}
                        whileInView="visible"
                    >
                        <motion.a variants={item} href="https://www.linkedin.com/in/indana-rishi/" rel='noreferrer' target="_blank">linkedin</motion.a>
                        <motion.a variants={item} href="https://github.com/Indanarishi" rel='noreferrer' target="_blank">github</motion.a>
                    </motion.div>
                </div>
                <motion.div 
                    className="contact-mid"
                    initial="hidden"
                    variants={container}
                    whileInView="visible"
                >
                    <motion.h3 variants={item} className="contact-number">+628 2235 0223 23</motion.h3>
                    <motion.h3 variants={item} className="contact-email">indanary@gmail.com</motion.h3>
                </motion.div>
                <motion.div 
                    className="contact-bot"
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 2.5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                >
                    <p>please don&apos;t hesitate to ask a question
                        or send me a request about some work
                        we could do together.
                    </p>
                </motion.div>
            </div>
        </section>
    )
};

export default Contact;
