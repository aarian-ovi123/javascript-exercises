// prompt() only exists in web browsers. In Node.js, prompt-sync adds it,
// so the rest of the program works the same way.
const prompt = require("prompt-sync")({ sigint: true });

/* Ask the user for two boolean values. 
The first should be stored in a variable telling whether or not they have enough units (credits), 
and the second should be stored in a variable telling whether or not they have met the requirements. 
They can only graduate if they have enough units, AND have met the requirements. 
Print out whether they can graduate.
*/
function graduationComplete() {
    // Asks the user's graduation year.
    var gradYear = prompt("What is your graduation year? ");
    // prompt() returns a string. Convert to boolean for logical checks.
	var highSchoolCredits = prompt("Do you have enough credits to graduate? (yes/no) ").toLowerCase();
	var graduationRequirements = prompt("Did you do all the High School requirements to graduate? (yes/no) ").toLowerCase();
	
	// Sets the Boolean values to the variables.
    var credits = (highSchoolCredits === 'yes');
    var requirements = (graduationRequirements === 'yes');

    var requirementsCompleted = credits && requirements;    
    console.log(
        "Does the user have the prerequisites to become a graduate of " + gradYear + "? " +
            requirementsCompleted
    );
}

graduationComplete(); // Calls the function to run the code.
