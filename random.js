// Your job is to create a web page that, when the user clicks anywhere in the window, randomly determine if an air traveller should go down the left lane or the right lane by displaying an arrow in that direction.
var output = document.getElementById("arrow");
var changeArrow = document.getElementById("submit");

function getRandomNumber() {
  var randomNumber = Math.floor( Math.random() * 10 ) + 1; 
  if (randomNumber <= 5){
  	output.innerHTML = `<div><img src="http://www.wpclipart.com/phpimageeditor/editimagesworkwith/Arrow_comic_left_red_1473286564_50_207_137_70.png"></div>`;
  } else {
  	output.innerHTML = `<div><img src="http://www.wpclipart.com/phpimageeditor/editimagesworkwith/Arrow_comic_right_green_1473287016_50_207_137_70.png"></div>`;
  }
}
changeArrow.addEventListener("click", getRandomNumber);

