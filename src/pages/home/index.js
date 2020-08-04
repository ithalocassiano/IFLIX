import React from 'react';
import styled from 'styled-components';
import Menu from '../../componentes/Menu';
import Footer from '../../componentes/Footer';
import Carousel from '../../componentes/Carousel';
import BannerMain from '../../componentes/BannerMain';
import dadosIniciais from '../../data/dados_iniciais.json';


const AppWrapper = styled.div`
  background: var(--grayDark);
  padding-top: 115px;
  

  @media (max-width: 800px){
    padding-top: 30px;
  }
`;



function Home() {
  return (
    <AppWrapper>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[3].titulo}

        url={dadosIniciais.categorias[0].videos[3].url}

        videoDescription={""}
      />
      
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      /> 

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[4]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[5]}
      />

      

      <Footer />
      

    </AppWrapper>
  );
}

export default Home;
