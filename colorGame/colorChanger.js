var numSquares = 6;
var colors = generateRandomColors(numSquares);

// failed hardcoding attempt [ var pickedColor = colors[3]; ]

var squares = document.querySelectorAll(".square");
for (var i = 0; i < squares.length; i++) {
	//adding color to squares
	squares[i].style.background = colors[i];
	var pickedColor = pickColor(); //extra

	//adding click listeners
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		/*console.log(clickedColor);
		console.log(pickedColor);*/
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again!";
		}
	});
}

//changing heading display
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

//message correct or try again
var messageDisplay = document.querySelector("#message");

//color changing when correct
function changeColors(color) {
	// loop through squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

//random color generator
function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//random color generated
function generateRandomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

//changing h1 background
var h1 = document.querySelector("h1");

//reset
var resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function() {
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors";
		for (var i = 0; i < squares.length; i++) {
		//adding color to squares
		squares[i].style.background = colors[i];
		}
	h1.style.background = "steelblue";
	messageDisplay.textContent = "";

})

//difficulty buttons
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
	numSquares = 3;
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		//adding color to squares
		if(colors[i]) {
			squares[i].style.background = colors[i]
		} else {
			squares[i].style.display = "none";
		}
		}
	h1.style.background = "steelblue";
})

hardBtn.addEventListener("click", function() {
	numSquares = 6;
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		//adding color to squares
			squares[i].style.background = colors[i]
			squares[i].style.display = "block";
		}
	h1.style.background = "steelblue";
})