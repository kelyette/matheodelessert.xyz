import React from 'react'
import './landing.css'
import bob1 from "./images/bob1.png"

export default function Landing() {
    return (
        <div className="landing">
            <div className="page-container">
                <div id="image-row">
                    <img src={bob1} id="landing-image" alt="bob1"></img>
                </div>
                <div id="title-row">
                    <h3 className="subheader-text">
                        Lorem ipsum dolor sit amet,
                        <br />
                        consectetur adipisicing elit.
                    </h3>
                </div>
                <div id="list-row">
                    <ul>
                        <li>1. Lorem ipsum</li>
                        <li>2. Dolor sit amet</li>
                        <li>3. consectetur adlit.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}