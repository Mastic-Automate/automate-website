import { useState } from 'react';
import './Header.css'
import RenderLinks from './RenderLinks';

export default function Header({logo, links, id}) {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)
    
    return (
        <header className='header' id={id} >
            <div className="logo">
                {logo}
            </div>
            <nav className="navbar-items">
                <div className={click ? `menu-icon on` : `menu-icon`} onClick={handleClick}>
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                </div>
                <div className={click ? 'nav-menu active' : 'nav-menu'}>
                    <RenderLinks links={links} click={closeMenu} />
                </div>
                
            </nav>
        </header>
    );
}