/**
 * 弱提示
 * @param {IShowToastOptions} options
 * @returns
 */
export const showToast = (options) => {
  return new Promise((resove) => {
    my.showToast({
      ...options,
      success: () => resove(true),
      fail: () => resove(false),
    });
  })
};
