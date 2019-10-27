const assert = require('assert');

const FizzBazz = require ('./src/FizzBazz');
const StringCalculator = require ('./src/StringCalc');
const HPStore = require ('./src/HPStore');
const LCD = require ('./src/LCD');
const WordWrap = require ('./src/WordWrap');

describe('TestTDD', () => {
    describe('Task 1' , () => {
        beforeEach(() => {
            this.fizzBazz = new FizzBazz();
        });

        it('Check "1"', () => {
            assert.strictEqual(this.fizzBazz.returnMagicNumber(1), "1");
        });

        it('Check "2"', () => {
            assert.strictEqual(this.fizzBazz.returnMagicNumber(2), "2");
        });

        it('Check "3"/"Fizz"', () => {
            assert.strictEqual(this.fizzBazz.returnMagicNumber(3), "Fizz");
        });

        it('Check "4"', () => {
            assert.strictEqual(this.fizzBazz.returnMagicNumber(4), "4");
        });

        it('Check "5"/"Bazz"', () => {
            assert.strictEqual(this.fizzBazz.returnMagicNumber(5), "Bazz");
        });

        it('Check "6"', () => {
            assert.strictEqual(this.fizzBazz.returnMagicNumber(6), "Fizz");
        });

        it('Check "15"', () => {
            assert.strictEqual(this.fizzBazz.returnMagicNumber(15), "FizzBazz");
        });

        it('Check "45"', () => {
            assert.strictEqual(this.fizzBazz.returnMagicNumber(45), "FizzBazz");
        });
    });

    describe('Task 2' , () => {
        beforeEach(() => {
            this.stringCalc = new StringCalculator();
        });

        it('Calculate empty string', () => {
            assert.strictEqual(this.stringCalc.calculate(''), 0);
        });

        it('Calculate simple string with one element', () => {
            assert.strictEqual(this.stringCalc.calculate('1'), 1);
        });

        it('Calculate simple string with one element 2', () => {
            assert.strictEqual(this.stringCalc.calculate('9'), 9);
        });

        it('Calculate simple string with two elements', () => {
            assert.strictEqual(this.stringCalc.calculate('1,0'), 1);
        });

        it('Calculate simple string with two elements 2', () => {
            assert.strictEqual(this.stringCalc.calculate('1,133'), 134);
        });

        it('Calculate simple string with 3 elements ', () => {
            assert.strictEqual(this.stringCalc.calculate('5,6,7'), 18);
        });

        it('Calculate simple string with "\\n" delimiter ', () => {
            assert.strictEqual(this.stringCalc.calculate('5\n6\n7', '\n'), 18);
        });

        it('Calculate simple string with ";" delimiter ', () => {
            assert.strictEqual(this.stringCalc.calculate('5;6;7', ';'), 18);
        });

        it('String with negative numbers return exceptions', () => {
            const exercise = () => this.stringCalc.calculate('-5;6;7', ';');
            assert.throws(exercise, new Error('Negative numbers not allowed!'));
        });

        it('String with 2 negatives numbers return exceptions', () => {
            const exercise = () => this.stringCalc.calculate('-5;-6;7', ';');
            assert.throws(exercise, new Error('Negative numbers not allowed!'));
        });
    });

    describe('Task 3 HP' , () => {
        beforeEach(() => {
            this.hpStore = new HPStore();
        });

        it('Should Buy nothing', () => {
            assert.strictEqual(this.hpStore.calculateBookPrice([]), 0);
        });

        it('Buy 1 book', () => {
            assert.strictEqual(this.hpStore.calculateBookPrice([1]), 8);
        });

        it('Buy 2 different books (5% discount)', () => {
            assert.strictEqual(this.hpStore.calculateBookPrice([1, 2]), 15.2);
        });

        it('Buy 3 different books (10% discount)', () => {
            assert.strictEqual(this.hpStore.calculateBookPrice([1, 2, 3]), 21.6);
        });

        it('Buy 4 different books (20% discount) ', () => {
            assert.strictEqual(this.hpStore.calculateBookPrice([1, 2, 3, 4]), 25.6);
        });

        it('Buy 5 different books (25% discount) ', () => {
            assert.strictEqual(this.hpStore.calculateBookPrice([1, 2, 3, 4, 5]), 30);
        });

        it('Buy 3 different books and 2 same books (20% for 4 books, 1 without discount) ', () => {
            assert.strictEqual(this.hpStore.calculateBookPrice([1, 1, 3, 4, 5]), 33.6);
        });

        it('Task Case check ', () => {
            assert.strictEqual(this.hpStore.calculateBookPrice([1, 1, 2, 2, 3, 3, 4, 5]), 51.6);
        });
    });

    describe('Task 4 LCD' , () => {
        beforeEach(() => {
            this.lcd = new LCD();
        });

        it('Should Print Zero', () => {
            assert.strictEqual(this.lcd.print(0), "._.\n|.|\n|_|\n");
        });

        it('Should Print 1', () => {
            assert.strictEqual(this.lcd.print(1), "...\n|..|\n..|\n");
        });

        it('Should Print 2', () => {
            assert.strictEqual(this.lcd.print(2), "._.\n._|\n|_.\n");
        });

        it('Should Print 3', () => {
            assert.strictEqual(this.lcd.print(3), "._.\n._|\n._|\n");
        });

        it('Should Print 4', () => {
            assert.strictEqual(this.lcd.print(4), "...\n|_|\n..|\n");
        });

        it('Should Print 5', () => {
            assert.strictEqual(this.lcd.print(5), "._.\n|_.\n._|\n");
        });

        it('Should Print 6', () => {
            assert.strictEqual(this.lcd.print(6), "._.\n|_.\n|_|\n");
        });

        it('Should Print 7', () => {
            assert.strictEqual(this.lcd.print(7), "._.\n..|\n..|\n");
        });

        it('Should Print 8', () => {
            assert.strictEqual(this.lcd.print(8), "._.\n|_|\n|_|\n");
        });

        it('Should Print 9', () => {
            assert.strictEqual(this.lcd.print(9), "._.\n|_|\n..|\n");
        });

        it('Should Print 11 (header only)', () => {
            assert.strictEqual(this.lcd.printDigits([1, 1]).split("\n")[0], "......");
        });

        it('Should Print 11 Full (Print Digits)', () => {
            assert.strictEqual(this.lcd.printDigits([1, 1]), "......\n|..||..|\n..|..|\n");
        });

        it('Should Print 2 Full (Print Digits)', () => {
            assert.strictEqual(this.lcd.printDigits([2]), "._.\n._|\n|_.\n");
        });

        it('Split digit 1', () => {
            assert.deepEqual(this.lcd.splitDigit(1), [1]);
        });

        it('Split digit 2', () => {
            assert.deepEqual(this.lcd.splitDigit(2), [2]);
        });

        it('Split digit 12', () => {
            assert.deepEqual(this.lcd.splitDigit(12), [1, 2]);
        });

        it('Split digit 123', () => {
            assert.deepEqual(this.lcd.splitDigit(123), [1, 2, 3]);
        });

        it('Split digit 121', () => {
            assert.deepEqual(this.lcd.splitDigit(121), [1, 2, 1]);
        });

        it('Should Print 11 Full (PRINT)', () => {
            assert.strictEqual(this.lcd.print(11), "......\n|..||..|\n..|..|\n");
        });
    });

    describe('Task 5 Word Wrap' , () => {
        beforeEach(() => {
            this.wordWrap = new WordWrap();
        });

        it('Should return empty string', () => {
            assert.strictEqual(this.wordWrap.transform('', 1), '');
        });

        it('Should return symbol', () => {
            assert.strictEqual(this.wordWrap.transform('x', 1), 'x');
        });

        it('Should split two symbols', () => {
            assert.strictEqual(this.wordWrap.transform('x x', 1), 'x\nx');
        });

        it('Should split two symbols 2', () => {
            assert.strictEqual(this.wordWrap.transform('x xx', 2), 'x\nxx');
        });

        it('Should split two words with bad width (for testing)', () => {
            assert.strictEqual(this.wordWrap.transform('xxxx xx', 2), 'xxxx\nxx');
        });

        it('Should split  4 words', () => {
            assert.strictEqual(this.wordWrap.transform('im not very like it', 5), 'im\nnot\nvery\nlike\nit');
        });
    });
});
