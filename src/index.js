import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './component/IndecisionApp';
import { createClient } from 'http';

const mountNode = document.getElementById('app');

const Layout = (props) => {
    return (
        <div>
            <p>Header</p>
                {props.content}
            <p>footer</p>
        </div>
    );
}

const template = (
    <div>
        <h1>template title</h1>
        <p>Do something</p>
    </div>
)


ReactDOM.render(<Layout content={template}/>,mountNode);