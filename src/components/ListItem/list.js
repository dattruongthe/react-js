import React from 'react';

class ListItem extends React.Component {
    render() {
        let items = this.props.items;
        let listItem = items.map( (item) => <li key={item.id}>{item.title}</li> );
        return (
            <ul>{listItem}</ul>
        );
    }
}

export default ListItem;