/**
 * @module common
 */

/**
 * 字符串转变为布尔值
 *
 * @param input 需要转换的布尔字符串
 * @returns {boolean} 如果输入的字符串是'true'返回true,'false'返回false
 * @example
 *
 * stringToBool('true')
 * // => true
 *
 * stringToBool('false')
 * // => false
 *
 * stringToBool('abc')
 * // => false
 */
export function stringToBool(input: string) {
  return /^true$/i.test(input);
}
