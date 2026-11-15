// prompt() only exists in web browsers. In Node.js, prompt-sync adds it,
// so the rest of the program works the same way.
const prompt = require("prompt-sync")({ sigint: true });

/*Write a program to determine if there is no school today. First ask the user if today is a weekday, and store that in a boolean variable. Then ask the user if today is a holiday, and store that in a different boolean variable. Then try to figure out if there is no school today.

School is out if it is a holiday or if it is not a weekday

You should create a boolean variable noSchoolToday and print its value to the user
*/

function noSchoolDay() {
    var weekdayPrompt = prompt("Is today a weekday? (yes/no) ").toLowerCase();
    var holidayPrompt = prompt("Is today a holiday? (yes/no) ").toLowerCase();
    
    var isWeekday = (weekdayPrompt === 'yes');
    var isHoliday = (holidayPrompt === 'yes');

    // School is out if it is a holiday or if it is not a weekday.
    var noSchoolToday = isHoliday || !isWeekday;

    // Prints the value of noSchoolToday, like the assignment asks.
    console.log("No school today: " + noSchoolToday);
    
    if (noSchoolToday) {
        console.log("There is no school today!");
    } else {
        console.log("There is school today.");
    }
}

noSchoolDay();
