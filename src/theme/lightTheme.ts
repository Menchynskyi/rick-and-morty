import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  colors: {
    background: {
      primary: 'rbg(232, 232, 232)',
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
        main: 'rgb(212, 212, 212)',
        transparent: 'rgba(212, 212, 212, 0.9)',
        hover: 'rgba(212, 212, 212, 0.8)',
      },
      gray: {
        main: 'rgb(222, 222, 222)',
        transparent: 'rgba(222, 222, 222, 0.9)',
        hover: 'rgba(222, 222, 222, 0.8)',
      },
      white: {
        main: 'rgb(232, 232, 232)',
        transparent: 'rgba(232, 232, 232, 0.9)',
        hover: 'rgba(232, 232, 232, 0.8)',
      },
    },
    text: {
      primary: '#1C1C1C',
      secondary: '#808080',
      disabled: '#ABABAB',
    },
    skeleton: {
      main: '#D6D6D6',
      highlight: '#E0E0E0',
    },
  },
  fontSize: {
    text: {
      extraLarge: '20px',
      large: '18px',
      medium: '16px',
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
