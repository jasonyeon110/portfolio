import React from 'react'

export default function Nav({ show, setShow }) {

    const showContact = () => {
        if (show === false) {
            setShow(true)
        } else {
            setShow(false);
        }
    }

    return (
        <nav id="mainNavbar" className="navbar navbar-dark bg-dark navbar-expand-md py-0">
            <a href="#introd" className="navbar-brand">JASON/YEON</a>
            {/* href should be this url = >https://jasonyeon110.github.io/portfolio/ */}
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navLinks" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navLinks">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#introd" className="nav-link">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#portf" className="nav-link">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact-form" className="nav-link" onClick={showContact}>Contact me</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
