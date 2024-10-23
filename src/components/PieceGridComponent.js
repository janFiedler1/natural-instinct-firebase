import React from "react";
import Piece from './PieceComponent';
import '../component-css/PieceGridComponent.css';

function PieceGrid ({pieces}) {
    return (
        <React.Fragment>
            <div className="pieces-container">
                {pieces.map((piece) => (
                    // <Piece id={piece.id} title={piece.title} path={piece.path} payment_link={piece.payment_link} status={piece.status}/>
                    <Piece piece={piece}/>
                ))}
            </div>    
        </React.Fragment>
    )
}

export default PieceGrid;