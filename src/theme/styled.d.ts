import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: {
        primary: string;
        secondary: {
          main: string;
          hover: string;
        };
        tertiary: {
          main: string;
          hover: string;
        };
        disabled: string;
      };
      text: {
        primary: string;
        secondary: string;
        disabled: string;
      };
    };
    fontSize: {
      text: {
        extraLarge: string;
        large: string;
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
