// readInt() only exists on CodeHS. This recreates it for Node.js using prompt-sync,
// so the rest of the program works the same way.
const prompt = require("prompt-sync")({ sigint: true });
function readInt(promptText) {
    return parseInt(prompt(promptText));
}

/* Write a program that asks the user how far they ran (in miles) and then how long it took them (in minutes), and print out their speed in miles per hour. */

var MINUTES_TO_HOURS = 60; //This variable declares how many minutes are in a hour.

function start(){
	var distance = readInt("How many miles did you run? "); //Asks the user how many miles they ran.
	
	var time = readInt("How many minutes did it take you to run " + distance + " miles? "); //Asks the user how many minutes it took them to run that many miles.
	
	var conversionFactor = time / MINUTES_TO_HOURS; //Converts the minutes into hours as it is "miles per hour" or "how many miles for every one hour".
	
	var milesPerHour = distance / conversionFactor; //Division of the distance (miles) by conversionFactor (time).
	
	console.log("You ran at a speed of " + milesPerHour.toFixed(2) + " mph."); //Results, rounded to 2 decimal places.
}

// CodeHS runs start() automatically. Node.js doesn't, so it's called here.
start();
