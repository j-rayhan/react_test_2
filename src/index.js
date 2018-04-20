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
        // Error fix {Cannot read property 'name' of undefined}
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting(){
        return `Hi this is ${this.name}`;
    }
};

const oldUser = new User();
const getGree = oldUser.getGreeting;
console.log(getGree());


class NewUser {
    name = 'johir';
    getGreeting = () =>  {
        return `Hi this is ${this.name}`;
    }
}



const newUser = new NewUser();
console.log(newUser.getGreeting());

ReactDOM.render(<IndecisionApp option={app.options} />,mountNode);