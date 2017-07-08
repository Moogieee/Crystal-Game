$(document).ready(function() {

// set the targetNumber from 50-150
var targetNumber = Math.floor(Math.random() * 101 + 50);

// set the number-to-guess header to match the targetNumber
// eventually this will allow us to change the HTML to match the value in JavaScript.
$("#number-to-guess").text(targetNumber);

// create a counter to keep track of the users total
var counter = 0;

// give each crystal a random # from 2-15
var numberOptions = [Math.floor(Math.random() * 18 + 2), 
Math.floor(Math.random() * 14 + 2), 
Math.floor(Math.random() * 14 + 2), 
Math.floor(Math.random() * 14 + 2)];


var userTotal = 0;
var wins = 0;
var losses = 0;

// function to reset the game

// create a for loop to create crystals for every numberOption
for (var i = 0; i < numberOptions.length; i++) {

	// for each iteration, we will create an imageCrystal
	var imageCrystal = $("<img>");

	//give the class ".crystal-img" to each crystal so that it can be CSSd
	imageCrystal.addClass("crystal-image");

	// each imageCrystal will be given a src link to the crystal image
	imageCrystal.attr("src", "assets/images/1.png");

	// each imageCrystasl will be given a data attribute called data-crystalValue.
	// This data attribute will be set equal to the array value
	imageCrystal.attr("data-crystalvalue", numberOptions[i]);

	// each crystal image (with all its classes and attributes) will get added to the page.
	$("#crystals").append(imageCrystal);
}

// this time, our click event applied to every single crystal on the page. Not just one.
$(".crystal-image").on("click", function () {

	// determining the crystals value requires us to extract the value from the data attribute.
	// using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
	// using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
	// since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

	var crystalValue = ($(this).attr("data-crystalvalue"));
	crystalValue = parseInt(crystalValue); // when you store the click it becomes a string. parseInt the string so that it becomes a number and can be incremented.

// we then add the crystalValue to the users "counter" which is a global variable
// every click, from every crystal adds to the global counter.
	counter += crystalValue;
	$("#crystalValue").text(counter);


// if counter is equal to targetNumber then user wins, the counter resets back to 0, // win counter goes up 1 and is displayed, crystals get new value and there is new number to guess
	if (counter === targetNumber) {
		alert ("You Win!");
		counter = 0; //resets counters to 0
		wins++; //adds a win each time user wins
		$("#wins").text("Wins: " + wins); //is it weird I put this here? I tried putting it under var win but the counter is set to 0 and won't increment. same with var losses
		// newGame();
	}

// if counter goes over the targetNumber then user loses, the counter resets back to 0, losses counter goes up 1 and is displayed, crystals get new value and there is new number to guess
	else if (counter >= targetNumber) {
		alert ("You Lose!");
		counter = 0; //resets counter to 0
		losses++; //adds a loss each time user loses
		$("#losses").text("Losses: " + losses);
		// newGame();
	}

});

});