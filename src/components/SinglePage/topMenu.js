import React from 'react';
import {ThemeContext} from "./themeContext";

const menuItems = [
    'Home','About Us','Shop','Contact'
];

class TopMenu extends React.Component {
    render() {
        let theme = this.context;
        // if(theme.theme.className === 'dark') {
        //     throw new Error('I crashed!');
        // }
        return (
            <ul className={'topMenu '+theme.theme.className}>
                {menuItems.map((menuItem) =>
                    <li key={menuItem}>
                        <a href='#'>{menuItem}</a>
                    </li>
                )}
            </ul>
        )
    }
}

TopMenu.contextType = ThemeContext;

export default TopMenu;