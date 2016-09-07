// Your job is to create a web page that, when the user clicks anywhere in the window, randomly determine if an air traveller should go down the left lane or the right lane by displaying an arrow in that direction.

function getRandomNumber(upper) {
  var randomNumber = Math.floor( Math.random() * upper ) + 1; 
  return randomNumber;
}
console.log(getRandomNumber(6));
console.log(getRandomNumber(1000));