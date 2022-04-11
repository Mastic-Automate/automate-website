import React from "react";
import './EnterpriseHeader.css'

export default function EnterpriseHeader() {
    return (
        <header className="enterprise">
            <img src="./img/enterprise-logo.png" alt="Logo da Mastic" className="logo" />
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