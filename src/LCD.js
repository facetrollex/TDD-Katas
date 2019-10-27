'use strict';

const SYMBOL_MAP = {
    0: "._.\n|.|\n|_|",
    1: "...\n|..|\n..|",
    2: "._.\n._|\n|_.",
    3: "._.\n._|\n._|",
    4: "...\n|_|\n..|",
    5: "._.\n|_.\n._|",
    6: "._.\n|_.\n|_|",
    7: "._.\n..|\n..|",
    8: "._.\n|_|\n|_|",
    9: "._.\n|_|\n..|",
};

function getRow(digits, row) {
    let result = '';

    digits.forEach((digit) => {
        result += SYMBOL_MAP[digit].split("\n")[row];
    });

    result += '\n';

    return result;
}

// 💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩
module.exports = class LCD {
    constructor() {}

    print(number) {
        return this.printDigits(this.splitDigit(number));
    }

    printDigits(digits = []) {
        let result = '';

        for(let row = 0; row <= 2; row++) {
            result += getRow(digits, row);
        }

        return result;
    }

    splitDigit(digit) {
        return (''+digit).split("").map((digit) => +digit);
    }
};
