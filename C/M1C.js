'use strict';
let number1 = prompt("Number 1: ");
let number2 = prompt("Number 2: ");
let number3 = prompt("Number 3: ");

number1 = parseInt(number1)
number2 = parseInt(number2)
number3 = parseInt(number3)

document.querySelector('#number1').innerHTML = 'Summa:  ' + (number1 + number2 + number3) + '!';
document.querySelector('#number2').innerHTML = 'Tulo:  ' + number1 * number2 * number3 + '!';
document.querySelector('#number3').innerHTML = 'Keskiarvo: ' + (number1 + number2 + number3) / 3 + '!';