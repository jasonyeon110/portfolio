import React from 'react'

export default function Nav() {
    return (
        <nav id="mainNavbar" className="navbar navbar-dark bg-dark navbar-expand-md py-0 fixed-top">
            <a href="#" className="navbar-brand">JASON/YEON</a>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navLinks" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navLinks">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="" className="nav-link">Introduction</a>
                    </li>
                    <li className="nav-item">
                        <a href="" className="nav-link">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="" className="nav-link">Contact me</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
