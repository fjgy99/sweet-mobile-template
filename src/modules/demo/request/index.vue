<template>
    <f7-page name="request">
        <f7-navbar>
            <f7-nav-left back-link="返回"></f7-nav-left>
            <f7-nav-title>AJAX DEMO</f7-nav-title>
            <f7-nav-right></f7-nav-right>
        </f7-navbar>

        <h3>AJAX 数据列表</h3>
        <ul>
            <li v-for="item in listData" :key="item.id">{{item.title}}</li>
        </ul>
    </f7-page>
</template>

<script>
import {
    f7Page,
    f7Navbar,
    f7NavLeft,
    f7NavTitle,
    f7NavRight
} from 'framework7-vue';
export default {
    name: 'request',
    data() {
        return {
            listData: []
        };
    },
    methods: {
        getData() {
            /**
             * json文件获取规则
             * /json/ + json文件在开发目录中的文件路径以‘_’连接，并且不含 json文件夹自身的路径
             * 例如：
             * json文件的开发路径为： /src/modules/demo/request/json/list.json
             * ajax调用的路径则是：/json/demo_request_list.json
             */
            return this.SWXHR
                .GET('/json/demo_request_list.txt', {
                    params: {
                        params1: 'aa',
                        params2: 'bb'
                    }
                })
                .then(res => {
                    console.log(res);
                    this.listData = res.data;
                });
        }
    },
    mounted() {
        this.getData();
    },
    components: {
        f7Page,
        f7Navbar,
        f7NavLeft,
        f7NavTitle,
        f7NavRight
    }
};
</script>
