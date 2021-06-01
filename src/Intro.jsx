import React from 'react';
import north from './images/north-logo.png';

export default function Intro() {
    return (
        <section id="sec-one">
            <div id="home">
                <div className="overlay" id="intro-overlay">
                    <div id="introduction">
                        <h1>Witness My Journey to Become a <span> Software Engineer</span></h1>
                        {/* 윗트잇게 */}
                    </div>
                    <div id="sub-container">
                        <div id="sub1">Systme.out.println("Jason Yeon")</div>
                        <div id="sub2">console.log('') </div>
                        <div id="sub3">print('Frontend')</div>
                    </div>
                </div>
            </div>
        </section>
    )
}


{/* <div id="home" className="h-100 w-100">
                <div className="overlay">
                    <div id="introduction">
                        <h1>Witness My Journey to Become a <span> Software Engineer</span></h1>
                    </div>
                    <div id="sub-container">
                        <div id="sub1">Systme.out.println("Hello World")</div>
                        <div id="sub2">console.log('Hello World) </div>
                        <div id="sub3">print('Hello World')</div>
                    </div>
                </div>
            </div> */}

