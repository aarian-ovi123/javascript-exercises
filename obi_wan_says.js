// readLine() and readInt() only exist on CodeHS. These recreate them for Node.js using prompt-sync,
// so the rest of the program works the same way.
const prompt = require("prompt-sync")({ sigint: true });
function readLine(promptText) {
    return prompt(promptText);
}
function readInt(promptText) {
    return parseInt(prompt(promptText));
}

/* This function prompts the user for their name, and then how many droids, and then how many Wookiees they are looking for. Then print out the name that was given, as well as how many droids and Wookiees they wanted to meet. */

function start(){
	let name = readLine("Enter name: "); //Makes the user enter their name to grant them access to the Droids and Wookiees.
	console.log("Welcome, " + name + "!");
	
	let numDroids = readInt("Quantity of Droids: "); //Makes the user enter the quantity of Droids they want to meet.
	console.log(name + " is granted the opportunity to meet " + numDroids + " Droids.");
	
	let numWookiees = readInt("Quantity of Wookiees: "); //Makes the user enter the quantity of Wookiees they want to meet.
	console.log(name + " is granted the opportunity to meet " + numWookiees + " Wookiees.");
}

// CodeHS runs start() automatically. Node.js doesn't, so it's called here.
start();
