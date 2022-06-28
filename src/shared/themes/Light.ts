import {createTheme} from '@mui/material';
import { cyan, yellow } from '@mui/material/colors';

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: '#515151',
      dark: '#3c3c3c',
      light:'#8c8c8c',
      contrastText: '#ffffff',

    },

    secondary: {
      main: cyan[500],
      dark: cyan[400],
      light: cyan[300],
      contrastText: '#ffffff',

    },

    background: {
      default: '#f7f6f3',
      paper: '#ffffff',
    }
  }
});