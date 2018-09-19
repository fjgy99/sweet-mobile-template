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
    // 生产环境代码是否启用H5离线缓存 默认 false
    offlineCaching: false,
    // 启用cordova 默认 false，对应 @sweetui/sweet-mobile 的 $sweet.exec功能
    enableCordova: false,
    // 可以添加第三方包，加快打包速度和加载, webpack.DllPlugin
    webpackDLL: [],
    // 自定义webpack配置,sweet-mobile-sdk会自动合并，相同配置sweet-mobile-sdK权重>此配置
    webpack: {
        // 默认入口
        entry: {
            app: path.join(__dirname, 'src/main.js'),
        },
        resolve: {
            extensions: ['.jsx'],
            // 扩展 alias
            alias: {}
        },
        module: {
            // 扩展rules
            rules: [],
        },
        // 插件plugins
        plugins: [],
        // 外部扩展
        externals: {},
        // ...更多参考webpack官方配置 https://webpack.js.org/concepts/
    },
    // 设置开发环境接口对应代理前缀
    proxy: constants.proxy,
    // 是否对npm包里的css进行postcss处理 默认false
    postcssNodeModules: false,
    // 根据环境变量(process.env.SWEET_ENV，执行命令时期)的值 获取对应的 definePlugin对象，设置环境变量值
    definePlugin: constants.definePlugin[process.env.SWEET_ENV],
    // 默认语言设置 localStorage存储值 > 这里language配置, 都为空时根据浏览器环境取值
    language: 'zh',
    // 换肤配置
    themeConfig: {
        key: 'SWEET-THEME-COLOR', // localStorage存储的key字段, key根据项目变化,不能为空
        name: '', // 项目初始化设置的皮肤的name 为空默认肤色 正常来说不设置
        f7name: '', // 项目初始化设置的framework7皮肤name 为空默认肤色 正常来说不设置
    },
    // Countly数据采集配置的app_key，url，俩者都不为空时开启Countly数据采集功能
    countly: {
        // countly应用对应的app_key值
        app_key: 'f176e48b87f47fca28d6fdf75fc41927b8342896',
        // Countly 服务器 url
        url: 'http://10.200.111.114:8181',
    }
}
