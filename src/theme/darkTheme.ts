import { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
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
    skeleton: {
      main: '#2E2E2E',
      highlight: '#303030',
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
