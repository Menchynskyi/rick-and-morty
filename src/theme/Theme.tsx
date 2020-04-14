import React from 'react';
import {
  DefaultTheme,
  createGlobalStyle,
  ThemeProvider,
} from 'styled-components';
import { normalize } from 'styled-normalize';

export const theme: DefaultTheme = {
  colors: {
    background: {
      primary: '#1C1C1C',
      secondary: '#11B0C8',
      tertiary: '#FF8311',
      disabled: '#6E6E6E',
    },
    text: {
      primary: '#E8E8E8',
      secondary: '#ff9',
      disabled: '#ABABAB',
    },
  },
  typography: {
    text: {
      extraLarge: '22px',
      large: '18px',
      regular: '14px',
      small: '12px',
    },
    heading: {
      extraLarge: '36px',
      large: '34px',
      regular: '32px',
      small: '30px',
    },
  },
  fontFamily: `'Open Sans', 'Arial', sans-serif`,
  hoverOpacity: '0.85',
  borderRadius: '8px',
};

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

export const Theme: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
