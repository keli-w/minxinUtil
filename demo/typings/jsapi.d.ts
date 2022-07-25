interface IShowToastOptions {
  /** 文字内容 */
  content: string;
  /** toast 类型
   * 展示相应图标，默认 none，支持 success / fail / exception / none。
   * 其中 exception 类型必须传文字信息
   * */
  type: string;
  /** 显示时长，单位为 ms，默认值为 3000 */
  duration: string;
}
