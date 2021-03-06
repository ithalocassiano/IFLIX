import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--primary);
  text-align: center;

  flex: 0;
  

  @media (max-width: 800px) {
    margin-bottom: 30px;
    padding-bottom:15px;
  }
`;
