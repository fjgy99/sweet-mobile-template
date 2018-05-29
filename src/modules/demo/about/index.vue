<template>
    <f7-page name="about">
        <f7-navbar>
            <f7-nav-left back-link="返回"></f7-nav-left>
            <f7-nav-title>{{$t('message.about')}}</f7-nav-title>
            <f7-nav-right></f7-nav-right>
        </f7-navbar>

        <div class="home">
            <h1>{{$t('message.about')}}</h1>
        </div>
    </f7-page>
</template>

<script>
    export default {
        name: 'about',
    }
</script>
