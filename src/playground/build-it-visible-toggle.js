"use strict"
import React from "react"

import ReactDOM from "react-dom"

let visibility = false;

const toggleVisibility = () => {
	visibility = !visibility;
	render();
}

const render = () =>{
	const jsx =(
			<div>
				<h1>Visibility toggle</h1>
				<button onMouseEnter={toggleVisibility} onMouseLeave={toggleVisibility}>
					{(visibility)?('Hide details'):('Show ditails')}
				</button>
				{
					visibility && (
							<div>
								Hey, These are some details you can now see.
							</div>
						)
				}
			</div>
		);
	ReactDOM.render(jsx, document.getElementById('app'));
}

render();