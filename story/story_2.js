// prompt() and alert() only exist in web browsers. These recreate them for Node.js,
// so the rest of the program works the same way.
const prompt = require("prompt-sync")({ sigint: true });
function alert(message) {
    console.log(message);
}

// Set-Up
const pickRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)]; // Chooses something random from the list.

let items = [
    "road map",
    "sickle",
    "flashlight",
    "special rock",
    "table",
    "grinch mannequin",
]; // Random items in a list.
let name = prompt("You're lost in the wilderness. What is your name? ");

let yourItem = pickRandomItem(items);
alert("You find a small backpack next to you. Inside is a " + yourItem + ".");

//----------------------------------------------------------------------------

// First Part

alert(
    "You run away from home after having a fight with your parents. After a while, you find yourself somewhere in the wilderness. "
); // Sets up the setting.

let choiceOne = prompt(
    "Night falls quickly during the winter as you notice the sun setting. Do you look for a cabin (1) or keep moving (2)? "
); // Asks the user what they want to do.

// Scene One
if (choiceOne == 1) {
    alert("You do not find a cabin, but you see light in the distance.");
    // .toLowerCase() lets "Yes" or "YES" work the same as "yes".
    let choiceTwo = prompt("Do you move towards the light? (yes/no) ").toLowerCase();
    // Part Two
    if (choiceTwo == "yes") {
        alert(
            "You move towards the light only to come across a group of bandits who see you. "
        );
        alert(
            "You use your " +
                yourItem +
                " to fight back, but they end up overpowering you. "
        );
        alert("GAME OVER!");
    } else {
        alert(
            "It's getting really cold, and you start regretting running away from the comforts of your home."
        );
        let choiceThree = prompt(
            "Do you want to return home before it becomes midnight? (yes/no) "
        ).toLowerCase();
        if (choiceThree == "yes") {
            alert(
                "You return home safely, and your parents are happy to see you!"
            );
        } else {
            alert("You succumb to the cold. ");
            alert("GAME OVER!");
        }
    }
}

// Scene Two
else {
    alert(
        "You risk dying to the cold, but hope is not lost as you see light in the distance."
    );
    let choiceTwo = prompt("Do you move towards the light? (yes/no) ").toLowerCase();
    // Part Two
    if (choiceTwo == "yes") {
        alert(
            "You move towards the light only to come across a group of bandits who see you. "
        );
        alert(
            "You use your " +
                yourItem +
                " to fight back, but they end up overpowering you. "
        );
        alert("GAME OVER!");
    } else {
        alert(
            "It's getting really cold, and you start regretting running away from the comforts of your home."
        );
        let choiceThree = prompt(
            "Do you want to return home before it becomes midnight? (yes/no) "
        ).toLowerCase();
        if (choiceThree == "yes") {
            alert(
                "You return home safely, and your parents are happy to see you!"
            );
        } else {
            alert("You succumb to the cold. ");
            alert("GAME OVER!");
        }
    }
}

// There are six endings, but there are actually three endings, because it is
// just copied to the second scene.
// There are two bad endings, and one good ending.
