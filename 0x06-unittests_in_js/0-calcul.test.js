// 0-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function () {
  it('should return 4 when inputs are 1 and 3', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when inputs are 1 and 3.7', function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when inputs are 1.2 and 3.7', function () {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when inputs are 1.5 and 3.7', function () {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
  
  it('should handle negative numbers correctlly', function () {
    assert.strictEqual(calculateNumber(-1.4, -3.6), -5);
  });

  it('should handle one negative and one positive number', function () {
    assert.strictEqual(calculateNumber(-1.6, 2.6), 1);
  });

  it('should handle zeros correctly', function () {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should handle numbers close to rounding boundaries', function () {
    assert.strictEqual(calculateNumber(0.499, 0.501), 1);
  });

  it('should return 0 when inputs are 0.4 and 0.4', function () {
    assert.strictEqual(calculateNumber(0.4, 0.4), 0);
  });
});
