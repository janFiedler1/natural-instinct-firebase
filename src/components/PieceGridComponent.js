import React from "react";
import Piece from './PieceComponent';
import '../component-css/PieceGridComponent.css';

const pieces = [{id: 1, title: 'Rockets Shorts', path: process.env.PUBLIC_URL+'/rockets-shorts-enhanced.png', type: "shorts", payment_link:"https://buy.stripe.com/test_8wMg2pbRE51r64wfYZ", price: 150.00},
    {id: 2, title: 'Earth First Longsleeve', path: process.env.PUBLIC_URL+'/earth-first-longsleeve.png', type: "longsleeve", payment_link:"https://buy.stripe.com/test_8wMg2pbRE51r64wfYZ", price: 200.00},
    {id: 3, title: 'Give Me Space Longsleeve', path: process.env.PUBLIC_URL+'/give-me-space-longsleeve.png', type: "longsleeve", payment_link:"https://buy.stripe.com/test_8wMg2pbRE51r64wfYZ", price: 300.00},
    {id: 4, title: 'Yin Yang Longsleeve', path: process.env.PUBLIC_URL+'/no-light-longsleeve.png', type: "longsleeve", payment_link:"https://buy.stripe.com/test_8wMg2pbRE51r64wfYZ", price: 170.00},
 ]

function PieceGrid () {
    return (
        <React.Fragment>
            <div className="pieces-container">
                {pieces.map((piece) => (
                    <Piece id={piece.id} title={piece.title} path={piece.path} payment_link={piece.payment_link}/>
                ))}
            </div>    
        </React.Fragment>
    )
}

export default PieceGrid;