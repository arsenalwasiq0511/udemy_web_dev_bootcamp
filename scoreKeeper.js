var button1 = document.getElementById('player1');
var button2 = document.getElementById('player2');
var buttonReset = document.getElementById('reset');

var p1ScoreDisp = document.getElementById('p1score');	//span
var p2ScoreDisp = document.getElementById('p2score');	//span
var player1Score = 0;
var player2Score = 0;

var goalDisp = document.getElementById('goal');		//span
var goal = 5;

var goalSet = document.querySelector("input");

goalSet.addEventListener("input", function() {
	if(goalSet.value > 0) {
		goal = goalSet.value;
		goalDisp.textContent = goal;
	}
	reset();
})

button1.addEventListener("click", function() {
	player1Score = p1ScoreDisp.textContent;
	if (player2Score == goal) {
		;
	}
	else if (player1Score == goal - 1) {
		p1ScoreDisp.classList.add("reachedGoal");
		player1Score++;
	}
	else if (player1Score == goal) {
		;
	}
	else {
		player1Score++;
	}
	p1ScoreDisp.textContent = player1Score;
});

button2.addEventListener("click", function() {
	player2Score = p2ScoreDisp.textContent;
	if (player1Score == goal) {
		;
	}
	else if (player2Score == goal - 1) {
		p2ScoreDisp.classList.add("reachedGoal");
		player2Score++;
	}
	else if (player2Score == goal) {
		;
	}
	else {
		player2Score++;
	}
	p2ScoreDisp.textContent = player2Score;
});

buttonReset.addEventListener("click", function() {reset()});

function reset() {
	player1Score = 0;
	player2Score = 0;
	p1ScoreDisp.textContent = 0;
	p2ScoreDisp.textContent = 0;
	if (p1ScoreDisp.classList.contains("reachedGoal")) {
		p1ScoreDisp.classList.remove("reachedGoal");
	}
	if (p2ScoreDisp.classList.contains("reachedGoal")) {
		p2ScoreDisp.classList.remove("reachedGoal");
	}
}