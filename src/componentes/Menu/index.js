import React from 'react';
import Logo from '../../assets/img/IFLIX-BLUE.png';

import { LogoImage, MenuWrapper} from './style.js'


import Button from '../Button';


function Menu(){
    return (
        <MenuWrapper className="Menu">
            <a href="/">     
                <LogoImage className="Logo" src={Logo} alt="Iflix logo"/>
            </a>

            <Button as="a" className="ButtonLink" href="">
                NOVO VÍDEO
            </Button>
        </MenuWrapper>

    );
}


export default Menu;