import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: {
        primary: string;
        secondary: string;
        tertiary: string;
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
