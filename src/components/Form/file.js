import React from "react";

class File extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.fileInput = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.fileInput.current.files[0].name);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="file" ref={this.fileInput}/>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default File;