import React from 'react';
import Dialog from "./dialog";

class Notice extends React.Component {
    render() {
        return (
            <Dialog type={'notice'} title={this.props.title} content={this.props.content} />
        );
    }
}

export default Notice;