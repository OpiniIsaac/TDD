const { assert } = require('chai');
const multiply = require('../mutiply');

describe('Multiply', () => {
  it('first cylces test', () => {
    assert.equal(multiply(2, 2), 4);
  });
  it('second cylces test', () => {
    assert.equal(multiply(2, 2), 4);
  });
  it('third cylces test', () => {
    assert.equal(multiply(3, 3), 9);
  });
  it('fourth  cylces test', () => {
    assert.equal(multiply(4, 4), 16);
  });
  it('third cylces test', () => {
    assert.equal(multiply(23, 45), 23 * 45 );
  });

});
