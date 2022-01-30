
// styles
import './navbar.css'

const Navbar = () => {
    return (
        <nav id="navbar" class="navbar">
            <div class="container">
                <div class="navbar-left">
                    <a href="#" class="navbar-logo"><span>by</span> IndanaRishi</a>
                </div>
                <div class="navbar-mid">
                    <ul class="navbar-lists">
                        <li class="navbar-list">
                            <a href="#about" class="navbar-item">About</a>
                            <a href="#skills" class="navbar-item">Skills</a>
                            <a href="#projects" class="navbar-item">Projects</a>
                            <a href="#contact" class="navbar-item">Contact Me</a>
                        </li>
                    </ul>
                </div>
                <div class="navbar-right">
                    <a href="#contact" class="navbar-btn btn">Contact Me</a>
                </div>
                <div class="navbar-hamburger">
                    <a id="open-btn">
                        <img src="images/icon-hamburger.svg" alt="hamburger-menu" />
                    </a>
                    <a id="close-btn">
                        <img src="images/icon-close.svg" alt="close-menu" />
                    </a>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;
