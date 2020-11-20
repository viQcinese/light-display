import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
$globe-width:   12px;
$globe-height:  28px;
$globe-spacing: 40px;
$globe-spread: 3px;
$light-off-opacity: 0.4;

  * {
    box-sizing: border-box;
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
  align-items: center;
  justify-content: center;
`;
