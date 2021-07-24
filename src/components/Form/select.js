import React from "react";

class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'JSP'};

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
                <select value={this.state.value} onChange={this.handleChange} >
                    <option value="PHP">PHP</option>
                    <option value="ASP">ASP</option>
                    <option value="JSP">JSP</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default Select;