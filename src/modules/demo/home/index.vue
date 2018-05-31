<template>
    <f7-page name="home">
        <f7-navbar>
            <f7-nav-left>
                <f7-link class="link icon-only">
                    <i class="ion ion-navicon"></i>
                </f7-link>
            </f7-nav-left>
            <f7-nav-title>{{$t('message.title')}}</f7-nav-title>
            <f7-nav-right>
                <f7-link class="link icon-only searchbar-enable" data-searchbar=".searchbar-components">
                    <i class="ion ion-search"></i>
                </f7-link>
            </f7-nav-right>
            <f7-searchbar class="searchbar-components" search-container=".components-list" search-in="a"
                          expandable></f7-searchbar>
        </f7-navbar>

        <div class="home">
            <h1>{{$t('message.welcome')}}</h1>
            <div class="home-btn">
                <f7-button big fill href="/about/">{{$t('message.about')}}</f7-button>
            </div>
            <div class="home-btn">
                <f7-button big fill href="/request/">{{$t('message.request')}}</f7-button>
            </div>
            <div class="home-btn">
                <f7-button big fill href="/theme/">{{$t('message.skin')}}</f7-button>
            </div>
            <div class="home-btn">
                <f7-button big fill href="/data/">数据处理demo</f7-button>
            </div>
            <div class="home-btn">
                <f7-button big fill href="/form/">Form表单验证</f7-button>
            </div>
            <div class="home-btn">
                <f7-button big fill @click="setLang">{{$t('message.switchLang')}}</f7-button>
            </div>
            <div>
                {{$t('o')}}
            </div>
        </div>
    </f7-page>
</template>
<script>
    export default {
        name: 'home',
        methods: {
            /**
             * 设置语言
             */
            setLang() {
                this.$i18nLanguage(this.$i18n.locale === 'zh' ? 'en' : 'zh')
            }
        },
        mounted() {
        }
    }
</script>

<style lang="less" scoped src="./style.less">
</style>


