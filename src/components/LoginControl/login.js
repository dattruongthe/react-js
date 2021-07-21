import React from 'react';
import Greeting from "../Greeting/greeting";

class LoginButton extends React.Component {
    render() {
        return (
            <button onClick={this.props.onclick}>Login</button>
        );
    }
}

class LogoutButton extends React.Component {
    render() {
        return (
            <button onClick={this.props.onclick}>Logout</button>
        );
    }
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);

        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({
            isLoggedIn: true
        })
    }

    handleLogoutClick() {
        this.setState({
            isLoggedIn: false
        })
    }

    render() {
        let button;
        let name = 'Dat';
        let isLoggedIn = this.state.isLoggedIn;
        if(!this.state.isLoggedIn) {
            button = <LoginButton onclick={this.handleLoginClick} />
        } else {
            button = <LogoutButton onclick={this.handleLogoutClick} />
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} name={name} />
                {button}
            </div>
        );
    }
}

export default LoginControl;