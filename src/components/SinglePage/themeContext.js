import React from 'react';

export const themes = {
    light: {
        className: 'light'
    },
    dark: {
        className: 'dark'
    },
};

export const ThemeContext = React.createContext({
    theme: themes.light,
    switchTheme: () => {}
});