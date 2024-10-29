import React from "react";
import PieceGrid from './PieceGridComponent';
import '../component-css/ShopPageComponent.css';
import { useParams } from "react-router-dom";

function ShopPage ({pieces, title, category}) {
    const params = useParams();
    // const params = useParams<{profileId: string}>();

    const filteredPieces = (id) => {
        let filteredPiecesArray = [];
        for (let i= 0; i<pieces.length; i++) {
            if (pieces[i].type === id) {
                filteredPiecesArray = [...filteredPiecesArray, pieces[i]];
            }
        }
        return filteredPiecesArray;
    }

    return (
        <React.Fragment>
            <div className="shop-page-container">
                <h1 className="shop-page-title">{title}</h1>
                <PieceGrid pieces={filteredPieces(params.category)}/> 
            </div>
        </React.Fragment>
    )
}

export default ShopPage;