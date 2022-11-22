import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// import { unstable_createMuiStrictModeTheme } from "@mui/material/styles";
// const theme1 = unstable_createMuiStrictModeTheme();

const theme = createTheme({
  palette: {
    primary: {
      main: "#61DAFB",
      dark: "#005ea8",
      light: "#ddf7fe",
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            borderWidth: 1,
          },
        },
      },
    },
    MuiSnackbarContent:{
      defaultProps: {
        sx: {
          backgroundColor: "#0090db",
        },
        
      }
    }
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
