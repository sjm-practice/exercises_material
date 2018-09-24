import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { red, amber } from "@material-ui/core/colors";
import App from "../imports/ui/App";

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: {
      main: amber.A400,
      light: amber[200],
      dark: amber[700],
    },
    type: "dark",
  },
  spacing: {
    unit: 10,
  },
});

Meteor.startup(() => {
  render(
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>,
    document.getElementById("render-target"),
  );
});
