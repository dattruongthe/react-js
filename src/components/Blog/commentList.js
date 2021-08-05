import React from 'react';
import {componentDataSource} from "./dataSource";

class CommentList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.data.map( (comment) => (
                    <li key={comment.id}>{comment.message}</li>
                ))}
            </ul>
        );
    }
}

const CommentListWithDataSource = componentDataSource(
    CommentList,
    (DataSource) => DataSource.getComments()
);

export default CommentListWithDataSource;