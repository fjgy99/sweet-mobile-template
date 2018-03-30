<template>
    <f7-page name="about">
        <f7-navbar>
            <f7-nav-left back-link="返回"></f7-nav-left>
            <f7-nav-title>关于我们</f7-nav-title>
            <f7-nav-right></f7-nav-right>
        </f7-navbar>

        <div class="home">
            <h1>关于我们</h1>
        </div>
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
    name: 'about',
    components: {
        f7Page,
        f7Navbar,
        f7NavLeft,
        f7NavTitle,
        f7NavRight
    }
};
</script>
