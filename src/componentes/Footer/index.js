import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/IFLIX-BLUE.png';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img src={Logo} alt="Logo IFLIX" height="30px" />
      </a>
      <h3>
        As melhores músicas você encontra aqui!! 
      </h3>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>

        💞
      </p>
    </FooterBase>
  );
}

export default Footer;
