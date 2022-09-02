import { useState } from 'react';
import { HeaderWrapper,
        Container,
        Logo,
        Nav,
        MenuIcon,
        IconBar, 
        NavMenu} from './styles';

import RenderLinks from './RenderLinks';

export default function Header({logo, links, id}) {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)
    
    return (
        <HeaderWrapper className='header' id={id} >
            <Container>
                <Logo className="logo">
                    {logo}
                </Logo>
                <Nav className="navbar-items">
                    <MenuIcon className={click ? `menu-icon on` : `menu-icon`} onClick={handleClick}>
                        <IconBar className="one"></IconBar>
                        <IconBar className="two"></IconBar>
                        <IconBar className="three"></IconBar>
                    </MenuIcon>
                    <NavMenu className={click ? 'nav-menu active' : 'nav-menu'}>
                        <RenderLinks links={links} click={closeMenu} />
                    </NavMenu>
                    
                </Nav>
            </Container>
            
        </HeaderWrapper>
    );
}