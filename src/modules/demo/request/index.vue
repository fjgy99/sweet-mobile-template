<template>
    <f7-page name="request">
        <f7-navbar>
            <f7-nav-left back-link="返回"></f7-nav-left>
            <f7-nav-title>{{$t('message.request')}}</f7-nav-title>
            <f7-nav-right></f7-nav-right>
        </f7-navbar>

        <h3>AJAX 数据列表</h3>
        <div>
            result:  {{listData}}
        </div>
        <!--<ul>-->
        <!--<li v-for="item in listData" :key="item.id">{{item.title}}</li>-->
        <!--</ul>-->
    </f7-page>
</template>

<script>
    export default {
        name: 'request',
        data() {
            return {
                listData: '',
                testUrl: '/api/test/assistant/coordinate/convert?key=ff0bcf778c5eeb93bd8b068b6e3f7781&locations=116.481499,39.990475|116.481499,39.990375',
            }
        },
        on: {
            pageMounted: function(e, page) {
                this.log('page mounted')
            },
            pageInit: function(e, page) {
                this.log(this.testUrl) // -> 'johndoe'
            },
            pageBeforeIn: function(e, page) {
                this.log('page before in')
            },
            pageAfterIn: function(e, page) {
                this.log('page after in')
            },
            pageBeforeOut: function(e, page) {
                this.log('page before out')
            },
            pageAfterOut: function(e, page) {
                this.log('page after out')
            },
            pageBeforeRemove: function(e, page) {
                this.log('page before remove')
            },
        },
        methods: {
            /**
             * 获取数据
             */
            getData() {
                /**
                 * 文件获取规则
                 * 例如：
                 * json文件的开发路径为： src/modules/demo/request/json/list.json
                 * ajax调用的路径则是：src/modules/demo/request/json/list.json
                 */
                this.SWXHR.GET(this.testUrl)
                    .then(res => {
                        this.log(res)
                        this.listData = res
                    })
            }
        },
        mounted() {
            this.getData()
        }
    }
</script>
