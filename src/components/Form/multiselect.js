import React from "react";

class Multiselect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ['ASP','JSP']};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        let selectedOptions = event.target.selectedOptions;
        let values = [];
        for(let i = 0; i < selectedOptions.length; i++) {
            values.push(selectedOptions[i].value);
        }
        this.setState({value: values});
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.value);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <select multiple={true} value={this.state.value} onChange={this.handleChange} >
                    <option value="PHP">PHP</option>
                    <option value="ASP">ASP</option>
                    <option value="JSP">JSP</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default Multiselect;