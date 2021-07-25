import React from 'react';
import Dialog from "./dialog";

class Warning extends React.Component {
    render() {
        return (
            <Dialog type={'warning'} title={this.props.title} content={this.props.content} />
        );
    }
}

export default Warning;