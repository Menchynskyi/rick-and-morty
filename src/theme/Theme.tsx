import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { SkeletonTheme } from 'react-loading-skeleton';
import { darkTheme } from './darkTheme';
import { lightTheme } from './lightTheme';

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
  html {
    overflow-y: scroll;
  }
`;

type ThemeProps = {
  lightMode?: boolean;
};

export const Theme: React.FC<ThemeProps> = ({ children, lightMode }) => {
  const theme = lightMode ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <SkeletonTheme
        color={theme.colors.skeleton.main}
        highlightColor={theme.colors.skeleton.highlight}
      >
        <GlobalStyle />
        {children}
      </SkeletonTheme>
    </ThemeProvider>
  );
};
