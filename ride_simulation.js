// prompt() only exists in web browsers. In Node.js, prompt-sync adds it,
// so the rest of the program works the same way.
const prompt = require("prompt-sync")({ sigint: true });

(function () {
    const STARTING_TICKETS = parseInt(
        prompt("How many tickets would you like to buy? ")
    );

    function rideSimulation() {
        let numTickets = STARTING_TICKETS;
        let enjoyedCount = 0;
        let notEnjoyedCount = 0;
        const totalRides = STARTING_TICKETS; // Stores the starting value of ticket count to calculate the prizes.

        // Uses a while loop that continues as long as there are tickets.
        while (numTickets > 0) {
            // Prints the current ticket status, handling singular vs. plural.
            if (numTickets === 1) {
                console.log("You have 1 ticket remaining.");
            } else {
                console.log("You have " + numTickets + " tickets remaining.");
            }

            // Decides if the guest enjoyed the ride using a random boolean.
            const enjoyedRide = Math.random() < 0.5;

            if (enjoyedRide) {
                console.log("The guest enjoyed the ride!");
                enjoyedCount++;
            } else {
                console.log("The guest did not enjoy the ride.");
                notEnjoyedCount++;
            }

            // Subtracts 1 ticket after each ride.
            numTickets--;
        }

        // The loop ends when numTickets reaches 0.
        console.log("No tickets left!");

        // Prints the final tallies.
        console.log("Summary of rides:");
        console.log("Enjoyed: " + enjoyedCount);
        console.log("Not Enjoyed: " + notEnjoyedCount);

        // --- Bonus Prize Logic ---
        console.log("--- Prize Check ---");

        // Edge case: if the guest bought 0 tickets, a negative number, or typed something
        // that isn't a number (NaN), no rides were taken, so no prize is given.
        if (isNaN(totalRides) || totalRides <= 0) {
            console.log("No rides taken today.");
        } 
        // If the guest enjoyed all rides:
        else if (enjoyedCount === totalRides) {
            console.log("You loved every ride! You win the Ultimate Fan prize!");
        } 
        // If the guest enjoyed at least half of the rides:
        else if (enjoyedCount * 2 >= totalRides) {
            console.log("You had a good time! You win a Small Prize.");
        } 
        // If neither of the above conditions are met:
        else {
            console.log("Maybe try different rides next time.");
        }
    } 
    
    // Calls the function to start the ride simulation.
    rideSimulation();
})();
