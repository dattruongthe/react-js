import React from 'react';
import {componentDataSource} from "./dataSource";

class BlogPost extends React.Component {
    render() {
        return (
            <ul>
                {this.props.data.map( (post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        );
    }
}

const BlogPostWithDataSource = componentDataSource(
    BlogPost,
    (DataSource) => DataSource.getBlogPost()
);

export default BlogPostWithDataSource;