import React from 'react'
import './Styles/NavBarStyles.css';

export default function NavBar() {
    return (
            <header className = "header">
                <a href="/"><img className="homeImg" src={ require("./Imgs/LogoURL.png")} alt=""/></a>
                <input className="menu-btn" type="checkbox" id="menu-btn"/>
                <label className="menu-icon" htmlFor="menu-btn"><span className="nav-icon"></span></label>
                <ul className="LeMenu">
                    <li><a href="">Index</a></li>
                    <li><a href="">About the Project</a></li>
                    <li><a href="">Introduction</a></li>
                    <li><a href="">The Creators</a></li>
                    <li><a href="https://github.com/ZeroJimmy100" target="_blank" rel="noopener noreferrer">Github</a></li>
                </ul>
            </header>
    )
}
