# sweet-mobile-template 模版工程
> 移动端项目工程模版

项目工程是通过 `sweet init`命令生成，这里是对工程详细说明

全局安装sweet-cli命令
```npm
npm install @sweetui/sweet-cli -g
or 
sudo npm install @sweetui/sweet-cli -g
```
npm install 安装node包
```npm
 npm install
```
npm run git-install 安装git钩子(很重要)
```npm
 npm run git-install
```
npm start 启动项目
```npm
npm start
```
### 工程Project

* --- dist  // 打包目录
* --- node_modules // 包目录
* --- src  // 工程目录
  * --- lang  // 语言包目录
    * zh.js 
    * en.js
  * --- modules // 模块开发目录
     * demo  
     * demo_plugin // plugin插件
     * demo_theme // 存放demo样式
       * components
       * ios // ios风格样式
       * md // 安卓风格样式
       * index.less // 样式入口文件
* --- .babelrc // babel配置
* --- .eslintignore // eslint忽略文件配置
* --- .eslintrc.js //  eslint规则配置
* --- .gitignore  
* --- app.config.js // 项目工程的一些配置项
* --- constants.js  // 存放项目工程常量
* --- favicon.ico // ico图标
* --- index.template.ejs // index.html ejs模版
* --- package.json
* --- package-lock.json
* --- postcss.config.js // css兼容配置
* --- README.md
* --- vendors-manifest.json // Dll打包的manifest文件，加速打包


工程依赖以下npm包

* `@sweetui/sweet-mobile` 工具包 方法默认都注入工程
   * I18n国际化
   * Theme换肤
   * SWXHR Http请求
   * SWTOOL 公共方法
* `@sweetui/sweet-mobile-sdk` 基础包 &nbsp;基于webpack4的Vue.js 2的工程化配置
* `@sweetui/sweet-mobile-lib` 组件库包
  
  
  
### 关于Http请求
```js
/**
  * 本地文件获取(只支持dev模式)
  * 例如：
  * json文件的开发路径为： src/modules/demo/request/json/list.json
  * ajax调用的路径则是：src/modules/demo/request/json/list.json
  */
  this.SWXHR.GET('src/modules/demo/request/json/list.json')
    .then(res => {
     ...
  })
  
/**
  * 正常http请求
  */
  this.SWXHR.GET('http://xxx.xx.com/test')
    .then(res => {
     ...
  })
  
```


### app.config.js 
```js
/**
 * 项目可定制化配置项
 * Created by zdliu on 2018/4/3.
 */
const path = require('path')
const constants = require('./constants')

module.exports = {
    // 开发服务端口
    appPort: 9009,
    // 移动端设计稿尺寸，用于配置响应式放缩的基数 默认尺寸750
    designSize: 750,
    // 最优尺寸： 当屏幕宽度大于720的时候，默认显示iphone plus 414尺寸的放缩，主要适配ipad等
    optimalSize: 414,
    // 生产环境代码是否启用离线缓存 默认 false
    offlineCaching: false,
    // webpack的差异化配置
    webpack: {
        // 入口
        entry: {
            app: path.join(__dirname, 'src/main.js'),
        },
        // 可以添加第三方包，加快打包速度和加载
        vendors: [],
        // 自定义Alias设置
        resolveAlias: {},
        // 扩展rules
        rules: [],
    },
    // 设置开发环境接口对应代理前缀
    proxy: constants.proxy,
    // 是否对npm包里的css进行postcss处理 默认false
    postcssNodeModules: false,
    // 根据环境变量(process.env.SWEET_ENV，执行命令时期)的值 获取对应的 definePlugin对象，设置环境变量值
    definePlugin: constants.definePlugin[process.env.SWEET_ENV],
    // 默认语言设置 localStorage存储值 > 这里language配置, 都为空时根据浏览器环境取值
    language: 'en',
    // 换肤配置
    themeConfig: {
        key: 'SWEET-THEME-COLOR', // localStorage存储的key字段, key根据项目变化,不能为空
        name: 'red', // 项目初始化设置的皮肤的name 为空默认肤色 正常来说不设置
        f7name: 'red', // 项目初始化设置的framework7皮肤name 为空默认肤色 正常来说不设置
    }
}
```

关于项目的一些配置项

* webpack 根据项目需求对webpack构建进行一些扩展配置

* language 默认语言设置 

* themeConfig 项目换肤配置

* proxy 设置开发接口代理
```js
    /**
     * 设置多个代理接口前缀
     * 设置的 key匹配加载 相应接口前面，匹配到后会自动replace掉key
     * 例: '/api':'http://restapi.com' 调用 '/api/comm/getUser'
     * 最后匹配生成 'http://restapi.com/comm/getUser'
     * 所有ajax接口配置的proxy前缀只在开发环境起作用，生产环境会自动忽略。接口请求必须设置前缀匹配
     * 接口代理key必须以 '/api' 开头！！！
     * 如果是非接口请求设置真实路径作为key(一般很少)
     * 例: '/captcha': 'http://10.86.96.242:19950', 调用 <img src="/captcha?v=1527643456560"/>
     * 最后会代理到 'http://10.86.96.242:19950/captcha?v=1527643456560'
     */
    proxy: {
        '/api': 'http://10.86.96.242:19950',
        '/captcha': 'http://10.86.96.242:19950',
    },
```

