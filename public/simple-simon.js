$(document).ready(function() {
	var $buttons = $('.square');
	var	solution = [];
	var index = 0;
	var buttonBoolean = false;
	var increaseSpeed = 1;
	var currentScore = 0;
	var speedUpMode = ;
	var gameOver = ;


	function randomNumber(amount) {
		var random = Math.floor(Math.random() * (amount) + 1);
		return random;
	};
	function simonSays(solution){
		setTimeout(function() {
			var i = 0;
			var intervalId = setInterval(function(){
	};
	function speedUp() {
		if(speedUpMode == true && solution.length % 5 == 0 && solution.length <= 20) {
			increaseSpeed++
		}
	};

	function animate($button){

		$button.delay(100).animate({
			opacity: "1"
	};

	function increaseSequence(){
	};

	function compareClick() {


	function youLose() {
	};

	function startGame() {
		increaseSequence();
		simonSays(solution);
		$('button').attr('disabled', 'true');
		$('#game-mode').attr('disabled', 'true');
		console.log(document.getElementById('game-mode').value);
		gameMode();
	};

	function gameMode(){
		var speed = $('#game-mode').val();
		increaseSpeed = speed;
		if(speed == 1) {
			speedUpMode = true;
			speedUp();
		} else {
			speedUpMode = false;
		}
	};

	$('#game-mode')
	.change(function(){
		var speed = $('#game-mode').val();
		if(speed == 3.75) {
			extremeMode = true;
			extreme();
		}
		ons.removeClass('extreme');
		}
	});

	$('button').click(startGame);
	$buttons.click(compareClick);
});