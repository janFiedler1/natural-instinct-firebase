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
        setIsNavOpen(!isNavOpen);
    };

    const [isShopDropdownOpen, setShopDropdownOpen] = useState(false);
    const toggleShopDropdown = () => {
        setShopDropdownOpen(!isShopDropdownOpen);
    };

    return (
        <React.Fragment>
            <div className="header sticky-header">
                <h1 className="logo-word">NATURAL INSTINCT</h1>
                <div className="navigation-menu">
                    {links.map((link) => (
                        <button key={link.id} onClick={() => (link.id=="shop" ? toggleShopDropdown() : changeTab(link.component))} className={"navigation-item "+(link.id=="shop" ? "shop-nav-button" : "")} >
                            {link.title}
                        </button>
                    ))}
                </div>
                <div className="navigation-dropdown" onClick={showMenu}>
                    <img className="navigation-dropdown-icon" src={process.env.PUBLIC_URL+'/hamburger-icon-white.png'}/>
                </div>
            </div>
            <div className={"dropdown-navigation menu "+(isNavOpen ? "toggle_on":"toggle_off")}>
                {links.map((link) => (
                    <button key={link.id} onClick={() => changeTab(link.component)} className="dropdown-navigation-item" >
                        {link.title}
                    </button>
                ))}
            </div>
            <div className={"shop-dropdown menu "+(isShopDropdownOpen ? "toggle_shop_on":"toggle_shop_off")}>
                {shopSections.map((section) => (
                    <button key={section.id} onClick={() => changeTab(section.component)} className="shop-navigation-item" >
                        {section.title}
                    </button>
                ))}
            </div>
        </React.Fragment>
    )
}

export default Header;
