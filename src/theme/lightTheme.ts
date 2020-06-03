import { DefaultTheme } from 'styled-components';
import { darkTheme } from './darkTheme';

export const lightTheme: DefaultTheme = {
  ...darkTheme,
  colors: {
    background: {
      primary: 'rbg(232, 232, 232)',
      secondary: {
        main: 'rgb(13, 150, 171)',
        transparent: 'rgba(13, 150, 171)',
        hover: 'rgba(13, 150, 171, 0.9)',
        dark: 'rgba(13, 150, 171, 0.1)',
      },
      tertiary: {
        main: 'rgb(229, 121, 21)',
        transparent: 'rgba(229, 121, 21)',
        hover: 'rgba(229, 121, 21, 0.9)',
        dark: 'rgba(229, 121, 21, 0.1)',
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
        dark: 'rgba(222, 222, 222, 0.6)',
      },
      white: {
        main: 'rgb(232, 232, 232)',
        transparent: 'rgba(232, 232, 232, 0.9)',
        hover: 'rgba(232, 232, 232, 0.8)',
      },
      black: {
        main: 'rgb(159, 159, 159)',
        transparent: 'rgba(159, 159, 159, 0.9)',
        hover: 'rgba(159, 159, 159, 0.8)',
      },
    },
    text: {
      primary: '#1C1C1C',
      secondary: '#808080',
      disabled: '#ABABAB',
      card: '#4B4B4B',
    },
    skeleton: {
      main: '#EEEEEE',
      highlight: '#F7F7F7',
    },
  },
};
