import React from 'react';
import notFound from './images/204.jpg'

export default function Portfolio() {
    return (
        <section className="container-fluid" id="sec-four">
            <div className="row align-items-center text-center h-100">
                <h2>My Recent Projects</h2>
                <div className="container" id="projex-container">
                    <div className="projex" id="map-clone">
                        <h4><a id="google-map" href="https://jasonyeon110.github.io/google-map-clone/">Google Map Clone</a></h4>
                    </div>
                    {/* <img src={notFound} alt="no content image" id="cat-no-content" /> */}
                </div>
            </div>
        </section>
    )
}
