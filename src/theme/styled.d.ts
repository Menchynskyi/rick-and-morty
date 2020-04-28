import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: {
        primary: string;
        secondary: {
          main: string;
          transparent: string;
          hover: string;
          dark: string;
        };
        tertiary: {
          main: string;
          transparent: string;
          hover: string;
          dark: string;
        };
        disabled: {
          main: string;
          transparent: string;
          hover: string;
        };
        gray: {
          main: string;
          transparent: string;
          hover: string;
        };
        white: {
          main: string;
          transparent: string;
          hover: string;
        };
        black: {
          main: string;
          transparent: string;
          hover: string;
        };
      };
      text: {
        primary: string;
        secondary: string;
        disabled: string;
      };
      skeleton: {
        main: string;
        highlight: string;
      };
    };
    fontSize: {
      text: {
        extraLarge: string;
        large: string;
        medium: string;
        regular: string;
        small: string;
      };
      heading: {
        extraLarge: string;
        large: string;
        regular: string;
        small: string;
      };
    };
    fontFamily: string;
    hoverOpacity: string;
    borderRadius: string;
  }
}
