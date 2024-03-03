import { AppContext } from './contexts';
import { CssBaseline } from '@mui/material';
import { darkTheme, lightTheme, THEMES, FONTS } from 'rebuy-pomodoro-ui';
import { router } from './router';
import { RouterProvider } from '@tanstack/react-router';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from '@mui/material/styles';
import { useContext } from 'react';

export function App() {
  const { theme } = useContext(AppContext);
  return (
    <ThemeProvider theme={theme === THEMES.DARK ? darkTheme : lightTheme}>
      <CssBaseline />
      <SnackbarProvider style={{ fontFamily: FONTS.SOFIA_SANS }}>
        <RouterProvider router={router} />
      </SnackbarProvider>
    </ThemeProvider>
  );
}
