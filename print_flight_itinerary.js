/*

Write a program that prints out a flight itinerary. A flight itinerary is a list of cities, and should be output like this.

For example, if the flights array is...

["San Francisco", "New York", "Chicago", "Honolulu"]

You print:
San Francisco -> New York -> Chicago -> Honolulu

Helpful Hint: To print multiple times on the same line, use print() instead of println(). For example, this code:

print("hello, ");
print("world");

This prints each statement on the same line, giving the output of:
hello, world

*/

function start(){
	let arr = ["Los Angeles", "Las Vegas", "Phoenix", "Denver", "Chicago", "New York", "Washington", "Houston", "Dallas", "Orlando"]; // List of popular domestic cities in the United States.
    let origin = "Miami"; // We use Miami as the starting point of the itinerary.
    
    console.log("ITINERARY:");
    
    // The itinerary starts with the origin city.
    let itinerary = origin;
    
    // This for loop will go through every single one of our values that's in the array,
    // adding an arrow and the next city to the itinerary each time.
    for(let i = 0; i < arr.length; i++){
		itinerary += " -> " + arr[i];
    }
    
    // Prints the whole itinerary on one line.
    console.log(itinerary);
}

// CodeHS runs start() automatically. Node.js doesn't, so it's called here.
start();
