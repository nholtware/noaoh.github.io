import {createTheme} from '@mui/material/styles';

export const brightRed = '#FE0103';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {main: brightRed},
    background: {default: '#000000', paper: '#262626'},
  },
  typography: {
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Ubuntu, 'Helvetica Neue', sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {WebkitTapHighlightColor: 'transparent', scrollBehavior: 'smooth'},
        a: {color: 'inherit'},
      },
    },
    MuiLink: {
      defaultProps: {underline: 'always'},
    },
  },
});

export default theme;
