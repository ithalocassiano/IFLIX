import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: .5px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 250px;
  width: 250px;
  height: 150px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .3;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }

  @media (max-width: 800px){
    flex: 0 0 200px;
    width: 200px;
    height: 110px;
  }
`;
