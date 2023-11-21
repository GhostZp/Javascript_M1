'use strict'
let confirmation = confirm('Should I calculate the square root?');


if (confirmation == true) {
  let number = prompt("Type your number: ");

  if (number >= 0) {
    number = Math.sqrt(number);
    document.getElementById('target').innerHTML = 'Square root: ' + number
  }
  else {
    document.getElementById('target').innerHTML =  'The square root of a negative number is not defined.'
  }
}

else {
    document.getElementById('target').innerHTML =  'The square root is not calculated.'
}