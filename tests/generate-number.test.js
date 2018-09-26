const generateNumberString = require("../output-generator")
const testTaskInput = require("../input");

test('it should throw exception when not passing an array as the argument', () => {

    let input = 1;

    expect(() => {
        generateNumberString(input);
    }).toThrowError();
});

test('it should output 123', () => {
    
    let input = [1,2,3];

    let output = generateNumberString(input);

    expect(output).toBe("123");
});

test('it should output 1', () => {

    let input = [1];

    let output = generateNumberString(input);
});

test('it should ouput 123456789', () => {

    let output = generateNumberString(testTaskInput.numbers);

    expect(output).toBe("123456789");
});