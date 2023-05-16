import { ThemeOptions } from "@mui/material/styles";

export const darkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#f4511e",
    },
    secondary: {
      main: "#689f38",
    },
    background: {
      default: "#2f1109",
      paper: "#1e0e0a",
    },
  },
};

export const lightTheme: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#f57f17",
    },
    secondary: {
      main: "#2b155e",
    },
    background: {
      default: "#ffcc80",
      paper: "#e8ca9f",
    },
  },
};
