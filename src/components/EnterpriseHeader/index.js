import React from "react";
import './EnterpriseHeader.css'

export default function EnterpriseHeader() {
    return (
        <header className="enterprise">
            <div className="logo">
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="/">Automate</a>
                    </li>
                    <li>
                        <a href="/">Outros projetos</a>
                    </li>
                    <li>
                        <a href="/">Contate-nos</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}