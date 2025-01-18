import React from "react";
import '../component-css/PieceComponent.css';
import Modal from "./PieceModal";
import { useState } from "react";

/**
 * @param {int} key - unique identifier
 * @param {string} title - name of the piece
 * @param {url} path - path to the image
 * @param {url} payment_link - payment link
 */
function Piece({piece}) {

    const [animation, setAnimation] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const toggleModal = () => {
        setModalOpen(!modalOpen);
        setTimeout(() => {  setAnimation(!animation); }, 100);
    }

    return (
        <React.Fragment>
            <div key={piece.id} className="piece-container" onClick={piece.status=="available"?toggleModal:void(0)}>
                <div className="img-container">
                    <img src={piece.path} className={(piece.status=="sold" ? " grayed-out" : "")}/>
                </div>
                <div className={"piece-info"+(piece.status=="sold" ? " red" : "")}>
                    <span className="piece-title">{piece.status=="sold" ? "Sold" : piece.title}</span>
                    <span className="piece-price">{"$"+piece.price}</span>
                </div>
            </div>
            <Modal piece={piece} open={modalOpen} toggleModal={toggleModal} animation={animation}/>
        </React.Fragment>
    )
}

export default Piece;