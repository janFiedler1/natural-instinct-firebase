import React, { Component, useState } from "react";
import '../component-css/HeaderComponent.css';
import About from './AboutComponent';
import Home from './HomeComponent';
import Contact from './Web3ContactComponent';

function Header({tabChangeFunction, links}) {
    
    
    const changeTab = (newContent) => {
        setIsNavOpen(false);
        tabChangeFunction(newContent);
    };

    const [isNavOpen, setIsNavOpen] = useState(false);
    const showMenu = () => {
        setIsNavOpen(!isNavOpen);
        console.log("navigation-dropdown "+(isNavOpen ? "toggle_on":"toggle_off"));
    };

    return (
        <React.Fragment>
            <div className="header sticky-header">
                <h1 className="logo-word">NATURAL INSTINCT</h1>
                <div className="navigation-menu">
                    {links.map((link) => (
                        <button key={link.id} onClick={() => changeTab(link.component)} className="navigation-item" >
                            {link.title}
                        </button>
                    ))}
                </div>
                <div className="navigation-dropdown" onClick={showMenu}>
                    <img className="navigation-dropdown-icon" src={process.env.PUBLIC_URL+'/hamburger-icon-white.png'}/>
                </div>
            </div>
            <div className={"dropdown-navigation-menu "+(isNavOpen ? "toggle_on":"toggle_off")}>
                {links.map((link) => (
                    <button key={link.id} onClick={() => changeTab(link.component)} className="dropdown-navigation-item" >
                        {link.title}
                    </button>
                ))}
            </div>
        </React.Fragment>
    )
}

export default Header;
