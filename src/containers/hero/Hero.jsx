import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';

// styles
import './hero.css'

const Hero = () => {
    const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' })
    const isLaptop = useMediaQuery({ query: '(min-width: 1024px)' })
    const isTablet = useMediaQuery({ query: '(min-width: 768px)' })
    const isMobileSmall = useMediaQuery({ query: '(min-width: 300px)' })

    const mediaRef = useRef({ opacity: 0, x: -150 })

    switch (true) {
        case isDesktop:
            mediaRef.current.opacity = 0
            mediaRef.current.x = -150
            break
        case isLaptop:
            mediaRef.current.opacity = 0
            mediaRef.current.x = -50
            break
        case isTablet:
            mediaRef.current.opacity = 0
            mediaRef.current.x = -25
            break
        case isMobileSmall:
            mediaRef.current.opacity = 0
            mediaRef.current.x = 0
            break
        default:
            mediaRef.current.opacity = 0
            mediaRef.current.x = -150
            break
    }

    let media = mediaRef.current

    console.log(media)

    return (
        <section id="hero" className="hero">
            <div className="container">
                <motion.div 
                    className="hero-top"
                    initial={{ opacity: media.opacity, x: media.x }}
                    transition={{ duration: 1.5 }}
                    whileInView={{ opacity: 1, x: 0 }}
                >
                    <h1 className="hero-top-text">
                        Front-End Website <span>Developer</span>
                    </h1>
                </motion.div>
                <motion.div 
                    className="hero-mid"
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 1, delay: .5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                >
                    <img src="images/foto-2.jpg" alt="indana" />
                </motion.div>
                <motion.div 
                    className="hero-bot"
                    initial={{ opacity: media.opacity, x: -media.x }}
                    transition={{ duration: 1.5 }}
                    whileInView={{ opacity: 1, x: 0 }}
                >
                    <h2 className="hero-bot-text">
                        <span>Based in</span> Semarang, Indonesia
                    </h2>
                </motion.div>
            </div>
        </section>
    )
};

export default Hero;
