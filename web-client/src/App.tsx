import { AppContext } from './contexts';
import { CssBaseline } from '@mui/material';
import { darkTheme, lightTheme, THEMES } from 'rebuy-pomodoro-ui';
import { router } from './router';
import { RouterProvider } from '@tanstack/react-router';
import { ThemeProvider } from '@mui/material/styles';
import { useContext } from 'react';

export function App() {
  const { theme } = useContext(AppContext);
  return (
    <ThemeProvider theme={theme === THEMES.DARK ? darkTheme : lightTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
