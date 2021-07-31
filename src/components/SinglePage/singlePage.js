import React from 'react';
import TopMenu from "./topMenu";
import Slider from "./slider";
import Sidebar from "./sidebar";
import MainContent from "./mainContent";
import ThemeSwitch from "./themeSwitch";
import {ThemeContext, themes} from "./themeContext";
import './singlePage.css';

class SinglePage extends React.Component {
    constructor(props) {
        super(props);
        this.switchTheme = () => {
            this.setState(state => ({
                theme: state.theme === themes.dark ? themes.light : themes.dark,
            }));
        }
        this.state = {
            theme: themes.light,
            switchTheme: this.switchTheme
        }
    }
    render() {
        return (
            <div className={'singlePage'}>
                <ThemeContext.Provider value={this.state}>
                    <ThemeSwitch />
                    <TopMenu />
                    <Slider />
                    <div className='wrapper'>
                        <Sidebar />
                        <MainContent />
                    </div>
                </ThemeContext.Provider>
            </div>
        );
    }
}

export default SinglePage;