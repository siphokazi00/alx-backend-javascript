// 2-calcul_chai.test.js
const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
    describe('SUM', function () {
        it('should return 6 for inputs (1.4, 4.5)', function () {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
        });

        it('should return 0 for inputs (-1.4, 1.4)', function () {
            assert.strictEqual(calculateNumber('SUM', -1.4, 1.4), 0);
        });
    });

    describe('SUBTRACT', function () {
        it('should return -4 for inputs (1.4, 4.5)', function () {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });
     });

    describe('DIVIDE', function () {
        it('should return 0.2 for inputs (1.4, 4.5)', function () {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });

        it('should return "Error" when dividing by 0', function () {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        });

        it('should return "Error" when rounded divisor is 0', function () {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.4), 'Error');
	});
     });
});
