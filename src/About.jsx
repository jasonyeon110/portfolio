import React from 'react';
import north from './images/north-logo.png';

export default function About() {
    return (
        <section id="sec-one" className="about-section">
            <img src={north} className="img-fluid" id="north" />
            <h1 id="h">Hello, I am Ji Woong, <sub> go by Jason</sub>, a Software Engineering Student.</h1>
            <p>Witness my Journey to become a <span> Frontend</span> engineer</p>
            <div id="sub-container">
                <div id="sub1">Systme.out.println("Hello World")</div>
                <div id="sub2">console.log('Hello World) </div>
                <div id="sub3">print('Hello World')</div>
            </div>
        </section>
    )
}

