import React from 'react';
import './App.css';
import Comment from './components/Comment/comment';
import Tick from './components/TickTok/tick';
import Form from './components/Form/form';
import Toggle from './components/Toggle/toggle';
import Greeting from './components/Greeting/greeting';
import LoginControl from "./components/LoginControl/login";
import ListItem from "./components/ListItem/list";
import BlogPost from "./components/BlogPost/post";
import Name from "./components/Form/name";
import Textarea from "./components/Form/textarea";
import Select from "./components/Form/select";
import Multiselect from "./components/Form/multiselect";
import MultiInput from "./components/Form/multiinput";
import NameRef from "./components/Form/nameref";
import File from "./components/Form/file";
const comment = {
    author: {
        name: 'Dat',
        avatarUrl: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg'
    },
    text: 'Comment test',
    date: '2021-07-17',
    count: 100
}
const blogPosts = [
    {id: 1, title: 'PHP'},
    {id: 2, title: 'JSP'},
    {id: 3, title: 'ASP'},
];

function App() {
    return (
        <div>
            <Comment author={comment.author} text={comment.text} date={comment.date} count={comment.count} />
            <Tick />
            <Form />
            <Toggle />
            <LoginControl />
            <BlogPost posts={blogPosts} />
            <Name />
            <Textarea />
            <Select />
            <Multiselect />
            <MultiInput />
            <NameRef />
            <File />
        </div>
    );
}

export default App;
