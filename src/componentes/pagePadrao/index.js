import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
    background-color: var(--black);
    color: var(--primary);
    
    flex: 1;
    
    padding-top: 150px;
    padding-left: 5%;
    padding-right: 5%;

`;


function PagePadrao({children}) {
    return (
        <>
            <Menu/>
               <Main>
                    {children}
               </Main>
                
                
            <Footer/>
        </>
    );
}

export default PagePadrao;