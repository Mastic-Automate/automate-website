import React from "react";
import RenderLinks from "./RenderLinks";
import './Header.css'

export default function Header({logo, links, id}) {
    return (
        <header className="header" id={id}>
            <div className="logo">
                {logo}
            </div>
            <nav>
                <RenderLinks links={links} />
            </nav>
        </header>
    );
}