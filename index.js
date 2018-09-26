const input = require('./input.json');
const generateNumberString = require('./output-generator')

let number = generateNumberString(input.numbers);

console.log(number);