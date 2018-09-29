const generator = (numbers) => {

    return {
        numbers: numbers,

        generateNumberString: function() {

            if (!this.numbers instanceof Array) {
                throw TypeError("Number must be an array");
            }

            let a = () => {
                return this.numbers.join("");
            }
        
            return a();
        }
    }
}

module.exports = generator;