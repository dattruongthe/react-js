import React from "react";

class GuestGreeting extends React.Component {
    render() {
        return (
            <h1>Welcome guest</h1>
        );
    }
}

class UserGreeting extends React.Component {
    render() {
        return (
            <h1>Welcome, {this.props.name}</h1>
        );
    }
}

class Greeting extends React.Component {
    render() {
        if(this.props.isLoggedIn) {
            return <UserGreeting name={this.props.name} />
        }

        return <GuestGreeting />
    }
}

export default Greeting;