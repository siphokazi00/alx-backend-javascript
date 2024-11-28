const assert = require('assert');

describe('Math Tests', function () {
    it('should return true when 1 equals 1', function () {
        assert.strictEqual(1, 1, '1 does not equal 1');
    });

    it('should throw an error for unequal values', function () {
        assert.notStrictEqual(1, 2, '1 equals 2 but should not');
    });
});
