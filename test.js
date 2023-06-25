const { assert } = require('chai');
const multiply = require('./mutiply');

describe('Multiply', () => {
  it('should multiply 1 and 1', () => {
    assert.equal(multiply(1, 1), 1);
  });
});
