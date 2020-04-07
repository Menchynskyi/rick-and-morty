import React from 'react';
import ReactDOM from 'react-dom';
import { normalize } from 'styled-normalize';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { App } from './App';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  * {
    box-sizing: border-box;  
  }  

  html, body {
    margin: 0;
    background-color: ${(props) => props.theme.colors.background.primary};
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.typography.text.regular};
    color: ${(props) => props.theme.colors.text.primary};
  }

`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
