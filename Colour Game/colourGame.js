var defaultColor = "rgb(66, 134, 244)";

var newColors = document.getElementById("newColors");
var jumbotron = document.getElementById("jumbotron-override");
var squareColors = document.querySelectorAll(".square");
var colorTitleDisp = document.querySelector("h1");
var easyMode = document.getElementById("easyDiff");
var hardMode = document.getElementById("hardDiff");
var result = document.getElementById("result");
result.textContent = "";
var isEasy = false;
var done = false;
hardMode.classList.add("selected");

jumbotron.style.background = defaultColor;
var colors = generateColors();
var correctColor = colors[0];
colorOptions();
colorTitleDisp.innerHTML = correctColor;

function randomColor() {
	r = Math.floor(Math.random() * 256);
	g = Math.floor(Math.random() * 256);
	b = Math.floor(Math.random() * 256);
	return ("rgb(" + r + ", " + g + ", " + b + ")");
}

//create an array of the 6 colors used
function generateColors() {
	var colors = [];
	for (i = 0; i < 6; i++) {
		colors[i] = randomColor();
	}
	return colors;
	done = false;
}

//new colors
newColors.addEventListener("click", function() {
	colors = generateColors();
	correctColor = colors[0];
	jumbotron.style.background = defaultColor;
	colorOptions();
	colorTitleDisp.innerHTML = correctColor;
});

//fill in other options colors
function colorOptions () {
	var shuffledColors = shuffleArray(colors);
	for (i = 0; i < squareColors.length; i++) {
		squareColors[i].style.background = shuffledColors[i];
	}
	done = false;
}

easyMode.addEventListener("click", function() { 
	if (!done) {
		easyMode.classList.add("selected");
		hardMode.classList.remove("selected");
		isEasy = true;
		for (var i = 3; i < 6; i++) {
			squareColors[i].classList.add("disappear");
		}
	}
});
hardMode.addEventListener("click", function() { 
	if (!done) {
		easyMode.classList.remove("selected");
		hardMode.classList.add("selected");
		isEasy = false;
		for (var i = 3; i < 6; i++) {			
			squareColors[i].classList.remove("disappear");
		}
	}
});

function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}

//check correct color
for (var i = 0; i < squareColors.length; i++) {
	squareColors[i].addEventListener("click", function() {
		done = true;
		if (this.style.background == correctColor) {
			result.textContent = "Correct!";
			jumbotron.style.background = correctColor;
			for (var j = 0; j < 3; j++) {
				squareColors[j].classList.remove("disappear");
				squareColors[j].style.background = correctColor;
			}
			for (var j = 3; j < 6; j++) {
				if (!isEasy) {
					squareColors[j].classList.remove("disappear");
				}
				squareColors[j].style.background = correctColor;
			}
		}
		else {
			result.textContent = "Try Again!";
			this.classList.add("disappear");
		}
	});
}
