
// styles
import './contact.css'

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="contact-title">contact me</h2>
                <div className="contact-top">
                    <div className="contact-top-left">
                        <a href="https://t.me/Indanarishi" rel='noreferrer' target="_blank">telegram</a>
                        <a href="https://wa.me/6282235022323" rel='noreferrer' target="_blank">whatsapp</a>
                        <a href="https://instagram.com/Indanarishi" rel='noreferrer' target="_blank">instagram</a>
                    </div>
                    <div className="contact-top-right">
                        <a href="https://www.linkedin.com/in/indana-rishi/" rel='noreferrer' target="_blank">linkedin</a>
                        <a href="https://github.com/Indanarishi" rel='noreferrer' target="_blank">github</a>
                    </div>
                </div>
                <div className="contact-mid">
                    <h3 className="contact-number">+628 2235 0223 23</h3>
                    <h3 className="contact-email">indanary@gmail.com</h3>
                </div>
                <div className="contact-bot">
                    <p>please don&apos;t hesitate to ask a question
                        or send me a request about some work
                        we could do together.
                    </p>
                </div>
            </div>
        </section>
    )
};

export default Contact;
