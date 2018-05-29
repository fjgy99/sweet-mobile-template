<template>
    <f7-page name="about">
        <f7-navbar>
            <f7-nav-left back-link="返回"></f7-nav-left>
            <f7-nav-title>数据处理(在线和离线)</f7-nav-title>
            <f7-nav-right></f7-nav-right>
        </f7-navbar>
        <div class="data-demo">
            <div class="input-warp">
                <input type="text" placeholder="name" v-model="uName" class="input-with-value">
                <input type="text" placeholder="address" v-model="uAddress" class="input-with-value">
            </div>
            <f7-button bg="red" @click="addUser">添加数据</f7-button>
            <div>
                {{aDouble}}
            </div>
            <div class="list">
                <ul>
                    <li class="test-li" v-for="(obj,idx) in list">
                        {{idx + 1}}
                        {{obj.name}}
                        {{obj.address}}
                        <a @click="deleteLi(idx,obj)" href="javascript:;">删除</a>
                    </li>
                </ul>
            </div>
        </div>
    </f7-page>
</template>
<script>
    import {addDataItem, removeDataItem} from './data'

    export default {
        name: 'demo-data',
        data() {
            return {
                uName: '',
                uAddress: '',
                list: [
                    {
                        name: '张三',
                        address: '中国浙江杭州'
                    }
                ]
            }
        },
        watch: {
            /**
             * 数据对象监听
             * @param {Array} val 数据
             */
            list(val) {
                this.log('数据变化了', [].concat(val))
            }
        },
        computed: {
            /**
             * 数组长度
             * @return {Number} 返回数组长度*2
             */
            aDouble: function() {
                return this.list.length * 2
            },
        },
        methods: {
            /**
             * 添加数据
             */
            addUser() {
                if (this.uName && this.uAddress) {
                    const obj = {name: this.uName, address: this.uAddress}
                    addDataItem(obj)
                    this.list.push(obj)
                    this.uName = ''
                    this.uAddress = ''
                }
            },
            /**
             * 删除li
             * @param {Number} idx 数组索引
             * @param {Object} obj 数据对象
             */
            deleteLi(idx, obj) {
                removeDataItem(obj)
                this.list.splice(idx, 1)
            }
        },
    }
</script>
<style lang="less" scoped>
    .data-demo {
        padding: 10px 40px;
    }

    .input-warp {
        padding: 20px;
    }

    .input-with-value {
        border: 1PX solid #ccc;
        padding: 0 10px;
        border-radius: 4px;
        height: 36px;
        line-height: 36px;
        display: block;
        width: 100%;
        margin-bottom: 20px;
        font-size: 16px;
    }

    .test-li {
        padding: 20px 0;
        a {
            float: right;
        }
    }
</style>
