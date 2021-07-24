import React from "react";

class MultiInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            isSubscribed: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        let value = (event.target.type === 'checkbox')? event.target.checked: event.target.value;
        let name = event.target.name;
        this.setState({[name]: value});
    }
    handleSubmit(event) {
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="email" type="text" value={this.state.email} onChange={this.handleChange}/>
                <input name="isSubscribed" type="checkbox" checked={this.state.isSubscribed} onChange={this.handleChange} />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default MultiInput;