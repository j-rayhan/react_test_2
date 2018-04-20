import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './component/IndecisionApp';
import { createClient } from 'http';

const mountNode = document.getElementById('app');

const app = {
    title: 'Indecision App',
    subtitle: 'Input Something in the Computer',
    options: ['First Option', 'Second Option']
  }

//transform-class-properties example
class User {
    constructor(){
        this.name = "rayhan";
    }
};

class NewUser {
    name = 'johir';
}

const oldUser = new User();
console.log(oldUser);

const newUser = new NewUser();
console.log(newUser);

ReactDOM.render(<IndecisionApp option={app.options} />,mountNode);