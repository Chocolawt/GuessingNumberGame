//create a variable for the first person
//number must not exceed 20
//create a variable for the second person
//number must not exceed 20
//compare both values
//if player 2 guess the same number as player 1, tell player 2 he or she has won.
//obviously, if the guess is wrong, player 2 loses.

var playerOne = prompt ("Enter a number between 1-20");
if ((playerOne < 1) || (playerOne > 20) || isNaN (playerOne)) { //line 10 is an evaluation
//isNaN means it's not a number.
window.alert("You can not follow directions.")
}

else {
var playerTwo = prompt ("Enter a number between 1-20"); //line 15 asks player 2
if (playerOne == playerTwo) {
	window.alert("Congratulations, you won!");
}

else {
window.alert("Player one answer was" + playerOne); //if 
window.alert("You chose " + playerTwo);
}
}


