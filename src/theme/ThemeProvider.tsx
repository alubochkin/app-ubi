import { useMemo, useState } from 'react';
import { KEY_LOCAL_THEME, Theme, ThemeContext } from './ThemeContext';

const defaultTheme = (localStorage.getItem(KEY_LOCAL_THEME) as Theme) || Theme.light;

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme]
    );

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
