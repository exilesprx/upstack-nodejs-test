const generator = require("../output-generator");
const testTaskInput = require("../input");

test('it should throw exception when not passing an array as the argument', () => {

    generator(1);

    expect(() => {
        generator.generateNumberString();
    }).toThrowError();
});

test('it should output 123', () => {
    
    generator([1,2,3]);

    let output = generateNumberString();

    expect(output).toBe("123");
});

test('it should output 1', () => {

    generator([1]);

    let output = generateNumberString();

    expect(output).toBe("1");
});

test('it should ouput 123456789', () => {

    generator(testTaskInput.numbers);
    
    let output = generateNumberString();

    expect(output).toBe("123456789");
});