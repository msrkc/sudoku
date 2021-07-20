import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { ThemeProvider } from "@emotion/react";

import { Grid } from "@/components";
import { StyledContent, StyledCard } from "@/components/styled";

import { GlobalStyles, theme } from "@/styles";

import configureStore from "@/store";

const store = configureStore();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <StyledContent data-cy="content">
          <StyledCard>
            <Grid />
          </StyledCard>
        </StyledContent>
      </Provider>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
