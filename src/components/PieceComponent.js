import React from "react";
import '../component-css/PieceComponent.css';

/**
 * @param {int} key - unique identifier
 * @param {string} title - name of the piece
 * @param {url} path - path to the image
 * @param {url} payment_link - payment link
 */
function Piece({piece}) {
    return (
        <React.Fragment>
            <a href={piece.payment_link}>
                <div key={piece.id} className={"piece-container"+(piece.status=="sold" ? " grayed-out" : "")}>
                    <img src={piece.path}/>
                    <div className="piece-info">
                        <span className="piece-title">{piece.title}</span>
                        <span className="piece-price">{"$"+piece.price}</span>
                    </div>
                </div>
            </a>
        </React.Fragment>
    )
}

export default Piece;