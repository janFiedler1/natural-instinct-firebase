import React, { useState } from "react";
import '../component-css/PieceModal.css';

/**
 * @param {int} key - unique identifier
 * @param {string} title - name of the piece
 * @param {url} path - path to the image
 * @param {url} payment_link - payment link
 */
function Modal({piece, open, toggleModal, animation}) {

    let modalOpen = open ? " piece-modal-open" : "";
    let modalAnimation = animation ? " piece-modal-animation" : "";
    const [currentImage, setCurrentImage] = useState(0);
    const scrollImageLeft = () => {
        setCurrentImage((currentImage+3)%4);
        console.log(currentImage);
    }
    const scrollImageRight = () => {
        setCurrentImage((currentImage+1)%4);
        console.log(currentImage);
    }
    return (
        <React.Fragment>
            <div className={"piece-modal"+modalOpen+modalAnimation} onClick={toggleModal}>
                <div className="modal-content">
                    <div className="piece-modal-image-container image-carousel">
                        <div className="image-scroll" onClick={scrollImageLeft}>
                            <span>&lt;</span>
                        </div>
                        <img className="piece-modal-current-image" src={process.env.PUBLIC_URL+piece.images[currentImage]}/>
                        <div className="image-scroll" onClick={scrollImageRight}>
                            <span>&gt;</span>
                        </div>
                        {/* <img src={process.env.PUBLIC_URL+'/earth-first-longsleeve.png'}/>
                        <img src={process.env.PUBLIC_URL+'/give-me-space-longsleeve.png'}/> */}
                    </div>
                    <div className="piece-modal-info">
                    <div className="modal-close-button" onClick={toggleModal}>
                        <span>X</span>
                    </div>
                        <span className="title">{piece.title}</span>
                        <span className="description">{piece.description}</span>
                        <div className="measurements">
                            <ul>
                            {piece.measurements.map((measurement) => (
                                <li key={measurement}>{measurement}</li>
                            ))}
                            </ul>
                        </div>
                        <a href={piece.payment_link}>
                            <div className="buy-button">
                                <span>Buy</span>
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Modal;