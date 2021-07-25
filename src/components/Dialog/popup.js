import React from 'react';

class Popup extends React.Component {
    render() {
        return (
            <div className={'Popup Popup-type-'+this.props.type}>
                {this.props.children}
            </div>
        );
    }
}

export default Popup;