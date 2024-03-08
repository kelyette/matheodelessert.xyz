import { useRouteError } from "react-router-dom";
import boberror from "./images/boberror.jpg"
import "./ErrorPage.css"

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="error-page">
            <div id="error-container">
                <h1>{error.status} NOT FOUND</h1>
                <img id="error-image" src={boberror} alt="boberror"/>
            </div>
        </div>
    );
}