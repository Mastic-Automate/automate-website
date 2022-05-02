import React, { useEffect, useState } from "react";
import RenderLinks from "./RenderLinks";
import './Header.css'

export default function Header({logo, links, id, resizeWidth}) {
    const [classname, setClassname] = useState('mobile')
    const [click, setClick] = useState(false)

    const handleClick = setClick(!click)

    const toggleNavbar = () => {
        console.log(resizeWidth >= window.innerWidth)
        if (resizeWidth >= window.innerWidth) {
            setClassname('mobile')
        } else {
            setClassname('desktop')
        }
    }

    useEffect(() => {
        toggleNavbar()
    })

    window.addEventListener('resize', toggleNavbar)

    return (
        <header className={`header ${classname}`} id={id} >
            <div className="logo">
                {logo}
            </div>
            <nav>
                <RenderLinks links={links} />
            </nav>
        </header>
    );
}