// prompt() and alert() only exist in web browsers. These recreate them for Node.js,
// so the rest of the program works the same way.
const prompt = require("prompt-sync")({ sigint: true });
function alert(message) {
    console.log(message);
}

/*
  Original Boolean:
  safe = (hasLight && calm) || (hasLight && !calm)
  
  Simplified Boolean:
  safe = hasLight
*/

// ---------------------------------------------
// Slightly adjusted helper function
// Still picks the first item longer than 3 letters,
// even though the name implies randomness… maybe later.
// ---------------------------------------------
function pickItem(itemsList) {
    let chosen = ""; // Default in case nothing fits.

    // Using a regular loop to go through each item.
    for (let idx = 0; idx < itemsList.length; idx++) {
        if (itemsList[idx].length > 3) {
            chosen = itemsList[idx];
            break; // Once item is found, there is no need to keep checking.
        }
    }

    return chosen;
}

// ---------------------------------------------
// Story Setup
// ---------------------------------------------
let items = ["rock", "map", "stick", "key"];
let playerName = prompt("Welcome adventurer! What's your name? ");
let hasLight = false;
let calm = true;

let specialItem = pickItem(items);
alert("You find a small backpack. Inside is a " + specialItem + ".");

// ---------------------------------------------
// First Branch
// ---------------------------------------------
let choice1 = prompt(
    "Night is falling, " +
    playerName +
    ". Do you (1) search for a flashlight or (2) keep walking? "
);

if (choice1 === "1") {
    hasLight = true;
    alert("You find a flashlight with half a battery!");
} else {
    alert("You keep walking in the dark. Bold move.");
    calm = false; // Makes sense they'd get uneasy. You're walking in the dark.
}

// ---------------------------------------------
// Simplified Boolean check
// ---------------------------------------------
let safe = hasLight; // Simplified Boolean

// ---------------------------------------------
// Walking loop
// ---------------------------------------------
let steps = 0;

// A for-Loop could have been used, however, this is easier.
while (steps < 3) {
    alert("You walk through the trees... step " + (steps + 1));
    steps++;
}

// ---------------------------------------------
// Second Branch
// ---------------------------------------------
// .toUpperCase() lets "a" and "b" work the same as "A" and "B".
let choice2 = prompt(
    "You reach a split path. Go (A) left toward glowing fireflies, " +
    "or (B) right toward a quiet stream? "
).toUpperCase();

if (choice2 == "A") {
    alert("The fireflies swirl around you. It's peaceful.");
    calm = true;
} else {
    alert("The stream is calm, but shadows move nearby...");
    calm = false;
}

// ---------------------------------------------
// Third Branch — Endings
// ---------------------------------------------
if (safe && calm) {
    alert(
        "Ending 1: You calmly follow the glow to a clearing. " +
        "You make it home safely with your " +
        specialItem +
        " as a souvenir!"
    );
} else if (safe && !calm) {
    alert(
        "Ending 2: You shine your light around and move cautiously. " +
        "Despite your nerves, you reach a safe campsite."
    );
} else {
    alert(
        "Ending 3: It's dark, creepy, and you're stressed. " +
        "But hey—you stumble into a ranger who helps you out. Nice save!"
    );
}
