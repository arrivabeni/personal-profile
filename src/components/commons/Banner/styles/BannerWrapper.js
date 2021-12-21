/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const BannerWrapper = styled.div`
  font-family: 'Roboto Condensed', sans-serif;
  font-style: normal;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  width: 100vw;
  height: 235px;
  left: 1px;

  h1{
    text-transform: uppercase;
    font-weight: 400;
    font-size: 55px;
  }
  h3{
    font-weight: 300;
    font-size: 38px;
  }
`;
