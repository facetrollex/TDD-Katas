'use strict';

const FIZZ = 'Fizz';
const BAZZ = 'Bazz';

module.exports =  class FizzBazz {
    constructor() {}

    returnMagicNumber(number) {
        let result = '';

        if(this.isDividedBy(number, 3)) {
            result += FIZZ;
        }

        if(this.isDividedBy(number, 5)) {
            result += BAZZ;
        }

        return this.isEmpty(result) ? number.toString() : result;
    }

    isDividedBy(number, dividend) {
        return number % dividend === 0;
    }

    isEmpty(string) {
        return string.length === 0;
    }
};
