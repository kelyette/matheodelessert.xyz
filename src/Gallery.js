import './Gallery.css'

const imageContext = require.context('./images/gallery/', true);
const imageList = imageContext.keys().map(image => imageContext(image));

let columns = [];
let dividedImageList = [];

const chunkSize = imageList.length / 3

for (let i = 0; i < imageList.length; i += chunkSize) {
    const chunk = imageList.slice(i, i + chunkSize);
    dividedImageList.push(chunk)
}

for (let i = 0; i < dividedImageList.length; i++) {
    const columnImages = dividedImageList[i];
    columns.push(
        <div key={i} className="image-column">
            {columnImages.map((image, j) => (
                <img key={j} src={image} alt="gallery" className="gallery-image" />
            ))}
        </div>
    )
}

function ImageGallery() {
    return (
        <div id="image-gallery">
            {columns}
        </div>
    )
}

export default function Gallery() {
    return (
        <div className="gallery">
            <div id="page-container">
                <div id="gallery-sidebar">
                    <h1>Artwork gallery</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, ut est cum voluptate fuga distinctio nam commodi porro quia maxime non aliquid, necessitatibus placeat sed dolor eaque corrupti consequatur? At!</p>
                </div>
                <ImageGallery />
            </div>
        </div>
    )
}