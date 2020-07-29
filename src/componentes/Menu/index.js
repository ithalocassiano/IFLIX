import React from 'react';
import Logo from '../../assets/img/IFLIX-BLUE.png';

import { LogoImage, MenuWrapper} from './style.js';
import { Link } from   'react-router-dom';


import Button from '../Button';


function Menu(){
    return (
        <MenuWrapper className="Menu">
            <Link to="/">     
                <LogoImage className="Logo" src={Logo} alt="Iflix logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="cadastro/video">
                NOVO CLIPE
            </Button>
        </MenuWrapper>

    );
}


export default Menu;