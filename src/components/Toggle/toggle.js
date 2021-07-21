import React from "react";

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true, test: 'abc'};

        this.bindClick = this.bindClick.bind(this);
    }
    bindClick() {
        this.setState(
            prevState => ({isToggleOn: !prevState.isToggleOn})
        )
    }
    render() {
        return (
            <button onClick={this.bindClick}>
                {this.state.isToggleOn? 'ON' : 'OFF'}
            </button>
        );
    }
}

export default Toggle;