// remove() is a CodeHS-only array method, so regular JavaScript doesn't have it.
// This recreates it: it removes the item at the given index and returns that item.
Array.prototype.remove = function (index) {
    return this.splice(index, 1)[0];
};

/*

-----Starter Arrays-----
let groceries = ["bread", "eggs", "milk", "cookies", "cheese", "apples", "tuna"];
let numbers = [3, 10, 15, 2, 8, 12, 5];
let names = ["Ana", "Luis", "Maya", "Jordan", "Chris"];
--------------------------------------------------------------------------------------
    
-----Assignment Parts-----
Part A — Find an Element: Use indexOf() to search for an item in groceries. Print the index or print "Not found."

Part B — Remove or Replace: Use splice() on groceries to remove something and insert something new. Print the array before and after.

Part C — CodeHS Method: Use remove() on groceries to delete an item by index. Print the updated array.

Part D — Arrow Function: Write an arrow function that performs any simple number operation and test it using numbers.

Part E — Transform with map(): Use map() with an arrow function on numbers and print the resulting array.

Part F — Filter Values: Use filter() on numbers to create a new array using any reasonable condition. Print the result.

Part G — Iterate with forEach(): Use forEach() with names to print each item with a small message.

Part H — Combine with reduce(): Use reduce() on numbers to produce a single combined value and print it.

*/

// All Arrays:

let groceries = ["bread", "eggs", "milk", "cookies", "cheese", "apples", "tuna"];
let numbers = [3, 10, 15, 2, 8, 12, 5];
let names = ["Ana", "Luis", "Maya", "Jordan", "Chris"];

// ----------------------------------------------------------------

// Part A: indexOf() for groceries. 
console.log("--- Part A: Find an Element ---");

// Find the index of "tuna", because that's my favorite.
let idx = groceries.indexOf("tuna"); 
console.log(idx);
// Output: 6

// Find the index of "cake", because come on, everyone loves cake.
// indexOf() gives -1 when the item isn't in the list, so it prints "Not found." instead.
let notFoundIdx = groceries.indexOf("cake");
if (notFoundIdx === -1) {
    console.log("Not found.");
} else {
    console.log(notFoundIdx);
}
// Output: Not found.

//----------------------------------------------------------------------

// Part B: splice() for groceries (remove and insert).
console.log("\n--- Part B: Remove or Replace (splice) ---");

// What the list looks like before splicing it.
console.log("Before splice: " + groceries);

// Starts at i[4], which is cheese, and removes cheese because I don't like cheese and replaces it with cake, because we love cake.
groceries.splice(4, 1, "cake");

// What the list looks like after splicing it.
console.log("After splice: " + groceries);

//----------------------------------------------------------------------

// Part C: remove() on groceries.
console.log("\n--- Part C: CodeHS Method (remove) ---");

// Removing Apples, because I don't like apples.
let removal = groceries.remove(5);
console.log("Updated Grocery List: " + groceries);

//----------------------------------------------------------------------

// Part D: Arrow function on numbers.
console.log("\n--- Part D: Arrow Function ---");

// This is our arrow function used to test a simple calculation.
const squareNumber = (num) => num * num;

// 8 is used to test the arrow function, because 8 x 8 makes the perfect square 64.
var testNumber = 8;
console.log("The square of " + testNumber + " is: " + squareNumber(testNumber)); // Output: The square of 8 is: 64

//----------------------------------------------------------------------

// Part E: map() + arrow function on numbers.
console.log("\n--- Part E: Transform with map() ---");

// This is our arrow function that will be used to square the numbers.
const square = number => number * number;

// Using the constant above, the following rules will be applied to our array, causing the array to be squared using the map() function.
const squaredNumbers = numbers.map(square);

console.log("Original numbers: " + numbers); // Output: 3,10,15,2,8,12,5.
console.log("Squared numbers: " + squaredNumbers); // Output: 9,100,225,4,64,144,25.

//----------------------------------------------------------------------

// Part F: filter() on numbers.
console.log("\n--- Part F: Filter Values ---");

// This line allows us to filter all numbers that are greater than 5 from the array using the filter() function.
let filteredNumbers = numbers.filter(num => num > 5);

console.log("Original numbers: " + numbers); // Output: 3,10,15,2,8,12,5
console.log("Numbers greater than 5: " + filteredNumbers); // Output: 10,15,8,12

//----------------------------------------------------------------------

// Part G: forEach() on names.
console.log("\n--- Part G: Iterate with forEach() ---");

console.log("List of names:"); // Creates a section where it will print all the names below.

// This function starts off by using an .forEach() function with the name of the array before it to state that it will go through each item in the array, and then send it over to a variable called 'name', which will flow through an arrow function and over to the print statement. 
names.forEach(name => {
    console.log("  Hello, " + name + "!");
});

//----------------------------------------------------------------------

// Part H: reduce() on numbers.
console.log("\n--- Part H: Combine with reduce() ---");

// In the number array, using the reduce() function, it calculates the sum of all elements. In the 'accumulator', it stores the running total, whereas the 'currentNumber' is the current element in the array. Lastly, it sets the starting value of the accumulator to 0. 
var sumOfNumbers = numbers.reduce((accumulator, currentNumber) => {
    return accumulator + currentNumber;
}, 0);

// Outputs the original array
console.log("Array to sum: " + numbers); // Output: 3,10,15,2,8,12,5
// Output the sum of the elements in the array.
console.log("Total sum using reduce(): " + sumOfNumbers); // Output: 55
