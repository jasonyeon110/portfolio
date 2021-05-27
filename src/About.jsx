import React from 'react';
import north from './images/north-logo.png';
import ocean from './images/IMG_5199.JPG';

export default function About() {
    return (
        <section className="container-fluid px-0 py-3" id="sec-one">
            <img src={ocean} alt="ocean picture" id="ocean" />
            <div className="container">
                <div id="introd" className="col align-item-center">
                    {/* <h1 className="intro text-uppercase">About</h1> */}
                    <p>I am currectly studying Master Degree - Information Systems at Northeastern University</p>
                    <img src={north} alt="" id="north" />
                </div>
            </div>

        </section>
    )
}
