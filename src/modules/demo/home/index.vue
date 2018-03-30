<template>
    <f7-page name="home">
        <f7-navbar>
            <f7-nav-left>
                <f7-link class="link icon-only">
                    <i class="ion ion-navicon"></i>
                </f7-link>
            </f7-nav-left>
            <f7-nav-title>My App</f7-nav-title>
            <f7-nav-right>
                <f7-link class="link icon-only searchbar-enable" data-searchbar=".searchbar-components">
                    <i class="ion ion-search"></i>
                </f7-link>
            </f7-nav-right>
            <f7-searchbar class="searchbar-components" search-container=".components-list" search-in="a" expandable></f7-searchbar>
        </f7-navbar>

        <div class="home">
            <h1>欢迎使用Sweet Mobile 2.0</h1>
            <div><f7-link href="/about/">关于我们</f7-link></div>
            <div><f7-link href="/request/">数据请求</f7-link></div>
        </div>
    </f7-page>
</template>
<script>
import {
    f7Page,
    f7Navbar,
    f7NavLeft,
    f7NavRight,
    f7NavTitle,
    f7BlockTitle,
    f7List,
    f7ListItem,
    f7Link,
    f7Searchbar,
    f7Icon
} from 'framework7-vue';

export default {
    name: 'home',
    components: {
        f7Page,
        f7Navbar,
        f7NavLeft,
        f7NavRight,
        f7NavTitle,
        f7BlockTitle,
        f7List,
        f7ListItem,
        f7Link,
        f7Searchbar,
        f7Icon
    },
    mounted() {
        console.log(this.$f7router);
    }
};
</script>

<style lang="less" scoped src="./style.less">

</style>


