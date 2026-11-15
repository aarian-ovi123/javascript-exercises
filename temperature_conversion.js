/*
You will work with a two-dimensional array of temperatures. All values are in Celsius. Your task is to write three functions using only standard JavaScript arrays.

Your Task:
-----------

Write these three functions. You may use arrow functions or regular functions.

checkNumbers(grid) - Use every twice. Return true only if every row and every value is a number.

convertToF(grid) - Use map twice. Convert each C value to F using:

F = C * 1.8 + 32

Return a new 2D array.

print2DArray(grid) - Use forEach. Print each row with console.log in this format:

Row 0: 68, 69.8, 66.2
*/

// This is the 2D array of temperatures in Celsius. Each inner array is one row.
const celsiusGrid = [
    [20, 21, 19],
    [22, 23, 21],
    [18, 20, 19]
];


// Checks that every row is an array and every value in it is a number.
// The outer every() goes through each row, and the inner every() goes through each value in that row.
const checkNumbers = (grid) =>
    grid.every(row =>
        Array.isArray(row) && row.every(value => typeof value === "number")
    );


// Converts every Celsius value in the grid to Fahrenheit and returns a new 2D array.
// The outer map() goes through each row, and the inner map() converts each value in that row.
// Math.round(... * 10) / 10 rounds to 1 decimal place, so 69.80000000000001 becomes 69.8.
const convertToF = (grid) =>
    grid.map(row =>
        row.map(celsius => Math.round((celsius * 1.8 + 32) * 10) / 10)
    );


// Prints each row of the grid in the format "Row 0: 68, 69.8, 66.2".
// forEach() gives both the row and its index, and join(", ") puts a comma and space between each value.
const print2DArray = (grid) => {
    grid.forEach((row, index) => {
        console.log("Row " + index + ": " + row.join(", "));
    });
};


// This function runs the whole program.
function start() {
    // Stops the program if the grid has anything that isn't a number.
    if (!checkNumbers(celsiusGrid)) {
        console.log("Error: grid contains invalid data.");
        return;
    }

    // Converts the grid to Fahrenheit and prints it.
    const fahrenheitGrid = convertToF(celsiusGrid);
    print2DArray(fahrenheitGrid);
}

// CodeHS runs start() automatically. Node.js doesn't, so it's called here.
start();

// Expected output:
// Row 0: 68, 69.8, 66.2
// Row 1: 71.6, 73.4, 69.8
// Row 2: 64.4, 68, 66.2
