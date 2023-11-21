'use strict';
let name = prompt("Type your name: ");

let result;
do {
  result = Math.floor(Math.random()*5);
} while (result == 0);


switch (result) {
    case 1:
      document.getElementById('target').innerHTML =  name + ', you are a Gryffindor.'
      break;

    case 2:
      document.getElementById('target').innerHTML =  name + ', you are a Ravenclaw.'
      break;

    case 3:
      document.getElementById('target').innerHTML =  name + ', you are a Slytherin.'
      break;

    case 4:
      document.getElementById('target').innerHTML =  name + ', you are a Hufflepuff.'
      break;

    default:
      console.log("Invalid number.")
}