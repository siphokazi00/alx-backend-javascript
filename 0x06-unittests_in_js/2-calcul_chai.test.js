// 2-calcul_chai.test.js

const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', function () {
  describe('SUM operation', function () {
    it('should return 6 when inputs are 1.4 and 4.5', function () {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 5 when inputs are 1.2 and 3.7', function () {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });
  });

  describe('SUBTRACT operation', function () {
    it('should return -4 when inputs are 1.4 and 4.5', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return 2 when inputs are 3.7 and 1.2', function () {
      expect(calculateNumber('SUBTRACT', 3.7, 1.2)).to.equal(2);
    });
  });

  describe('DIVIDE operation', function () {
    it('should return 0.2 when inputs are 1.4 and 4.5', function () {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when division by 0', function () {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });

  describe('Invalid operation type', function () {
    it('should throw an error when type is invalid', function () {
      expect(() => calculateNumber('MULTIPLY', 1.4, 4.5)).to.throw('Invalid operation type');
    });
  });
});
