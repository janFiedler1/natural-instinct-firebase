import React from "react";
import PieceGrid from './PieceGridComponent';
import '../component-css/HomeComponent.css';

function Home ({pieces}) {
    return (
        <React.Fragment>
            <h1 className="homepage-title">Newest Drops</h1>
            <PieceGrid pieces={pieces} className="page"/> 
        </React.Fragment>
    )
}

export default Home;