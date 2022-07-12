import assert from 'assert';
import { isString } from '../../../esm/common';

describe('isString', () => {
  function myObject() { }
  it('应该为 true', () => {
    assert.equal(isString(new String('abc')), true);
    assert.equal(isString('abc'), true);
  });

  it('应该为 false', () => {
    assert.equal(isString(null), false);
    assert.equal(isString(new Object()), false);
    assert.equal(isString(new myObject()), false);
    assert.equal(isString([1, 2, 3]), false);
    assert.equal(isString(1), false);
    assert.equal(isString(Object(0)), false);
    assert.equal(isString(Function), false);
    assert.equal(isString(myObject), false);
    assert.equal(isString(new Date()), false);
    assert.equal(isString(new Error()), false);
    assert.equal(isString(/x/), false);
  });
});
