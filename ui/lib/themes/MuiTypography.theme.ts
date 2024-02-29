import { ThemeOptions } from '@mui/material/styles';
import { COLORS, FONTS } from './theme.constants';

export const muiTypographyOptions: ThemeOptions = {
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: ({ theme }) => ({
          color:
            theme.palette.mode === 'dark' ? 'white' : COLORS.REBUY_SOLID_BLUE,
          flexShrink: 0,
          fontFamily: FONTS.MUSEO_MODERNO,
          fontSize: '3.25vw',
          fontStyle: 'normal',
          fontWeight: 400,
          leadingTrim: 'both',
          letterSpacing: '-0.2vw',
          textEdge: 'cap',
        }),
      },
    },
  },
};
