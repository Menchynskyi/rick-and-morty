import { DefaultTheme } from 'styled-components';
import { size } from './breakpoints';

export const darkTheme: DefaultTheme = {
  colors: {
    background: {
      primary: 'rgb(28, 28, 28)',
      secondary: {
        main: 'rgb(17, 176, 200)',
        transparent: 'rgba(17, 176, 200, 0.9)',
        hover: 'rgba(17, 176, 200, 0.8)',
        dark: 'rgba(17, 176, 200, 0.5)',
      },
      tertiary: {
        main: 'rgb(255, 131, 17)',
        transparent: 'rgba(255, 131, 17, 0.9)',
        hover: 'rgba(255, 131, 17, 0.8)',
        dark: 'rgba(255, 131, 17, 0.5)',
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
        dark: 'rgba(46, 46, 46, 0.9)',
      },
      white: {
        main: 'rgb(232, 232, 232)',
        transparent: 'rgba(232, 232, 232, 0.9)',
        hover: 'rgba(232, 232, 232, 0.8)',
      },
      black: {
        main: 'rgb(28, 28, 28)',
        transparent: 'rgba(28, 28, 28, 0.9)',
        hover: 'rgba(28, 28, 28, 0.8)',
      },
    },
    text: {
      primary: '#E8E8E8',
      secondary: '#B0B0B0',
      disabled: '#ABABAB',
      card: '#E8E8E8',
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
  device: {
    mobileS: `only screen and (max-width: ${size.mobile - 1}px)`,
    mobile: `only screen and (max-width: ${size.tablet - 1}px)`,
    tablet: `only screen and (min-width: ${size.tablet}px)`,
    tabletOnly: `only screen and (min-width: ${
      size.tablet
    }px) and (max-width: ${size.laptop - 1}px)`,
    laptop: `only screen and (min-width: ${size.laptop}px)`,
    laptopOnly: `only screen and (min-width: ${
      size.laptop
    }px) and (max-width: ${size.desktop - 1}px)`,
    desktop: `only screen and (min-width: ${size.desktop}px)`,
  },
};
