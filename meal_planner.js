// prompt() only exists in web browsers. In Node.js, prompt-sync adds it,
// so the rest of the program works the same way.
const prompt = require("prompt-sync")({ sigint: true });

/*
Write a program that prompts the user for a meal: breakfast, lunch, or dinner. Then using if statements and else statements, print the user a message recommending a meal. For example if the meal was breakfast, you could say something like, "How about some avocado on toast?"
 
As a bonus, see if you can use "else if" in this problem. Check out "else if" in the "Docs" tab.

You may assume the user will only input "breakfast", "lunch", or "dinner". You do not have to worry about snacks, but you can make your program handle these cases if you wish!
*/

function mealTime() {
    // Asks the user to enter what meal they are having.
    var meal = prompt("What meal are you having? ");
    
    // Convert the user's answer to lowercase to have the uppercase and lowercase letters treated as identical and have the same value.
    var mealLower = meal.toLowerCase();

    // Checks if the meal is breakfast
    if (mealLower == "breakfast") {
        console.log(
            "How about Smoked salmon on whole-grain toast?"
            );
    } 
    // Check if the meal is lunch
    else if (mealLower == "lunch") {
        console.log(
            "How about Salmon bowl with brown rice, edamame, and a sesame drizzle?"
            );
    }
    // Check if the meal is dinner
    else if (mealLower == "dinner") {
        console.log(
            "How about Grilled salmon or chicken with roasted sweet potatoes and steamed broccoli?"
            );
    } 
    // If the user input is anything else, the following message is shown: 
    else {
        console.log(
            "Seems you're not having any meals. You should really eat something! How about some Doritos?"
            );
    }
}

// Calls the function to execute it
mealTime();
