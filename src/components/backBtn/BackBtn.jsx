import { useEffect, useRef } from 'react';

// styles
import './backBtn.css'

const BackBtn = () => {

    const backBtn = useRef()

    useEffect(() => {
        window.onscroll = function() {
            if (window.scrollY > 500) {
                backBtn.current.style.visibility = 'visible'
                backBtn.current.style.opacity = window.scrollY / 4500
            } else {
                backBtn.current.style.visibility = 'hidden'
                backBtn.current.style.opacity = '0'
            }
        }
    }, [])

    return (
        <a href="/#" className="back-btn" id="back-btn" ref={backBtn}>
            <img src="images/arrow-up-circle.svg" alt="back" />
        </a>
    )
};

export default BackBtn;
