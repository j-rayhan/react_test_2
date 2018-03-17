"use stritc"

// arguments object - no longer bound

function addOld(a,b) {
	console.log(arguments);
	return a +b;
}
const add = (a,b) => {
	console.log(arguments);
	return a+b;
}

// console.log(addOld(55,5));

// this keyword - no longer bound

// <--------user with error: Cannot read property 'name' of undefined
const user1 = {
	name : 'johir',
	cityes: ['Dhaka', 'Khulna', 'Rajshahi'],
	printPlace: function () {
		// solev the error use it
		const that = this;
		this.cityes.forEach(function(city){
			console.log(that.name + ' has lives in '+ city);
		})
	}
}

const user = {
	name : 'johir',
	cityes: ['Dhaka', 'Khulna', 'Rajshahi'],
	printPlace(){
		return this.cityes.map((city) => this.name + 'has lived in '+ city);
	}
}

user1.printPlace();

console.log(user.printPlace());

// Challenge area
const multiplier ={
	//array of numbers
	numbers: [ 1,2,3,4],
	multiplyBy: 3,
	multiply(){
		return this.numbers.map((number)=> number* this.multiplyBy);
	}
}

// console.log(multiplier.multiply())