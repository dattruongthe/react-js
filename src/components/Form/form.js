import React from "react";

class Form extends React.Component {
    bindSubmit = (e) => {
        e.preventDefault();
        console.log('this is:', this);
    }
    render() {
        return (
            <form onSubmit={this.bindSubmit}>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default Form;