import React from 'react';
import north from './north-logo.png';

export default function Intro() {
    return (
        <section className="container-fluid px-0 py-3" id="sec-one">
            <div className="body">
                <div className="container">
                    <div className="col align-item-center">
                        <h1 id="introd" className="intro text-uppercase">About</h1>
                        <h2>I am currectly studying Master Degree - Information Systems at Northeastern University</h2>
                        <img src={north} alt="" id="north" />
                    </div>
                </div>
            </div>
        </section>
    )
}
