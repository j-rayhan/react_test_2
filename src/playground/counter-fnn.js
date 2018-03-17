"use strict"

import React from 'react'
import ReactDOM from 'react-dom'


let count = 0;

const addOne = () => {
	count++;
	rendreCounterApp();
}
const minusOne = () => {
	count--;
	rendreCounterApp();
}
const reset = () => {
	count = 0;
	rendreCounterApp();
}

const appRoot = document.getElementById('app');

const rendreCounterApp = () =>{
	const template =(
		<div>
			<h1>Count : {count}</h1>
			<button onClick={addOne}>+1</button>
			<button onClick={minusOne}>-1</button>
			<button onClick={reset}>reset</button>
		</div>
		)
	ReactDOM.render(template, appRoot);
}

rendreCounterApp();
