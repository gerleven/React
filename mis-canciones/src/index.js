import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { unstable_createMuiStrictModeTheme } from '@mui/material/styles';

const theme1 = unstable_createMuiStrictModeTheme();

const theme = createTheme({
  palette: {
    primary: {
      main: "#61DAFB",
    },
    // secondary: {
    //   main: red[500],
    // },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
