
var userSequence = [];
var challengeSequence = [];
var x = 1;

var instructions = document.getElementsByTagName('h2');
var boxes = document.getElementsByClassName('box');

//start button
var button = document.getElementsByTagName('button');
button[0].addEventListener('click', gameStart, false);

function gameStart(){
	button[0].style.display = "none";
	userSequence = [];
	challengeSequence = [];
	challengeGenerator();
}


// Player interaction 
function userTurn() {
	for (i = 0; i < boxes.length; i++){
		boxes[i].addEventListener('mousedown', press, false);
		boxes[i].addEventListener('mouseup', release, false );
		boxes[i].addEventListener('click', userChoices, false);
	}
	setTimeout(function(){
		instructions[0].innerHTML = "Your turn!";
	}, 800);
}
