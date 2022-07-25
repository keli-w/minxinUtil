import { isArray } from '../../esm/common';
import { showToast } from '../../common/jsapi';

Page({
  data: {
    arr1: [],
  },
  handleClick() {
    const { arr1 } = this.data;
    if (isArray(arr1)) {
      showToast({ content: `arr1 is array` });
    }
  }
});
