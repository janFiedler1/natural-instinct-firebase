import React from "react";
import Piece from './PieceComponent';
import '../component-css/PieceGridComponent.css';

function PieceGrid ({pieces}) {
    return (
        <React.Fragment>
            <div className="pieces-container">
                {pieces.map((piece) => (
                    <Piece piece={piece}/>
                ))}
            </div>    
        </React.Fragment>
    )
}

export default PieceGrid;