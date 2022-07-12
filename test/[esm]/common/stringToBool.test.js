import assert from 'assert';
import { stringToBool } from '../../../esm/common';

describe('stringToBool', () => {
  it('字符true转为布尔', () => {
    assert.equal(stringToBool('true'), true);
  });

  it('字符false转为布尔', () => {
    assert.equal(stringToBool('false'), false);
  });

  it('非布尔字符转布尔', () => {
    assert.equal(stringToBool('abc'), false);
    assert.equal(stringToBool(new String('abc')), false);
  });
})
