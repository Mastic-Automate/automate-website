import React from "react";
import RenderLinks from "./RenderLinks";
import './Header.css'

export default function Header({logo, links, linksNames}) {
    return (
        <header className="header">
            <div className="logo">
                {logo}
            </div>
            <nav>
                <RenderLinks links={links} linksNames={linksNames} />
            </nav>
        </header>
    );
}