import { createTheme } from "@mui/material";



const theme = createTheme({
  typography: {

    fontFamily: [
      'Inter',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  },
  palette: {
    primary: {
      main: "#307465",
    },
  },
});

export default theme;
