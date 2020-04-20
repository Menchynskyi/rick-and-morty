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
      secondary: {
        main: 'rgb(17, 176, 200)',
        transparent: 'rgba(17, 176, 200, 0.9)',
        hover: 'rgba(17, 176, 200, 0.8)',
      },
      tertiary: {
        main: 'rgb(255, 131, 17)',
        transparent: 'rgba(255, 131, 17, 0.9)',
        hover: 'rgba(255, 131, 17, 0.8)',
      },
      disabled: {
        main: 'rgb(110, 110, 110)',
        transparent: 'rgba(110, 110, 110, 0.9)',
        hover: 'rgba(110, 110, 110, 0.8)',
      },
      gray: {
        main: 'rgb(46, 46, 46)',
        transparent: 'rgba(46, 46, 46, 0.9)',
        hover: 'rgba(46, 46, 46, 0.8)',
      },
    },
    text: {
      primary: '#E8E8E8',
      secondary: '#B0B0B0',
      disabled: '#ABABAB',
    },
  },
  fontSize: {
    text: {
      extraLarge: '20px',
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
  hoverOpacity: '0.8',
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
    font-size: ${(props) => props.theme.fontSize.text.regular};
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
