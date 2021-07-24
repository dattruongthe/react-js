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
        let name = 'Dat';
        let isLoggedIn = this.state.isLoggedIn;

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} name={name} />
                {!isLoggedIn? <LoginButton onclick={this.handleLoginClick} /> : <LogoutButton onclick={this.handleLogoutClick} />}
            </div>
        );
    }
}

export default LoginControl;