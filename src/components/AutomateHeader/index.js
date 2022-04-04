import React from "react";
import './AutomateHeader.css'

export default function AutomateHeader() {
    return (
        <header className="automate">
            <div className="logo">
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="/">Nosso Produto</a>
                    </li>
                    <li>
                        <a href="/">Sobre nós</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}