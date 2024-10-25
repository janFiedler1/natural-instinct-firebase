import React from "react";
import PieceGrid from './PieceGridComponent';
import '../component-css/ShopPageComponent.css';

function ShopPage ({pieces, title}) {
    return (
        <React.Fragment>
            <div className="shop-page-container">
                <h1 className="shop-page-title">{title}</h1>
                <PieceGrid pieces={pieces}/> 
            </div>
        </React.Fragment>
    )
}

export default ShopPage;