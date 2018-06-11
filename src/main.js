import '@babel/polyfill'
import Vue from 'vue'
// 引入响应式js文件
import '@sweetui/sweet-mobile-sdk/config/utils/responsiveDesign'
import vueLogger from '@sweetui/sweet-mobile-sdk/config/logger/vue-logger'

import Framework7 from 'framework7/dist/framework7.esm.bundle'
import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle'
import {sweetI18n, sweetStore, sweetTheme, SWTOOL} from '@sweetui/sweet-mobile'
import 'framework7/dist/css/framework7.min.css'

import sweetMobileLib from '@sweetui/sweet-mobile-lib'
import '@sweetui/sweet-mobile-lib/css/index.less'

import app from '@/modules/demo/app'
import request from '@/modules/demo_plugin/ajax'
import Routes from './routes.js'
import '@/modules/demo_theme/index.less'
// 引入组件
Vue.use(Framework7Vue, Framework7)
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
        render: c => c('app'),
        store: sweetStore,
        // 初始化 Framework7 时需要的参数配置
        framework7: {
            routes: Routes,
            // App 名称
            name: 'GeelyApp',
            // App id
            id: 'com.geely.geelyapp'
        },
        // 注册 App 组件
        components: {
            app
        },
        // 注入i18n
        i18n,
    })
    return sweetApp
})
