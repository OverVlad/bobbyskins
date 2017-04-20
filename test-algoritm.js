const { generateNumber } = require('./server/utils/generateNumber');

const numbers = [];
const red = [];
const black = [];
const zero = [];
const odd = [];
const even = [];

for(let i = 0; i < 100000; i++) {
  numbers[i] = generateNumber();
}

numbers.forEach(number => {
  if (number >= 1 && number < 8) red.push(number);
  if (number >= 8 && number < 15) black.push(number);
  if (number === 0) zero.push(number);

  if(number % 2 === 0) even.push(number);
  if(number % 2 !== 0) odd.push(number);
});


console.log('Выпало попыток: ', numbers.length);
console.log('Выпало красных всего: ', red.length, ' в процентном соотношении: %', red.length/numbers.length * 100);
console.log('Выпало чёрных всего: ', black.length, ' в процентном соотношении: %', black.length/numbers.length * 100);
console.log('Выпало zero всего: ', zero.length, ' в процентном соотношении: %', zero.length/numbers.length * 100);

console.log('Выпало чётных всего: ', even.length, ' в процентном соотношении: %', even.length/numbers.length * 100);
console.log('Выпало нечётных всего: ', odd.length, ' в процентном соотношении: %', odd.length/numbers.length * 100);
