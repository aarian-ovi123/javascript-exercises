/*

Write a function that doubles a list:
function doubleList(arr)

You should create a new array in the function, and return it.

Then, you should print out the new list:

var arr = [1,2,3,4];
var doubled = doubleList(arr);
println(doubled);

Depending on the environment you are running your code in (a setting you can change in your editor), your output for the code above could look like this:

1,1,2,2,3,3,4,4

Or like this:

[1,1,2,2,3,3,4,4]

Both outputs are acceptable for this exercise.

*/

// This function will double the list.
function doubleList(arr){
   var newArr = []; // Creates an empty array, which will later be used to 'push' elements into.

   for (var i = 0; i < arr.length; i++) {
       // Doing this pushes the new elements into the array twice.
       newArr.push(arr[i]);
       newArr.push(arr[i]);
   }

   return newArr; // Returns the new, doubled list.
}

// This function is what will put everything through the main test.
function start(){
    var arr = [1,2,3,4]; // This is the array we will be using to double.
    var doubled = doubleList(arr);
    // This will print out the doubled list. 
    console.log(doubled);
}

// CodeHS runs start() automatically. Node.js doesn't, so it's called here.
start();
