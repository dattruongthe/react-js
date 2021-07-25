import React from 'react';
import './App.css';
import FileUpload from "./components/FileUpload/file";
import Error from "./components/Dialog/error";

function App() {
    return (
        <div>
            <FileUpload />
            <Error title={'Error!!!'} content={'This is error message'} />
        </div>
    );
}

export default App;
