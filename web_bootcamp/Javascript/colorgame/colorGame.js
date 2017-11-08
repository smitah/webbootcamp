
var numsquares = 6;
var colors = generateRandomColors(numsquares);
var square = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var pickedColor = pickColor();
var reset = document.getElementById("reset");
var hardButton = document.querySelector("#hardbutton");
var easyButton = document.querySelector("#easybutton");

easyButton.addEventListener("click",function(){
	this.classList.add("selected");
	hardButton.classList.remove("selected");
	numsquares = 3;
	colors = generateRandomColors(numsquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i<square.length; i++){
		if(colors[i]) {
			square[i].style.backgroundColor = colors[i];
		} else {
			square[i].style.display = "none";
		}
	}
})

hardButton.addEventListener("click",function(){
	this.classList.add("selected");
	easyButton.classList.remove("selected");
	numsquares = 6;
	colors = generateRandomColors(numsquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i<square.length; i++){
		square[i].style.backgroundColor = colors[i];
		square[i].style.display = "block";
		}
})




function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

reset.addEventListener("click",function() {
colors = generateRandomColors(numsquares);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
for(var i = 0; i<square.length;i++){
	square[i].style.backgroundColor = colors[i];
}
reset.textContent = "New Colors";
h1.style.backgroundColor = "steelblue";
messageDisplay.textContent = "";
})


colorDisplay.textContent = pickedColor;

for(var i = 0; i<square.length; i++)
{
	square[i].style.backgroundColor = colors[i];
	square[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct! ";
			changedColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
			reset.textContent = "Play Again!";
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again! ";
		}
	});

}

function changedColor(color) {
	for(var i = 0; i<square.length; i++){
		square[i].style.backgroundColor = color;
	}
}



function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i<num; i++){
    arr.push(randomColor());
	}
	return arr;
}

function randomColor() {

	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b +")";

}