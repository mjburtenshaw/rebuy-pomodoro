import { COLORS, FONTS } from './theme.constants';
import { muiTypographyOptions } from './MuiTypography.theme';
import { createTheme } from '@mui/material/styles';
export const sharedThemeOptions = {
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
    },
};
const lightThemeOptions = {};
const darkThemeOptions = {
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
