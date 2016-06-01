var colors = [" "];
var sqrs = document.querySelectorAll(".square");
var msg = document.querySelector("p");
var rgbDisp = document.querySelector("#rgb-display");
var picked;
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");
var header = document.querySelector("#header");
var numOfSquares = 6;

newGame();

resetBtn.addEventListener("click", function(){ //start a new game
	newGame();		
});

easyBtn.addEventListener("click", function(){
	numOfSquares = 3;							//set 3 squares to be used for easy mode
	hardBtn.classList.remove("selected");		//switch active buttons by changing background color
	this.classList.add("selected");
	for (var i=3; i<6; i++) {					//hide the bottom three squares for easy mode
		sqrs[i].style.background = "#232323";
		colors.pop();							//cut the colors array to only three
	}
	newGame();
});

hardBtn.addEventListener("click", function(){
	numOfSquares = 6;							//set 6 squares to be used for hard mode
	easyBtn.classList.remove("selected");		//switch active buttons by changing background color
	this.classList.add("selected");
	newGame();
});

for (var i=0; i<sqrs.length; i++){
	sqrs[i].addEventListener("click", function(){	//add event listener to every square
		if (this.style.background !== picked){		//if clicked DOESNT MATCH the picked color
				this.style.background = "#232323";	//make wrong picked box disappear
		}else {										//if clicked MATCHED the picked color EXECUTE COMMANDS BELOW
			msg.textContent = "Correct!";			//display correct in message
			changeColor(picked);					//change color of all squares to the color picked
			header.style.background = picked;		//change header background to the picked color
			resetBtn.textContent = "Play Again?";	//change reset button text to play again?
		}
	});
}




function changeColor(color) {
	for (var i=0; i<numOfSquares; i++){	//change color of all boxes to the picked color
				sqrs[i].style.background = color;
			}
}

function pickColor() {								//random color picker
	var random = Math.floor(Math.random()*numOfSquares);
	return colors[random];
}

function randomColor(){								//random rgb generator
	var r = Math.floor(256 * Math.random());
	var g = Math.floor(256 * Math.random());
	var b = Math.floor(256 * Math.random());
	var randomColor = ("rgb(" + r + ", " + g + ", " + b + ")");
	return randomColor;
}

function generateRandomColors(num) {
	for(i=0; i<num; i++){			//populate squares with random colors
		colors[i] = randomColor();
		sqrs[i].style.background = colors[i];
	}
}

function newGame(){								//new game
	generateRandomColors(numOfSquares);			//generate random colors and color the squares
	picked = pickColor();						//pick a random color from the generated colors
	rgbDisp.textContent = picked;				//display the color to be guessed
	header.style.background = "rgb(0, 0, 255)";	//set header background to default
	resetBtn.textContent = "New Colors";		//reset button text
	msg.textContent = " ";						//empty message display
}