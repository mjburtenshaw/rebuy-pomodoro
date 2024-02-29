import '@fontsource/museomoderno';
import '@fontsource/sofia-sans';
import '@fontsource/roboto';
import { darkTheme, lightTheme } from '../lib/themes';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles: CssBaseline,
    Provider: ThemeProvider,
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
    defaultTheme: 'light',
  }),
];

export default preview;
