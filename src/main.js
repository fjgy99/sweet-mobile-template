import Vue from 'vue';
import Framework7 from 'framework7/dist/framework7.esm.bundle';
import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle';
import { sweetStore, SWTOOL } from '@sweetui/sweet-mobile';
import app from '@/modules/demo/app';
import request from '@/modules/demo_plugin/ajax';
import Routes from './routes.js';
import 'framework7/dist/css/framework7.min.css';
import '@/modules/demo_theme/index.less';

Vue.use(Framework7Vue, Framework7);

Vue.use(SWTOOL);

// ajax启动
request(Vue);

// 初始化 App
new Vue({
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
    }
});

// webpack热加载
if (module.hot) {
    module.hot.accept();
}
