/*
Lists and arrays are an example of a data abstraction.

A data abstraction can often contain different types of elements. It also provides a separation between the abstract properties of a data type (integer, boolean, string) and the concrete details of its representation. Basically, it doesn't matter that the types are different!

Create an empty array. Push the integer 3, a string of "hello" and a boolean of false into the array. Print out each index individually. Now, pop the last two elements.

Now, print out the first three values again.
*/

function start(){
    // Creates an empty array.
    let emptyArray = []; 
    
    // Pushes three elements into the emptyArray.
    emptyArray.push(3);
    emptyArray.push("hello");
    emptyArray.push(false);
    
    // Prints out each index individually.
    console.log(emptyArray[0]); // Output: 3
    console.log(emptyArray[1]); // Output: hello
    console.log(emptyArray[2]); // Output: false
    
    // Pops out the last two values.
    emptyArray.pop();
    emptyArray.pop();
    
    // Prints out each index individually.
    console.log(emptyArray[0]); // Output: 3
    console.log(emptyArray[1]); // Output: undefined
    console.log(emptyArray[2]); // Output: undefined
}

// CodeHS runs start() automatically. Node.js doesn't, so it's called here.
start();
