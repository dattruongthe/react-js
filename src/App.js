import React from 'react';
import './App.css';
import Comment from './components/Comment/comment';
import Tick from './components/TickTok/tick';
import Form from './components/Form/form';
import Toggle from './components/Toggle/toggle';
import Greeting from './components/Greeting/greeting';
import LoginControl from "./components/LoginControl/login";

const comment = {
    author: {
        name: 'Dat',
        avatarUrl: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg'
    },
    text: 'Comment test',
    date: '2021-07-17',
    count: 100
}

function App() {
    return (
        <div>
            <Comment author={comment.author} text={comment.text} date={comment.date} count={comment.count} />
            <Tick />
            <Form />
            <Toggle />
            <LoginControl />
        </div>
    );
}

export default App;
