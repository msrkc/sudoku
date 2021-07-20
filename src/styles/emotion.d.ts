import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      background: string;
      black: string;
      blue: string;
      lightBlue: string;
      white: string;
    };
    transition: string;
  }
}
