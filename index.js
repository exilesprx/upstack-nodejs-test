const output = require('./output.json');

function generateNumberString(numbers) {
    return numbers.join("");
}

var number = generateNumberString(output.numbers);

console.log(number);