<template>
    <f7-app :params="framework7">
        <f7-statusbar></f7-statusbar>
        <f7-panel left cover>
            <f7-view url="/panel-left/" links-view=".view-main"></f7-view>
        </f7-panel>
        <f7-panel right reveal>
            <f7-view url="/panel-right/"></f7-view>
        </f7-panel>
        <f7-view url="/" :pushState="true" main class="ios-edges"></f7-view>
    </f7-app>
</template>
<script>
    import routes from './routes.js'
    import events from 'framework7-vue/utils/events'

    export default {
        name: 'app',
        data() {
            return {
                // 初始化 Framework7 时需要的参数配置
                framework7: {
                    routes: routes,
                    name: 'GeelyApp',
                    theme: 'auto', //
                    id: 'com.geely.geelyapp'
                },
            }
        },
        created() {
            if (location.href.indexOf('#!') === -1) {
                location.href = `${location.href}#!/`
            }
            events.on('viewRouterDidUpdate', this.viewRouterDidUpdate)
        },
        methods: {
            /**
             * 视图更新
             * @param {Object} routerData 路由信息
             */
            viewRouterDidUpdate(routerData) {
                const child = routerData.component.$children
                if (child.length > 0) {
                    document.title = child[child.length - 1].$f7route.route.title || '首页'
                }
            },
        }
    }
</script>
