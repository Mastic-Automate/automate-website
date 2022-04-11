import './EnterprisePage.css'
import React from "react";
import EnterpriseHeader from "../EnterpriseHeader"
import Hero from "../Hero";

export default function EnterprisePage() {
    return (
        <div id="enterprise-container">
            <EnterpriseHeader />
            <Hero imgSide="none"
                title="MASTIC" 
                text={<p>Construindo o Futuro</p>}
                />
        </div>
    )
}