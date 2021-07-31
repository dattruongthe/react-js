import React from 'react';
import {ThemeContext} from "./themeContext";

class Slider extends React.Component {
    render() {
        let theme = this.context;
        return (
            <div className={'slider '+theme.theme.className}>
                <h1>SINGLE PAGE APPLICATION</h1>
            </div>
        )
    }
}

Slider.contextType = ThemeContext;

export default Slider;