import React from 'react';
import Popup from "./popup";

class Dialog extends React.Component {
    render() {
        return (
            <Popup type={this.props.type}>
                <div className="Dialog">
                    <h2 className="Dialog-title">{this.props.title}</h2>
                    <div className="Dialog-content">
                        {this.props.content}
                    </div>
                </div>
            </Popup>
        );
    }
}

export default Dialog;