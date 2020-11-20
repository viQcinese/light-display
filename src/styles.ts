import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
$globe-width:   12px;
$globe-height:  28px;
$globe-spacing: 40px;
$globe-spread: 3px;
$light-off-opacity: 0.4;

  * {
    box-sizing: border-box;
    font-family: 'Electrolize', sans-serif;
    letter-spacing: 2px;
  }

  body {
    background: black;
    margin: 0;
    color: white;
  }
`;

export const Content = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ControllerAndDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.h1`
  text-align: center;
  text-shadow: 0 0 40px white;
  font-size: 64px;
`;
