import { ThemeOptions } from "@mui/material/styles";

export const darkTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#4dd0e1',
    },
    secondary: {
      main: '#f06292',
    },
    background: {
      default: '#01201b',
      paper: '#021613',
    },
  },
};

export const lightTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#7e57c2',
    },
    secondary: {
      main: '#224c24',
    },
    background: {
      default: '#d1c4e9',
      paper: '#e1bee7',
    },
  },
};
