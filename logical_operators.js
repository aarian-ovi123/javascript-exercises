// prompt() only exists in web browsers. In Node.js, prompt-sync adds it,
// so the rest of the program works the same way.
const prompt = require("prompt-sync")({ sigint: true });

// NOT OPERATOR
function lightSwitch() {
    let lightOn = true; // The variable lightOn is declared and set with a boolean value of true.
    lightOn = !lightOn; // This line uses the logical NOT operator (!) to reverse the boolean value of lightOn. Since lightOn is true, !lightOn evaluates to false, and the variable is then reassigned this new value.
    console.log(
        "Is the light on? " + 
        lightOn
    ); // Prints value.
}

lightSwitch(); // Output: false

//-----------------------------------------------------------------------------

// AND OPERATOR
function presidentialRequirements() {
    // prompt() returns a string. Convert to boolean for logical checks.
    let agePrompt = prompt("Are you at least 35 years old? (yes/no) ").toLowerCase();
    let citizenUSPrompt = prompt("Are you a US Citizen? (yes/no) ").toLowerCase();
    
    // Sets the Boolean values to the variables.
    let age = (agePrompt === 'yes');
    let citizenUS = (citizenUSPrompt === 'yes');

    let requirementsCompleted = age && citizenUS;
    
    console.log(
        "Does the user have the prerequisites to become a President? " +
        requirementsCompleted
    );
}

// Call the function to make it run.
presidentialRequirements();

//-----------------------------------------------------------

// OR OPERATOR
function wastingTime() {
    // prompt() returns a string. Convert to boolean for logical checks.
    let facebookPrompt = prompt("Are you on Facebook? (yes/no) ").toLowerCase();
    let instagramPrompt = prompt("Are you on Instagram? (yes/no) ").toLowerCase();
    
    // Sets the Boolean values to the variables.
    let facebookMeta = (facebookPrompt === 'yes');
    let instagramMeta = (instagramPrompt === 'yes');
    
    // The OR operator returns true if the user is on either Facebook OR Instagram
    let isWastingTime = facebookMeta || instagramMeta;
    
    console.log(
        "Is the user wasting time? " +
        isWastingTime
    );
}

wastingTime();
