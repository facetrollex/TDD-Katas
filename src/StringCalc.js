module.exports = class StringCalculator {
    constructor() {}

    calculate(numberString = '', delimiter = ',') {
        let sum = 0;

        this.convertString(numberString, delimiter).forEach((number) => {
            this.validateNumber(number);
            sum += +number;
        });

        return sum;
    }

    convertString(string, delimiter) {
        return string.split(delimiter);
    }

    validateNumber(number) {
        if(number < 0) {
            throw Error('Negative numbers not allowed!');
        }
    }
};
