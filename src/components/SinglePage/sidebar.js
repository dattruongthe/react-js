import React from 'react';
import {ThemeContext} from "./themeContext";

const menuItems = [
    'Clothes','Toys','Shoes','Phones'
];

class Sidebar extends React.Component {
    render() {
        let theme = this.context;
        return (
            <ul className={'sidebar '+theme.theme.className}>
                {menuItems.map(menuItem => (
                    <li key={menuItem}>
                        {menuItem}
                    </li>
                ))}
            </ul>
        )
    }
}

Sidebar.contextType = ThemeContext;

export default Sidebar;