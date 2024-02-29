import { createContext } from 'react';
import { Theme } from '../../global.types';
import { noOp } from '../../global.utils';

type TAppContext = {
  handleThemeChange: (nextTheme: Theme) => void;
  theme: Theme;
};

export const AppContext = createContext<TAppContext>({
  handleThemeChange: noOp,
  theme: 'light',
});
