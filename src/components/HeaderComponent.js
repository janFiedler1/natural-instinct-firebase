import React, { Component } from "react";
import '../component-css/HeaderComponent.css';
import About from './AboutComponent';
import Home from './HomeComponent';
import Contact from './Web3ContactComponent';

function Header({stateChangeFunction}) {
    const links = [{title: 'Home', id:"home", component:<Home/>},
        {title: 'About', id:"about", component:<About/>},
        {title: 'Contact', id:"contact", component:<Contact/>}
     ]
    
    const handleClick = (newContent) => {
        stateChangeFunction(newContent);
    };
    const showMenu = () => {
        console.log("hi");
    };
    return (
        <React.Fragment>
            <div className="header sticky-header">
                <h1 className="logo-word">NATURAL INSTINCT</h1>
                <div className="navigation-menu">
                    {links.map((link) => (
                        <button key={link.id} onClick={() => handleClick(link.component)} className="navigation-item" >
                            {link.title}
                        </button>
                    ))}
                </div>
                <div className="navigation-dropdown" onClick={showMenu}>
                    <img className="navigation-dropdown-icon" src={process.env.PUBLIC_URL+'/hamburger-icon-white.png'}/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header;
