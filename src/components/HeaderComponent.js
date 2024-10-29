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
                    <button key={link.id} onClick={() => (link.id=="shop" ? toggleShopDropdown() : changeTab(link.component))} className="dropdown-navigation-item" >
                        {link.title}
                    </button>
                ))}
            </div>
            <div className={"shop-dropdown menu "+(isShopDropdownOpen ? "toggle_shop_on":"toggle_shop_off")}>
                <div className="shop-dropdown-container">
                    {shopSections.map((section) => (
                        <button key={section.id} onClick={() => changeTab(section.component)} className="shop-navigation-item">
                            <img src={section.img} className="shop-dropdown-img"/>
                            <span>{section.title}</span>
                        </button>
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header;
