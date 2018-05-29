<template>
    <f7-page name="about">
        <f7-navbar>
            <f7-nav-left back-link="返回"></f7-nav-left>
            <f7-nav-title>{{$t('message.skin')}}</f7-nav-title>
            <f7-nav-right></f7-nav-right>
        </f7-navbar>

        <div class="home">
            <h1>{{$t('message.skin')}}</h1>
        </div>
        <div class="theme-demo-div">
            <p>{{$t('message.theme')}}</p>
        </div>
        <div class="theme-buttons">
            <div class="col-33">
                <f7-button @click="skinTheme('red')" class="button" fill round raised active color="red">Red</f7-button>
            </div>
            <div class="col-33">
                <f7-button @click="skinTheme('green')" class="button" fill round raised active color="green">Green
                </f7-button>
            </div>
            <div class="col-33">
                <f7-button @click="skinTheme('blue')" class="button" fill round raised active color="blue">Blue
                </f7-button>
            </div>
            <div class="col-33">
                <f7-button @click="skinTheme('pink')" class="button" fill round raised active color="pink">Pink
                </f7-button>
            </div>
            <div class="col-33">
                <f7-button @click="skinTheme('yellow')" class="button" fill round raised active color="yellow">Yellow
                </f7-button>
            </div>
            <div class="col-33">
                <f7-button @click="skinTheme('orange')" class="button" fill round raised active color="orange">Orange
                </f7-button>
            </div>
            <div class="col-33">
                <f7-button @click="skinTheme('gray')" class="button" fill round raised active color="gray">Gray
                </f7-button>
            </div>
            <div class="col-33">
                <f7-button @click="skinTheme('black')" class="button" fill round raised active color="black">Black
                </f7-button>
            </div>
        </div>
    </f7-page>
</template>

<script>
    export default {
        name: 'theme',
        methods: {
            /**
             * 切换皮肤
             * @param {String} name 肤色名称
             */
            skinTheme(name) {
                this.$cutTheme(name)
            }
        }
    }
</script>
<style lang="less" scoped>
    .theme-buttons {
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        flex-wrap: wrap;
        -webkit-box-align: start;
        align-items: flex-start;
        padding: 20px 40px;
        .col-33 {
            width: 33.333333333333336%;
            width: calc((100% - 16px * 2) / 3);
        }
        .button {
            margin-bottom: 20px;
            text-transform: capitalize;
            font-size: 28px;
            height: 72px;
            line-height: 72px;
        }
    }
</style>
