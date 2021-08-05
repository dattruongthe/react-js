import React from 'react';
import './App.css';
import CommentList from "./components/Blog/commentList";
import BlogPostWithDataSource from "./components/Blog/blogPost";
function App() {
    return (
        <>
            <CommentList />
            <BlogPostWithDataSource />
        </>
    );
}

export default App;
