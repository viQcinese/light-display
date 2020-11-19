import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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
