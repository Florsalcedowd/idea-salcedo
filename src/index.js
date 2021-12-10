import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#BA9568",
        },
        secondary: {
            main: "#ABB1FF",
        },
    },
    button: {
        textTransform: "none",
    },
    typography: {
        fontFamily: ["'Poppins'", "sans-serif"].join(","),
        button: {
            textTransform: "none",
        },
    },
    fontFamily: "'Poppins', sans-serif", // as an aside, highly recommend importing roboto font for Material UI projects! Looks really nice
});

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
