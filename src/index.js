import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './comonent/IndecisionApp';
import { createClient } from 'http';

const mountNode = document.getElementById('app');

const app = {
    title: 'Indecision App',
    subtitle: 'Input Something in the Computer',
    options: ['First Option', 'Second Option']
  }

//StateLess functional Component
const User = (props) => {
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );

};

const User_old = function () {
    
};

ReactDOM.render(<IndecisionApp option={app.options} />,mountNode);