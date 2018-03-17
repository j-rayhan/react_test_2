"use strict"

function squer(x) {
	return x*x;
}

console.log(squer(3));

const sqArrow = (x) => {
	return x*x;
}

const sqArrow2 = (x) => x*x;

console.log(sqArrow(4));
console.log(sqArrow2(5));

// Challange - use arrow functions

// getFirstName('Johir rayhan') -> Johir

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Johir Rayhan'));