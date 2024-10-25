import React from "react";
import Piece from './PieceComponent';
import '../component-css/PieceGridComponent.css';

function PieceGrid ({pieces, amount}) {
    amount = amount ? amount : 100;
    return (
        <React.Fragment>
            <div className="pieces-container">
                {pieces.slice(0,amount).map((piece) => (
                    <Piece key={piece.id} piece={piece}/>
                ))}
            </div>    
        </React.Fragment>
    )
}

export default PieceGrid;