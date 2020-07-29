import styled from 'styled-components';
import Button from '../Button';


export const LogoImage = styled.img`

    max-height: 60px;
    padding-top: 5px;
    
    @media (max-width: 800px) {
       
        max-height: 40px;
    }
`;


export const MenuWrapper = styled.nav`
    z-index: 100;
    display: flex;
    width: 100%;
    height: 80px;
    

    position: fixed;
    top: 0;
    left: 0;
    padding: 4%;

    background-color: var(--black);
    border-bottom: 2px solid var(--primary);

    
    justify-content: space-between;
    align-items: center;

    @media (max-width: 800px) {
        height: 40px;
        justify-content: center;
    }
`;


export const ButtonLink = styled(Button)`
    color: var(--primary);
    border: 1px solid var(--primary);

    padding: 16px 24px;
    font-size: 16px;
    border-radius: 4px;

    font-weight: bold;
    text-decoration: none;

    transition: opacity .3s;
    &:hover,
    &:focus{
        opacity: .5;
    }

    @media (max-width: 800px){
        position: fixed;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: var(--primary);
        color: var(--primay);
        outline: 0;
        text-align: center;
        border: 0;
        border-radius: 0;
    }
`;