/**
 * @module common
 */

/**
 * 检查 `input` 是否是字符串
 *
 * @since 1.1.0
 * @param {*} input 需要检查的输入
 * @returns {boolean} 如果`input`是字符串返回 `true`, 反之返回 `false`
 * @example
 *
 * isString()
 * // => false
 *
 * isString('a')
 * // => true
 *
 *  isString(true)
 * // => false
 */
export function isString(input: any) {
  return typeof input === 'string' || input instanceof String;
}
