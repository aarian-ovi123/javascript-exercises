/*
Create an array of your favorite 4 movies. Print out the 0th element in the array. Now set the 0th element to be "Star Wars" and try printing it out again.

*/

function start(){
    // List of Favourite Movies:
        //---Pacific Rim---\\
        //---Demon Slayer: Kimetsu No Yaiba The Movie: Infinity Castle---\\
        //---How to Train Your Dragon (Live-Action)---\\
        //---A Quiet Place---\\
	let favMovies = ["Pacific Rim", "Demon Slayer: Kimetsu No Yaiba The Movie: Infinity Castle", "How to Train Your Dragon (Live-Action)", "A Quiet Place"];
	console.log(favMovies[0] + " — Index[0]"); // Prints out what index 0 is before the change.
	favMovies[0] = "Star Wars"; // Changes index 0 to Star Wars.
	console.log(favMovies[0] + " — Index[0]"); // Prints out what index 0 is after the change.
}

// CodeHS runs start() automatically. Node.js doesn't, so it's called here.
start();
