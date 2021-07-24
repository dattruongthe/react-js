import React from "react";

class NameRef extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.input = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.input.current.value);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" ref={this.input}/>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default NameRef;