import { COLORS, FONTS } from './theme.constants';
import { muiTypographyOptions } from './MuiTypography.theme';
import { ThemeOptions, createTheme } from '@mui/material/styles';

export const sharedThemeOptions: ThemeOptions = {
  components: {
    ...muiTypographyOptions.components,
  },
  palette: {
    primary: {
      main: COLORS.REBUY_SOLID_BLUE,
      contrastText: 'white',
    },
    secondary: {
      main: COLORS.REBUY_GRADIENT_VIOLET,
    },
  },
  typography: {
    fontFamily: FONTS.SOFIA_SANS,
    h2: {
      color: 'white',
      fontSize: '2.5vw',
      fontWeight: 500,
    },
  },
};

const lightThemeOptions: ThemeOptions = {};

const darkThemeOptions: ThemeOptions = {
  palette: {
    ...sharedThemeOptions.palette,
    mode: 'dark',
  },
};

export const lightTheme = createTheme({
  ...sharedThemeOptions,
  ...lightThemeOptions,
});

export const darkTheme = createTheme({
  ...sharedThemeOptions,
  ...darkThemeOptions,
});
