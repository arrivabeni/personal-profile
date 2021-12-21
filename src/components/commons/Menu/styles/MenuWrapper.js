/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const MenuWrapper = styled.nav`
  font-family: 'Roboto Condensed', sans-serif;
  font-style: normal;
  font-weight: 400;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  width: 100vw;
  height: 67px;
  left: 1px;
  top: 235px;

  background: #90CAF9;
  border-top-style: solid;
  border-color: #304FFE;

  a{
    text-decoration: none;
  }
`;

MenuWrapper.LeftSide = styled.div`
  padding: 0;
  margin: 0;
  order: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: space-between;
  align-items: center;
  width: 50vw;

  div{
    display: flex;
    justify-content: center;
    align-content: space-between;
    align-items: center;
    width: 136px;
    height: 100%;
    background-color: #304FFE;
    a{
      font-size: 38px;
      color: #FFFFFF;
    }
  }

`;

MenuWrapper.RightSide = styled.div`
  padding: 0;
  margin: 0;
  order: 1;
  display: flex;
  justify-content: center;
  align-content: space-between;
  align-items: center;
  width: 50vw;

  a{
    padding: 20px;
    font-size: 28px;
    color: #000000;
  }
`;
