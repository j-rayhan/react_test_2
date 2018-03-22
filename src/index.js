import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const mountNode = document.getElementById('app');

const app = {
  title: 'App Title',
  subtitle: 'Input Something in the Computer',
  options: ['one', 'two']
}

const onFormSubmit = (e) =>{
  e.preventDefault();
  console.log('form submitted')
}



const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{(app.options.length > 0)? ('Here are your option'):('NO options')}</p>
    <ol>
      <li> Item one </li>
    </ol>
    <form onSubmit={onFormSubmit}>
      <input type="text" name="option" />
      <button>Add Item</button>
    </form>
  </div>
);

ReactDOM.render(template,mountNode);
