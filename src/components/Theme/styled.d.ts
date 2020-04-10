import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: {
        primary: string;
        secondary: string;
        disabled: string;
      };
      text: {
        primary: string;
        secondary: string;
        disabled: string;
      };
    };
    typography: {
      text: {
        extraLarge: string;
        large: string;
        regular: string;
      };
    };
    fontFamily: string;
    hoverOpacity: string;
    borderRadius: string;
  }
}
