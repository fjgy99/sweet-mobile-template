import '@babel/polyfill'
import Vue from 'vue'
// 引入响应式js文件
import '@sweetui/sweet-mobile-sdk/config/utils/responsiveDesign'
import vueLogger from '@sweetui/sweet-mobile-sdk/config/logger/vue-logger'

// Import F7
import Framework7 from 'framework7/framework7.esm.bundle.js'
// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js'
// Import F7 css
import 'framework7/css/framework7.css'

import {sweetCountly, sweetI18n, sweetStore, sweetTheme, SWTOOL} from '@sweetui/sweet-mobile'

import sweetMobileLib from '@sweetui/sweet-mobile-lib'
import '@sweetui/sweet-mobile-lib/css/index.less'

import app from './app.vue'
import request from '@/modules/demo_plugin/ajax'

import '@/modules/demo_theme/index.less'

// Init F7 Vue Plugin
Framework7.use(Framework7Vue)

// 注入axios ajax请求
Vue.use(SWTOOL)
// sweetMobileLib组件库
Vue.use(sweetMobileLib)
// 注入log方法
Vue.use(vueLogger)
// 换肤方案
Vue.use(sweetTheme)

// ajax启动
request(Vue)

// 初始化 countly 数据采集分析
sweetCountly(Vue, {
    country_code: 1
})
// 然后可以执行一些官方提供的辅助方法
window.Countly.track_sessions() // 跟踪会话
window.Countly.track_pageview() // 跟踪页面浏览数（page views）

// 国际化
sweetI18n(() => {
    return new Promise((resolve, reject) => {
        /* 模拟ajax请求 */
        const onlineDate = {
            zh: {o: '我来自ajax请求的语言包'},
            en: {o: 'I come from the language package of the Ajax request'},
        }
        setTimeout(() => {
            resolve(onlineDate)
        }, 500)
    })
}).then(i18n => {
// 初始化 App
    const sweetApp = new Vue({
        el: '#app',
        render: h => h(app),
        store: sweetStore,
        // 注册 App 组件
        components: {
            app
        },
        // 注入i18n
        i18n,
    })
    return sweetApp
})
