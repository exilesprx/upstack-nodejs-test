const generateNumberString = (numbers) => {
    if (!numbers instanceof Array) {
        throw TypeError("Number must be an array");
    }

    return numbers.join("");
}

module.exports = generateNumberString;