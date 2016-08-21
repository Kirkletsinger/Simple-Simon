
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
//highlights color
function press(event){
	this.style.opacity = "1";
}

//un highlight color
function release(event){
	this.style.opacity = "0.5";
}

//adds user selections to user array
function userChoices(event){
	var selected = this.attributes['data-value'].value;
	userSequence.push(selected);
	//console.log(userSequence);
	compare();
}

///Preview
//gets rid od event listeners so player cant click during preview
function preView() {
	for (i = 0; i < boxes.length; i++){
		boxes[i].removeEventListener('mousedown', press, false);
		boxes[i].removeEventListener('mouseup', release, false );
		boxes[i].removeEventListener('click', userChoices, false);
	}
}
//At the beginning of each round randomly selects a square and is added to the challange array
//and repeats
function challengeGenerator() {
			document.getElementById('round').innerHTML = "Round: " + x;
			var a = Math.floor(Math.random() * 4);
			challengeSequence.push(a);
			challengeAnimator(challengeSequence);
				// console.log(challengeSequence);
}



