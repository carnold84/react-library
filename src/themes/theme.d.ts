import 'styled-components';

// add types for theme to styled components
// https://styled-components.com/docs/api#typescript
declare module 'styled-components' {
  export interface Theme {
    colors: {
      neutral: {
        color50: string;
        color100: string;
        color200: string;
        color300: string;
        color400: string;
        color500: string;
        color600: string;
        color700: string;
        color800: string;
        color900: string;
      };
      primary: {
        color50: string;
        color100: string;
        color200: string;
        color300: string;
        color400: string;
        color500: string;
        color600: string;
        color700: string;
        color800: string;
        color900: string;
      };
      text: {
        color100: string;
        color200: string;
        color300: string;
        color400: string;
        alt100: string;
        alt200: string;
        alt300: string;
        alt400: string;
      };
    };
    button: {
      bgColor: string;
      borderColor: string;
      color: string;
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      _disabled: {
        bgColor: string;
        borderColor: string;
        color: string;
      };
      _hover: {
        bgColor: string;
        borderColor: string;
        color: string;
      };
      _primary: {
        bgColor: string;
        borderColor: string;
        color: string;
        _disabled: {
          bgColor: string;
          borderColor: string;
          color: string;
        };
        _hover: {
          bgColor: string;
          borderColor: string;
          color: string;
        };
      };
    };
    checkbox: {
      icon: {
        fill: string;
      };
      label: {
        color: string;
      };
      _hover: {
        icon: {
          fill: string;
        };
        label: {
          color: string;
        };
      };
    };
    fontFamily: string;
    global: {
      color: string;
      htmlFontFamily: string;
      htmlFontSize: string;
      htmlFontWeight: number;
    };
    header: {
      backgroundColor: string;
      borderColor: string;
    };
    id: string;
    label: string;
    typography: {
      color: string;
      fontFamily: string;
      fontWeight: number;
    };
  }
}
