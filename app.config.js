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
        name: '', // 项目初始化设置的皮肤的name 为空默认肤色 正常来说不设置
        f7name: '', // 项目初始化设置的framework7皮肤name 为空默认肤色 正常来说不设置
    }
}
