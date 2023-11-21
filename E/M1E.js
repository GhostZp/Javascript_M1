'use strict';
let year = prompt("Type your year: ");

if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
  document.getElementById('target').innerHTML = 'Year is a leap year.'
}
else {
  document.getElementById('target').innerHTML =  'Year is not a leap year.'
}