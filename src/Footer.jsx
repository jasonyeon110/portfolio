import React from 'react';
import linkedin from './images/linkedin.png';
import github from './images/github.png';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container" id="foot-a">
                <a href="https://www.linkedin.com/in/jason-jiwoong-yeon/" >
                    <img src={linkedin} alt="go to Linkeding Logo" className="foot-logo" />
                </a>
                <strong className="text-white text-uppercase" id="yeonj">Yeon/J</strong>
                <a href="https://github.com/jasonyeon110">
                    <img src={github} alt="go to github Logo" className="foot-logo" />
                </a>
            </div>
        </footer>
    )
}
