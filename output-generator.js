const generator = function(numbers) {

    this.numbers = numbers;

    this.generateNumberString = () => {
        // 'this' points to the context of the generator function here

        if (!this.numbers instanceof Array) {
            throw TypeError("Number must be an array");
        }
    
        return this.numbers.join("");
    }

    return this;
}

module.exports = generator;