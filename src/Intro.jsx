import React from 'react';
import north from './images/north-logo.png';

export default function Intro() {
    return (
        <section id="sec-one" className="intro-section container">
            <div id="home">
                <img src={north} id="north" />
                <div id="introduction">
                    {/* <h1 id="h">Hello, I am Ji Woong, <sub> go by Jason</sub> <br /> A Software Engineering Student.</h1> */}
                    <h1>Witness My Journey to Become a <span> Software Engineer</span></h1>
                </div>
                <div id="sub-container">
                    <div id="sub1">Systme.out.println("Hello World")</div>
                    <div id="sub2">console.log('Hello World) </div>
                    <div id="sub3">print('Hello World')</div>
                </div>
            </div>
        </section>
    )
}

