import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const mountNode = document.getElementById('app');

let count = 0;
const addOne = () => {
  count++;
  console.log('addOne', count);
}

const minusOne = () => {
  count--;
  console.log('addOne', count);
}
const reset = () => {
  count = 0;
  console.log('reset', count);
}
const template = (
  <div>
    <h1>Count : {count}</h1>
    <button onClick={addOne}> + </button>
    <button onClick={minusOne}> - </button>
    <button onClick={reset}> Reset </button>
  </div>
)

ReactDOM.render(template,mountNode);