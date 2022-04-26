import React from "react";
import RenderLinks from "./RenderLinks";
import './Header.css'

export default function Header({logo, links, id, backgroundcolor, navColor}) {
    return (
        <header className="header" id={id} style={{backgroundColor: backgroundcolor}}>
            <div className="logo">
                {logo}
            </div>
            <nav style={{color: navColor}}>
                <RenderLinks links={links}  />
            </nav>
        </header>
    );
}