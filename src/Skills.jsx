import React from 'react';
import js from './images/javascript.png';
import java from './images/java.png';
import nodejs from './images/nodejs.png';
import communication from './images/communication.png';
import leader from './images/leader.png';
import critical from './images/critical.png';

export default function Skills() {
    return (
        <section className="container-fluid" id="sec-three">
            <div className="row h-100">
                <div className="col-lg" id="program-image">
                    <div className="overlay">
                        <div className="lists-container">
                            <h3 className="text-center skilz">Programming Skills</h3>
                            <ul className="skill-list">
                                <li>
                                    <img src={js} alt="Javascript Logo" className="skill-logo" />
                                    <label htmlFor="Javascript">Javascript</label>
                                    {/* <progress id="javascript" value="30" max="100" /> */}
                                </li>
                                <li>
                                    <img src={java} alt="Java Logo" className="skill-logo" />
                                    <label htmlFor="java">Java</label>
                                </li>
                                <li>
                                    <img src={nodejs} alt="Node.js Logo" className="skill-logo" />
                                    <label htmlFor="nodejs">Node.JS</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg" id="soft-image">
                    <div className="overlay">
                        <div className="lists-container">
                            <h3 className="text-center skilz">Soft Skills</h3>
                            <ul className="skill-list">
                                <li>
                                    <img src={communication} alt="Node.js Logo" className="skill-logo" />
                                    <label htmlFor="nodejs">Communication</label>
                                </li>
                                <li>
                                    <img src={critical} alt="Node.js Logo" className="skill-logo" />
                                    <label htmlFor="nodejs">Critical Thinking</label>
                                </li>
                                <li>
                                    <img src={leader} alt="Node.js Logo" className="skill-logo" />
                                    <label htmlFor="nodejs">Leadership</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <div className="col"></div> */}
            </div>

        </section>
    )
}
