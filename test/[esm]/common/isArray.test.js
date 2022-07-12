import assert from 'assert';
import { isArray } from '../../../esm/common';

describe('isArray', () => {
  var arr1 = [];
  var arr2 = new Array(2);

  it('验证数组', () => {
    assert.equal(isArray(arr1), true);
    assert.equal(isArray(arr2), true);
  });
  it('验证对象', () => {
    assert.equal(isArray({}), false);
    assert.equal(isArray({ 1: 'ss', 2: 'xx' }), false);
  });

  it('Array.isArray不存在', () => {
    const nativeIsArray = Array.isArray;
    Array.isArray = null;
    const result1 = isArray([]);
    const result2 = isArray({});
    Array.isArray = nativeIsArray;

    assert.equal(result1, true);
    assert.equal(result2, false);
  });
});
