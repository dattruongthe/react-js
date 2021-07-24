import React from "react";

class Textarea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Default value text area'};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value:event.target.value})
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.value);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <textarea value={this.state.value} onChange={this.handleChange} />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default Textarea;