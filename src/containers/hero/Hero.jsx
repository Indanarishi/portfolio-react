
// styles
import './hero.css'

const Hero = () => {
    return (
        <section id="hero" class="hero">
            <div class="container">
                <div class="hero-top">
                    <h1 class="hero-top-text">
                        Front-End Website <span>Developer</span>
                    </h1>
                </div>
                <div class="hero-mid">
                    <img src="images/foto-2.jpg" alt="indana" />
                </div>
                <div class="hero-bot">
                    <h2 class="hero-bot-text">
                        <span>Based in</span> Semarang, Indonesia
                    </h2>
                </div>
            </div>
        </section>
    )
};

export default Hero;
