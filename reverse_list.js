function reverseList(arr) {
    // The easiest way is the built-in reverse() method.
    // reverse() flips the array it's used on, so [...arr] makes a copy first.
    // That way the original array stays the same.
    const reversedArr = [...arr].reverse();
    // Now just give back the changed array.
    return reversedArr;
}

// --- If you don't want to use .reverse(), here's another way ---
/*
function reverseList(arr) {
    const reversedArr = [];
    // Start from the end and work backwards
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}
*/

// --- How it works in practice ---

var arr = [1, 2, 3, 4];

// Flip the array
var reversed = reverseList(arr);

// Show what you get. In JavaScript, use console.log to print.
console.log(reversed);

// You'll see: [4, 3, 2, 1]
