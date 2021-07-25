import React from 'react';
import Dialog from "./dialog";

class Error extends React.Component {
    render() {
        return (
            <Dialog type={'error'} title={this.props.title} content={this.props.content} />
        );
    }
}

export default Error;