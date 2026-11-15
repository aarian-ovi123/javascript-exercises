/*
Write a program that prints out a factorial. N factorial (written N!) is defined as

N * (N-1) * (N-2) * ... * 1
For example, 4! is

4 * 3 * 2 * 1 = 24
For a given constant N, use for loops and variables to print out N factorial.

(Hint: You solve factorial by multiplying the numbers from 1 all the way up to N together. You need a variable to store the result.)
*/

var N = 5;

function start() {
    var result = 1; // Starts at 1 since starting at 0, and using the 0 to multiply will always give 0.
    for (var i = 1; i <= N; i++) {
        result *= i; // Multiplies the result by the current number
    }
    console.log(N + "! = " + result);
}

// CodeHS runs start() automatically. Node.js doesn't, so it's called here.
start();
