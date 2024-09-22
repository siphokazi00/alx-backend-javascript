// 1-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function () {
  describe('SUM operation', function () {
    it('should return 6 when inputs are 1.4 and 4.5', function () {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 5 when inputs are 1.2 and 3.7', function () {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });
  });

  describe('SUBTRACT operation', function () {
    it('should return -4 when inputs are 1.4 and 4.5', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 2 when inputs are 3.7 and 1.2', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1.2), 2);
    });
  });

  describe('DIVIDE operation', function () {
    it('should return 0.2 when inputs are 1.4 and 4.5', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when division by 0', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });

  describe('Invalid operation type', function () {
    it('should throw an error when type is invalid', function () {
      assert.throws(() => calculateNumber('MULTIPLY', 1.4, 4.5), {
        name: 'Error',
        message: 'Invalid operation type',
      });
    });
  });
});
