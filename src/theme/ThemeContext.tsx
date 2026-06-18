import { createContext } from 'react';

export enum Theme {
    light = 'light',
    dark = 'dark',
}

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const KEY_LOCAL_THEME = 'app_theme';
export const ThemeContext = createContext<ThemeContextProps>({});
