import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const mountNode = document.getElementById('app');

const app = {
  title: 'App Title',
  subtitle: 'Input Something in the Computer',
  options: []
}

const onFormSubmit = (e) =>{
  e.preventDefault();
  // console.log('form submitted');
  const option = e.target.elements.option.value;
  if(option){
    app.options.push(option);
    e.target.elements.option.value='';
  }
  render();
}

const onRemoveAll = () =>{
  app.options = [];
  render();
}

const onMakeDecision = () =>{
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
}

const numbers = [22,33,44];

const render = () => {
  const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{(app.options.length > 0)? ('Here are your option'):('NO options')}</p>
    <p>{app.options.length}</p>
    <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I do?</button>
    <button onClick={onRemoveAll}>Remove All</button>
    {numbers.map((number) =>{
        return <p key={number}>Number : {number}</p>
      })
    }
    <ol>
      {app.options.map((option) => <li key={option}>{option}</li>) }
    </ol>
    <form onSubmit={onFormSubmit}>
      <input type="text" name="option" />
      <button>Add Item</button>
    </form>
  </div>
);

ReactDOM.render(template,mountNode);
}

render();