import { THEMES } from 'rebuy-pomodoro-ui';

export type NoInfer<T> = [T][T extends unknown ? 0 : never];

export type ThemeKey = keyof typeof THEMES;

export type Theme = (typeof THEMES)[ThemeKey];
