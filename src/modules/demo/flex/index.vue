<template>
    <f7-page name="about">
        <f7-navbar>
            <f7-nav-left back-link="返回"></f7-nav-left>
            <f7-nav-title>sweet-flex</f7-nav-title>
        </f7-navbar>
        <div class="demo-flex-warp">
            <h4>默认，sweet-flex-item fill填充 </h4>
            <div class="demo-flex">
                <sweet-flex>
                    <sweet-flex-item class="demo-head">
                        <div>head</div>
                    </sweet-flex-item>
                    <sweet-flex-item fill class="demo-middle">
                        <div>middle</div>
                    </sweet-flex-item>
                    <sweet-flex-item class="demo-foot">
                        <div>foot</div>
                    </sweet-flex-item>
                </sweet-flex>
            </div>
            <h4>direction设置"column"</h4>
            <div class="demo-flex">
                <sweet-flex direction="column">
                    <sweet-flex-item class="demo-head">
                        <div>head</div>
                    </sweet-flex-item>
                    <sweet-flex-item fill class="demo-middle">
                        <div>middle</div>
                    </sweet-flex-item>
                    <sweet-flex-item class="demo-foot">
                        <div>foot</div>
                    </sweet-flex-item>
                </sweet-flex>
            </div>
            <h4>wrap设置"true"</h4>
            <div class="demo-flex">
                <sweet-flex :wrap="true">
                    <sweet-flex-item class="demo-warp">
                        <div>demo-warp</div>
                    </sweet-flex-item>
                    <sweet-flex-item class="demo-warp">
                        <div>demo-warp</div>
                    </sweet-flex-item>
                    <sweet-flex-item class="demo-warp">
                        <div>demo-warp</div>
                    </sweet-flex-item>
                    <sweet-flex-item class="demo-warp">
                        <div>demo-warp</div>
                    </sweet-flex-item>
                </sweet-flex>
            </div>
            <h4>justify设置"center"，左右居中，其他值自己尝试</h4>
            <div class="demo-flex">
                <sweet-flex justify="center">
                    <sweet-flex-item class="demo-warp">
                        <div>justify=center</div>
                    </sweet-flex-item>
                </sweet-flex>
            </div>
            <h4>align设置"center"，上下居中，其他值自己尝试</h4>
            <div class="demo-flex">
                <sweet-flex align="center">
                    <sweet-flex-item class="demo-warp">
                        <div>align=center</div>
                    </sweet-flex-item>
                </sweet-flex>
            </div>
            <h4>justify、align设置"center"，上下左右绝对居中</h4>
            <div class="demo-flex">
                <sweet-flex justify="center" align="center">
                    <sweet-flex-item class="demo-warp">
                        <div>justify、align=center</div>
                    </sweet-flex-item>
                </sweet-flex>
            </div>
            <h4>equal设置"true"，此时sweet-flex-item fill属性无效</h4>
            <div class="demo-flex">
                <sweet-flex :equal="true" direction="column">
                    <sweet-flex-item class="demo-head">
                        <div>head</div>
                    </sweet-flex-item>
                    <sweet-flex-item fill class="demo-middle">
                        <div>middle</div>
                    </sweet-flex-item>
                    <sweet-flex-item class="demo-foot">
                        <div>foot</div>
                    </sweet-flex-item>
                </sweet-flex>
            </div>
            <h4>父元素 justify设置"center",子元素 align设置"end" </h4>
            <div class="demo-flex">
                <sweet-flex justify="center">
                    <sweet-flex-item class="demo-warp">
                        <div>justify=center</div>
                    </sweet-flex-item>
                    <sweet-flex-item align="end" class="demo-warp">
                        <div>sweet-flex-item align=end</div>
                    </sweet-flex-item>
                </sweet-flex>
            </div>
        </div>
    </f7-page>
</template>
<script>
    export default {
        name: 'demo-flex',
        data() {
            return {}
        },
        methods: {},
    }
</script>
<style lang="less" scoped>
    .demo-flex-warp {
        padding: 20px;
    }

    .demo-flex {
        height: 200px;
        text-align: center;
        margin-bottom: 20px;
        border: 1PX solid #007aff;
    }

    .demo-warp {
        width: 40%;
        margin: 10px;
        height: 50px;
        line-height: 50px;
        background-color: #79dbff;
    }

    .demo-head {
        background-color: #c0ffa2;
    }

    .demo-middle {
        background-color: #79dbff;
    }

    .demo-foot {
        background-color: #ff3648;
        color: #fff;
    }
</style>
