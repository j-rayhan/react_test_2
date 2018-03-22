import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const mountNode = document.getElementById('app');

let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
}

const minusOne = () => {
  count--;
  renderCounterApp();
  console.log('addOne', count);
}
const reset = () => {
  count = 0;
  renderCounterApp();
  console.log('reset', count);
}




const renderCounterApp = () =>{
const template = (
  <div>
    <h1>Count : {count}</h1>
    <button onClick={addOne}> + </button>
    <button onClick={minusOne}> - </button>
    <button onClick={reset}> Reset </button>
  </div>
);
  ReactDOM.render(template,mountNode);
}

renderCounterApp();