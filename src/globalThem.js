import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";



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
  overries: {

  }
});

export default theme;