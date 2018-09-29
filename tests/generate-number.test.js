const generator = require("../output-generator");
const testTaskInput = require("../input");

test('it should throw exception when not passing an array as the argument', () => {

    let gen = generator(1);

    expect(() => {
        gen.generateNumberString();
    }).toThrowError();
});

test('it should output 123', () => {
    
    let gen = generator([1,2,3]);

    let output = gen.generateNumberString();

    expect(output).toBe("123");
});

test('it should output 1', () => {

    let gen = generator([1]);

    let output = gen.generateNumberString();

    expect(output).toBe("1");
});

test('it should ouput 123456789', () => {

    let gen = generator(testTaskInput.numbers);

    let output = gen.generateNumberString();

    expect(output).toBe("123456789");
});