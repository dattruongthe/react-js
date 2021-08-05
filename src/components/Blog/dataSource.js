import React from 'react';

const comments = [
    {id: 1, post_id: 1, message: 'Comment 1', email: 'a@a.com', datetime: '2021-08-05 01:01:01'},
    {id: 2, post_id: 1, message: 'Comment 2', email: 'b@b.com', datetime: '2021-08-06 01:01:01'},
    {id: 3, post_id: 2, message: 'Comment 3', email: 'b@b.com', datetime: '2021-08-07 01:01:01'},
    {id: 4, post_id: 3, message: 'Comment 4', email: 'b@b.com', datetime: '2021-08-08 01:01:01'},
]

const posts = [
    {id: 1, title: 'Post 1', author: 'a@a.com', datetime: '2021-08-05 01:01:01'},
    {id: 2, title: 'Post 2', author: 'b@b.com', datetime: '2021-08-06 01:01:01'},
    {id: 3, title: 'Post 3', author: 'b@b.com', datetime: '2021-08-07 01:01:01'},
    {id: 4, title: 'Post 4', author: 'b@b.com', datetime: '2021-08-08 01:01:01'},
]

const DataSource = {
    getComments: () => { return comments },
    getBlogPost: () => { return posts }
}

export function componentDataSource(WrappedComponent, selectData) {
    return class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                data: selectData(DataSource)
            }
        }

        render() {
            return <WrappedComponent data={this.state.data} {...this.props} />
        }
    }
}