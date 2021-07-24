import React from 'react';
import ListItem from "../ListItem/list";

class BlogPost extends React.Component {
    render() {
        let posts = this.props.posts;
        return (
            <ListItem items={posts} />
        );
    }
}

export default BlogPost;