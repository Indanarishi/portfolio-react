
// styles
import './hero.css'

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="container">
                <div className="hero-top">
                    <h1 className="hero-top-text">
                        Front-End Website <span>Developer</span>
                    </h1>
                </div>
                <div className="hero-mid">
                    <img src="images/foto-2.jpg" alt="indana" />
                </div>
                <div className="hero-bot">
                    <h2 className="hero-bot-text">
                        <span>Based in</span> Semarang, Indonesia
                    </h2>
                </div>
            </div>
        </section>
    )
};

export default Hero;
