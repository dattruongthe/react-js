import React from 'react';
import {ThemeContext} from "./themeContext";

class ThemeSwitch extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {({theme, switchTheme}) => (
                    <button onClick={switchTheme}>{console.log(switchTheme)}Switch Theme</button>
                )}
            </ThemeContext.Consumer>

        )
    }
}

ThemeSwitch.contextType = ThemeContext;

export default ThemeSwitch;