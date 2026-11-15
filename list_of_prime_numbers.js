/*
Create an array (the list must have the name numList) of the first 5 prime numbers starting at 2. Print out the items at index 0, 2, and 4.
*/

function start(){
    // Lists the first 5 prime numbers, starting at 2.
	let numList = [2, 3, 5, 7, 11];

	console.log(numList[0]); // Output: 2
	console.log(numList[2]); // Output: 5
	console.log(numList[4]); // Output: 11
}

// CodeHS runs start() automatically. Node.js doesn't, so it's called here.
start();
