import './HomePage.css'
import homeimg from "./images/bobhome.png"

export default function HomePage() {
    return (
        <div className="landing">
            <div id="image-row">
                <img src={homeimg} id="landing-image" alt="home-img"></img>
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
    )
}