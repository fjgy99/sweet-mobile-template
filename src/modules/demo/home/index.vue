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
            <div>
                <f7-link href="/about/">{{$t('message.about')}}</f7-link>
            </div>
            <div>
                <f7-link href="/request/">{{$t('message.request')}}</f7-link>
            </div>
            <div>
                <f7-link href="/theme/">{{$t('message.skin')}}</f7-link>
            </div>
            <div>
                <f7-link href="/data/">数据处理demo</f7-link>
            </div>
            <div>
                <f7-link href="/form/">Form表单验证</f7-link>
            </div>
            <a href="javascript:;" @click="setLang">{{$t('message.switchLang')}}</a>
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
            this.log(process.env)
        }
    }
</script>

<style lang="less" scoped src="./style.less">
</style>


