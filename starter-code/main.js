console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardTwo === cardThree) {
	alert ("You found a match!");
}
else if (cardOne === cardTwo) {
	alert ("You found a match!")
}
else if (cardThree === cardFour) {
	alert ("You found a match!")
}
else if (cardOne === cardThree) {
	alert ("You found a match!")
}
else if (cardOne === cardFour) {
	alert ("You found a match!")
}
else if (cardTwo === cardFour) {
	alert ("You found a match!")
}
else {
	alert ("Sorry, try again.")
}