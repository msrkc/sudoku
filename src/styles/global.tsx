import React from "react";
import { useTheme, css, Global } from "@emotion/react";

const GlobalStyles = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        html {
          height: 100%;
          body {
            display: flex;
            flex-direction: column;
            height: 100%;
            margin: 0;

            #root {
              background: ${theme.colors.background};
              color: ${theme.colors.black};
              display: flex;
              font-family: sans-serif;
              height: 100%;
              justify-content: center;
              padding: 15px;
            }
          }
        }
      `}
    />
  );
};

export default GlobalStyles;
