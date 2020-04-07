import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: {
        primary: string;
        secondary: string;
      };
      text: {
        primary: string;
        secondary: string;
      };
    };
    typography: {
      text: {
        regular: string;
      };
    };
    fontFamily: string;
  }
}
