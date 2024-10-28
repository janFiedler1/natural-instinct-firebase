import React from "react";
import '../component-css/PieceModal.css';

/**
 * @param {int} key - unique identifier
 * @param {string} title - name of the piece
 * @param {url} path - path to the image
 * @param {url} payment_link - payment link
 */
function Modal({piece}) {
    return (
        <React.Fragment>
            <div className="piece-modal">
                <div className="piece-modal-image-container image-carousel">
                </div>
                <div className="piece-modal-info">
                    <span className="title">{piece.title}</span>
                    <span className="description">{piece.description}</span>
                    <div className="measurements">
                        <ul>
                        {piece.measurements.map((measurement) => (
                            <React.Fragment>
                                <li>{measurement}</li>
                            </React.Fragment>
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
        </React.Fragment>
    )
}

export default Modal;