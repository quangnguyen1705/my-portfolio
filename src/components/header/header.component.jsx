import React, { useState } from 'react';

import './header.styles.css';
import picture from "../../assets/img/profile_pic.png";

const Header = props => {
    const [ showMenu, setShowMenu ] = useState("nav__menu");
    const [ menuItems, setMenuItems ] = useState(["nav__link active","nav__link","nav__link","nav__link"]);

    return (
        <header className="l-header">
            <nav className="nav bd-grid">
                <div className='nav__container'>
                    <img className="nav__img" src={picture} alt="profile" />
                    <a href="#" className="nav__logo">Dang-Quang Nguyen</a>
                    
                </div>
                <div className={showMenu} id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className={menuItems[0]} onClick={() => { setMenuItems(["nav__link active","nav__link","nav__link","nav__link"]); setShowMenu("nav__menu")} }>Home</a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className={menuItems[1]} onClick={() => { setMenuItems(["nav__link active","nav__link","nav__link","nav__link"]); setShowMenu("nav__menu")} }>About</a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className={menuItems[2]} onClick={() => { setMenuItems(["nav__link active","nav__link","nav__link","nav__link"]); setShowMenu("nav__menu")} }>Skills</a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className={menuItems[3]} onClick={() => { setMenuItems(["nav__link active","nav__link","nav__link","nav__link"]); setShowMenu("nav__menu")} }>Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="nav__toggle" id="nav-toggle" onClick={() => (showMenu === "nav__menu") ? setShowMenu("nav__menu show") : setShowMenu("nav__menu")}>
                    <i className="bx bx-menu"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;