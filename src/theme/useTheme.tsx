import { useContext } from 'react';
import { KEY_LOCAL_THEME, Theme, ThemeContext } from './ThemeContext';

export function useTheme() {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.light ? Theme.dark : Theme.light;
        setTheme?.(newTheme);
        localStorage.setItem(KEY_LOCAL_THEME, newTheme);
    };

    return { theme, toggleTheme, checked: theme === Theme.dark };
}
