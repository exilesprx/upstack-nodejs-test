const input = require('./input.json');
const generator = require('./output-generator')(input.numbers);

let number = generator.generateNumberString();

console.log(number);