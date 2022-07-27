## 手把手带你打造自己的工具库
> 我们开发过程中最常用到的工具函数库就是[lodash](https://www.lodashjs.com/),我们也可以针对自己平时业务开发过程中常用到的自己封装过的工具函数，放到自己的工具库中。基于这样的一个初心，我就打算自己弄一个玩玩啰😄
### 项目搭建
#### 初始化roullp项目
- git clone 下仓库，并完善package.json
```bash
git clone + 远程仓库

npm init -y
```
- rollup: 安装rollup模块
- 添加rollup.config.js配置文件
```bash
tnpm i -D rollup
```
- rollup-plugin-typescript2 typescript: 使用ts开发
```bash
npm i rollup-plugin-typescript2 typescript -D
```
- 修改script启动脚本
```json
"scripts": {
    "build:js": "rollup -c ",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
- 引入ts
- 安装ollup-plugin-typescript2 typescript
- 配置tsconfig.json
```bash
npm i rollup-plugin-typescript2 typescript -D
```
- 引入babel
- 安装相应模块
```bash
npm i rollup-plugin-babel@latest @babel/core @babel/preset-env -D
```
- 引入eslint
- 安装相应的模块
- 配置eslint文件
```bash
npm i eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
```
