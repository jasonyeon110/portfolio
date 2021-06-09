import React from 'react';
import notFound from './images/204.jpg'

export default function Portfolio() {
    return (
        <section className="container-fluid" id="sec-four">
            <div className="row align-items-center text-center h-100">
                <h2>My Recent Projects</h2>
                <div className="container" id="projex-container">
                    {/* <div>Coming Soon...</div> */}
                    <div className="projex">Google Map Clone</div>
                    {/* <div className="projex">2</div>
                    <div className="projex">3</div>
                    <div className="projex">4</div> */}
                    {/* <img src={notFound} alt="no content image" id="cat-no-content" /> */}
                </div>
            </div>
        </section>
    )
}
