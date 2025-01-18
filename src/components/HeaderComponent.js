import React, { Component, useState } from "react";
import '../component-css/HeaderComponent.css';


function Header({tabChangeFunction, links, shopSections}) {
    
    
    const changeTab = (newContent) => {
        setIsNavOpen(false);
        setShopDropdownOpen(false);
        tabChangeFunction(newContent);
    };

    const [isNavOpen, setIsNavOpen] = useState(false);
    const showMenu = () => {
        setShopDropdownOpen(false);
        setIsNavOpen(!isNavOpen);
    };

    const [isShopDropdownOpen, setShopDropdownOpen] = useState(false);

    const toggleShopDropdown = () => {
        setIsNavOpen(false);
        setShopDropdownOpen(!isShopDropdownOpen);
    };

    return (
        <React.Fragment>
            <div className="header sticky-header">
                <h1 className="logo-word">NATURAL INSTINCT</h1>
                <div className="navigation-menu">
                    <button key={0} onClick={toggleShopDropdown} className={"navigation-item shop-nav-button"} >
                        {"+ Shop"}
                    </button>
                    {links.slice(1,4).map((link) => (
                        <a key={link.id} href={link.url}>
                            <button key={link.id} className={"navigation-item "+(link.id=="shop" ? "shop-nav-button" : "")} >
                                {link.title}
                            </button>
                        </a>
                    ))}
                </div>
                <div className="navigation-dropdown" onClick={showMenu}>
                    <img className="navigation-dropdown-icon" src={isNavOpen ? process.env.PUBLIC_URL+'/close-icon-white.png' : process.env.PUBLIC_URL+'/hamburger-icon-white.png'}/>
                </div>
            </div>
            <div className={"dropdown-navigation menu "+(isNavOpen ? "toggle_on":"")}>
                <button key={0} onClick={toggleShopDropdown} className={"dropdown-navigation-item"} >
                    {"+ Shop"}
                </button>
                {links.slice(1,4).map((link) => (
                    <a key={link.id} href={link.url}>
                        <button key={link.id} className={"dropdown-navigation-item"} >
                            {link.title}
                        </button>
                    </a>
                ))}
            </div>
            <div className={"shop-dropdown menu "+(isShopDropdownOpen ? "toggle_shop_on":"")}>
                <div className="shop-dropdown-container">
                    {shopSections.map((section) => (
                        <a key={section.id} href={section.url}>
                            <button key={section.id} className="shop-navigation-item">
                                <img src={section.img} className="shop-dropdown-img"/>
                                <span className="shop-dropdown-item-name">{section.title}</span>
                            </button>
                        </a>
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header;
