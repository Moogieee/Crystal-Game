// note to self: first mistake was setting the variables inside $(document).ready(function() {}); and my reset wouldn't work.

// create a counter to keep track of the users total for everything
var counter = 0;
var wins = 0;
var losses = 0;

// create variables for initial crystal values and targetNumber
var targetNumber = 0;
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;


// function to reset the game
function reset() {
	// used alert to check if reset was working
		// alert('reset');
	targetNumber = Math.floor(Math.random() * 102 + 19);
	crystal1 = Math.floor(Math.random() * 12 + 1);
	crystal2 = Math.floor(Math.random() * 12 + 1);
	crystal3 = Math.floor(Math.random() * 12 + 1);
	crystal4 = Math.floor(Math.random() * 12 + 1);
	$("#crystalValue").empty();
	counter = 0;

	// each imageCrystal will be given a data attribube called data-crystalvalue
	// this data attribute will be set equal to the Math.random value
	$("#crystal1").attr("data-crystalvalue", crystal1);
	$("#crystal2").attr("data-crystalvalue", crystal2);
	$("#crystal3").attr("data-crystalvalue", crystal3);
	$("#crystal4").attr("data-crystalvalue", crystal4);

	console.log(crystal1);
	console.log(crystal2);
	console.log(crystal3);
	console.log(crystal4);

	// changes targetNumber on page
	$("#number-to-guess").html(targetNumber);

	$("#crystalValue").text('0');

}

$(document).ready(function() {

	// set targetNumber from 19-120
	targetNumber = Math.floor(Math.random() * 102 + 19);

	// set the number-to-guess header to match the targetNumber
	// allows changes to the HTML to match the value in JS
	$("number-to-guess").html(targetNumber);

	// give the class ".crystal-image" to each crystal so that it can be CSSd
	$("#crystal1, #crystal2, #crystal3, #crystal4").addClass("crystal-image");

	reset();



	// each crystal image (with all its classes and attr will be added to the page
	$("#crystal1").append(crystal1);
	$("#crystal2").append(crystal2);
	$("#crystal3").append(crystal3);
	$("#crystal4").append(crystal4);

	// apply click event to all crystals
	$("#crystal1, #crystal2, #crystal3, #crystal4").on("click", function() {

	var crystalValue = ($(this).attr("data-crystalValue"));

	// when the click is stored it becomes a string. parseInt the string so that it becomes a number that can be incremented
	crystalValue = parseInt(crystalValue);

	// add the crystalValue to the users "counter" which is a global var
	// every click from every crystal adds to the global counter
	counter += crystalValue;
	$("#crystalValue").text(counter);

	// if counter is == to targetNumber then user wins, the counter is reset, win counter goes up, win text is displayed, and game is reset
	if (counter === targetNumber) {
		reset();
		$("#w-l-notif").text("You Win!");
		wins++;
		$("#wins").text("Wins: " + wins);
	}


	// if counter >= to targetNumber then user loses, the counter is reset, looses counter goes up, loss text is displayed and game is reset
	if (counter >= targetNumber) {
		reset();
		$("#w-l-notif").text("You Lose!");
		losses++
		$("#losses").text("Losses: " + losses);
	}



});

});