'use strict'

let dice_rolls = prompt("How many times do you want to roll the dice?: ");

let summa = 0

for(let e = 0; e < dice_rolls; e++) {
  do {
    summa += Math.floor(Math.random()*7)
  } while (summa == 0)
}

console.log(summa)