/*

* Write a program that outputs the product (the result of multiplying together) all of the elements in an array.

* Create an array arr with the values [1, 8, 3, 4, 2, 9].

* The answer should be 1728.

*/

function start(){
	let arr = [1, 8, 3, 4, 2, 9]; // This is our array of values.
	
	let product = 1; // Create a variable called product where it is set to 1 (starting at 0 would make every product 0). We will be using this variable later on as we get to the for loop.
	
	// This for loop will go through every single one of our values that's in the array.
	for(let i = 0; i < arr.length; i++){
		let cur = arr[i]; // Gets the current value from the array.
		product *= cur; // Multiplies every single one of the values.
	}
	
    console.log(product); // Prints out the product.
}

// CodeHS runs start() automatically. Node.js doesn't, so it's called here.
start();
