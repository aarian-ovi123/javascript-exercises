// prompt() only exists in web browsers. In Node.js, prompt-sync adds it,
// so the rest of the program works the same way.
const prompt = require("prompt-sync")({ sigint: true });

/* Warm-Up: Should you Go To Disney World Today?
Scenario: You are deciding whether you should go to Disney World after school. The decision depends on the following:
- Do you have a valid ticket? (Boolean)
- Is it a school night? (Boolean)
- Do you have at least $50 for food and souvenirs? (Comparison operator, number)
*/

function disneyToday() {
//---------------------------------------------------------

/*
PROMPT SECTION
*/

    var validTicket = prompt("Do you have a valid ticket to enter Disney World? (yes/no) ").toLowerCase(); // Asks the user if they have a valid ticket to go inside. 
    var schoolNight = prompt("Is it a school night today? (yes/no) ").toLowerCase(); // Asks the user if tonight is a School Night.
    var financiallySet = parseInt(prompt("How much money do you have? ")); // Asks how much cash they have.
//---------------------------------------------------------

/*
LOGIC SECTION
*/

    var ticketReady = (validTicket === 'yes'); // They must have a valid ticket.
    var notSchoolNight = (schoolNight === 'no'); // The day they are going must not be a school night.
    var moneyReady = financiallySet >= 50; // They must have at least or greater than $50.
//---------------------------------------------------------

/*
CONDITIONALS SET
*/

    var canGo = ticketReady && notSchoolNight && moneyReady; // Condition needed to go to Disney World.
//---------------------------------------------------------

/*
PRINT SECTION
*/

    if (canGo) {
        console.log(
            "You can go to Disney World today!"
            );
    } 
    else {
        console.log(
            "You can't go to Disney World today!"
            );
    }
}
//---------------------------------------------------------

/*
CALL FUNCTION
*/

disneyToday(); // Calls the function!
//--------------------------------------------------------
