var colors = [" "];
var sqrs = document.querySelectorAll(".square");
var msg = document.querySelector("p");
var rgbDisp = document.querySelector("#rgb-display");
var picked;

for(i=0; i<6; i++){			//populate squares with random colors
	colors[i] = genRGB();
}
picked = pickColor();

rgbDisp.textContent = picked;



for (var i=0; i<sqrs.length; i++){
	sqrs[i].style.background = colors[i];	//color the boxes
	sqrs[i].addEventListener("click", function(){
		if (this.style.background !== picked){	//make wrong picked box disappear
				this.style.background = "#232323";
		}else {
			msg.textContent = "Correct!";
			changeColor(picked);
		}
	});
}

function changeColor(color) {
	for (var i=0; i<sqrs.length; i++){	//change color of all boxes to the picked color
				sqrs[i].style.background = color;
			}
}

function pickColor() {
	var random = Math.floor(Math.random()*6);
	return colors[random];
}

function rdmGen(){ //generate random number [0-255]
	return Math.floor(256 * Math.random());
}

function genRGB(){
	var randomColor = ("rgb(" + rdmGen() + ", " + rdmGen() + ", " + rdmGen() + ")");
	return randomColor;
}