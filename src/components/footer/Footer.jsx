import { motion } from 'framer-motion';

// styles
import './footer.css'

const Footer = () => {
    return (
        <motion.footer 
            className="footer"
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
        >
            <div className="container">
                <p>Indana Rishi &copy; 2021. All rights reserved.</p>
            </div>
        </motion.footer>
    )
};

export default Footer;
