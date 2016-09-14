// Your job is to create a web page that, when the user clicks anywhere in the window, randomly determine if an air traveller should go down the left lane or the right lane by displaying an arrow in that direction.
var output = document.getElementById("arrow");
// var changeArrow = document.getElementById("submit");

function getRandomNumber() {
  var randomNumber = Math.floor( Math.random() * 10 ) + 1; 
  if (randomNumber <= 5){
  	output.innerHTML = `<div><img src="arrow-left.png"></div>`;
  } else {
  	output.innerHTML = `<div><img src="right_arrow.gif"></div>`;
  }
}
output.addEventListener("click", getRandomNumber);

