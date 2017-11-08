var p1button = document.getElementById("p1");
var p2button = document.querySelector("#p2");
var reset = document.querySelector("#reset");
var p1score = 0;
var p2score = 0;
var p1display  = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var h1  = document.querySelector("h1");
var gameover = false;
var winningscore = document.querySelector("p span");
var input = document.querySelector("input");
var gamingscore = 4;

p1button.addEventListener("click",function(){
if(!gameover)
{
p1score++;
p1display.textContent = p1score;
if(p1score === gamingscore || p2score === gamingscore)
{
	console.log("Game over");
	gameover = true;
	if(p1score === gamingscore)
	{
		p1display.style.color = "green";
	}
	if(p2score === gamingscore)
	{
		p2display.style.color = "green";
	}

}
}

});


p2button.addEventListener("click",function(){

if(!gameover)
{
p2score++;
p2display.textContent = p2score;
if(p1score === gamingscore || p2score === gamingscore)
{
	console.log("Game over");
	gameover = true;
	if(p1score === gamingscore)
	{
		p1display.style.color = "green";
	}
	if(p2score === gamingscore)
	{
		p2display.style.color = "green";
	}
}
}

});

reset.addEventListener("click",function(){
	p1score = 0;
	p2score = 0;
	p1display.textContent = p1score;
	p2display.textContent = p2score;
	gameover = false;
	p1display.style = "none";
	p2display.style = "none";
	
});

input.addEventListener("change",function(){
	gameover = false;
	winningscore.textContent = input.value;
	gamingscore = Number(input.value);
	p1display.style = "none";
	p2display.style = "none";
	p1score = 0;
	p2score = 0;
	p1display.textContent = p1score;
	p2display.textContent = p2score;

})