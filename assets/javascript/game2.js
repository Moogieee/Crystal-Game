// create a counter to keep track of the users total
var counter = 0;
var wins = 0;
var losses = 0;

var targetNumber = 0;
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;


// function to reset the game
function reset () {
	alert('reset');
	targetNumber = Math.floor(Math.random() * 102 + 19);
	console.log("targetNumber = " + targetNumber);
 	crystal1 = Math.floor(Math.random() * 12 + 1);
	console.log("c1 = " + crystal1);
	crystal2 = Math.floor(Math.random() * 12 + 1);
	crystal3 = Math.floor(Math.random() * 12 + 1);
	crystal4 = Math.floor(Math.random() * 12 + 1);
	$("#crystalValue").empty();
	counter = 0;

	// changes targetNumber value on page
	$("#number-to-guess").html(targetNumber)
}


$(document).ready(function() {

// set the targetNumber from 19-120
targetNumber = Math.floor(Math.random() * 102 + 19);

// set the number-to-guess header to match the targetNumber
// eventually this will allow us to change the HTML to match the value in JavaScript.
$("#number-to-guess").html(targetNumber);

// give each crystal a random # from 1-12
crystal1 = Math.floor(Math.random() * 12 + 1);
console.log(crystal1);
crystal2 = Math.floor(Math.random() * 12 + 1);
console.log(crystal2);
crystal3 = Math.floor(Math.random() * 12 + 1);
console.log(crystal3);
crystal4 = Math.floor(Math.random() * 12 + 1);
console.log(crystal4);




//give the class ".crystal-img" to each crystal so that it can be CSSd
	$("#crystal1, #crystal2, #crystal3, #crystal4").addClass("crystal-image");


// each imageCrystal will be given a data attribute called data-crystalValue.
// This data attribute will be set equal to the Math.random value
	$("#crystal1").attr("data-crystalvalue", crystal1);
	$("#crystal2").attr("data-crystalvalue", crystal2);
	$("#crystal3").attr("data-crystalvalue", crystal3);
	$("#crystal4").attr("data-crystalvalue", crystal4);

// each crystal image (with all its classes and attributes) will get added to the page.
	$("#crystal1").append(crystal1);
	$("#crystal2").append(crystal2);
	$("#crystal3").append(crystal3);
	$("#crystal4").append(crystal4);


// apply clickevent to all crystals
$("#crystal1, #crystal2, #crystal3, #crystal4").on("click", function () {
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
		reset();
		$("#w-l-notif").text("You Win!");
		wins++;
		$("#wins").text("Wins: " + wins); //is it weird I put this here? I tried putting it under var win but the counter is set to 0 and won't increment. same with var losses
		
	}

// if counter goes over the targetNumber then user loses, the counter resets back to 0, losses counter goes up 1 and is displayed, crystals get new value and there is new number to guess
	else if (counter >= targetNumber) {
		reset();
		$("#w-l-notif").text("You Lose!");
		losses++;
		$("#losses").text("Losses: " + losses);
		
	}

});

});