* definePlugin 设置环境变量 根据 自定义环境变量process.env.SWEET_ENV 取值,主要是为了不熟不同生产环境需要不同的值这类业务需求。
```js
/**
   * 根据环境变量(process.env.SWEET_ENV,可用其他的)的值 获取对应的 definePlugin对象，设置环境变量值
   * process.env.SWEET_ENV 在 package.json 命令上设置  例：cross-env SWEET_ENV=production
   * 主要是为了不熟不同生产环境需要不同的值这类业务需求。
   * 下面是demo
   */
  definePlugin: {
    development: {
      VUE_ENV: JSON.stringify('src'),
    },
    production: {
      VUE_ENV: JSON.stringify('client'),
    },
  },
```


### constants.js

```js
/**
 * 存放项目常量
 * Created by zdliu on 2018/4/3.
 */
module.exports = {
   /**
    * 设置多个代理接口前缀
    * 设置的 key匹配加载 相应接口前面，匹配到后会自动replace掉key
    * 例: '/api':'http://restapi.com' 调用 '/api/comm/getUser'
    * 最后匹配生成 'http://restapi.com/comm/getUser'
    * 所有ajax接口配置的proxy前缀只在开发环境起作用，生产环境会自动忽略。接口请求必须设置前缀匹配
    * 接口代理key必须以 '/api' 开头！！！
    * 如果是非接口请求设置真实路径作为key(一般很少)
    * 例: '/captcha': 'http://10.86.96.242:19950', 调用 <img src="/captcha?v=1527643456560"/>
    * 最后会代理到 'http://10.86.96.242:19950/captcha?v=1527643456560'
    */
   proxy: {
        '/api': 'http://10.86.96.242:19950',
        '/captcha': 'http://10.86.96.242:19950',
    },
  /**
     * 根据环境变量(process.env.SWEET_ENV,可用其他的)的值 获取对应的 definePlugin对象，设置环境变量值
     * process.env.SWEET_ENV 在 package.json 命令上设置  例：cross-env SWEET_ENV=production
     * 主要是为了不熟不同生产环境需要不同的值这类业务需求。
     * 下面是demo
     */
  definePlugin: {
    development: {
      VUE_ENV: JSON.stringify('src'),
    },
    production: {
      VUE_ENV: JSON.stringify('client'),
    },
  },
  /**
   * framework7常量
   */
  framework7config: {
  ....
  }
}
```


### log
eslint 默认配置 console为 warn. 这里sdk公共log方法

对于在vue组件中使用：
```js
// 在某全局模块下，比如main.js
import Vue from 'vue'
import vueLogger from '@sweetui/sweet-mobile-sdk/config/logger/vue-logger'
// 注入log方法
Vue.use(vueLogger)
```
```vue
// 在.vue组件中使用
this.log('xxx')
this.info('yyy')
this.warn('yyy')
this.error('yyy')
```

### 关于jsdoc

- [JSDoc官方文档http://usejsdoc.org/](http://usejsdoc.org/)

演示一下jsdoc的标准写法：

```js
/**
 * 解释这个function的作用，可以把处理的思路写下来
 * @param  {Array} param1 - 参数param1的解释
 * @param  {Object} param2 - 参数param2的解释
 * @param  {number} param3 - 参数param3的解释
 * @return {string} 对返回值的解释，如果没有返回值，则不需要添加这一项
 */
function jsdocExample(param1, param2, param3) {
  // ...
  return ''
}
```

### pre-commit钩子函数
github提交前验证eslint规则，通过才能提交。所以工程最好在git工程主目录下。

如果git提交没有验证，请执行 '`npm run git-install`'命令


### Configuration tasks/命令
* npm start: 启动开发模式下的server
* npm run dll: 打包第三方库，主要优化开发和生产代码的打包速度
* npm run build: 打包代码命令
* npm run prod: 打包生产环境代码命令 
* npm run git-install: 安装git钩子，验证eslint规则、msg格式(本地必须执行一次)
* npm run fix-eslint: 修复大部分Eslint规则

这里涉及到环境变量参数的设置 

npm start 设置环境变量cross-env SWEET_ENV=development  

npm run prod 设置环境变量cross-env SWEET_ENV=production  

NODE_ENV的值 对应 constants.js文件里的definePlugin对象的对应属性值。即NODE_ENV=development取的是 definePlugin.development 

```js
// 打印设置的key和值 
console.log(process.env)
// 输出 
{VUE_ENV: "src"}

process.env.VUE_ENV === 'src'
```
这里针对可能生产代码部署不同环境需要设置不同的参数值

