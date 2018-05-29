<template>
    <div id="app">
        <f7-statusbar></f7-statusbar>
        <f7-panel left cover>
            <f7-view url="/panel-left/" links-view=".view-main"></f7-view>
        </f7-panel>
        <f7-panel right reveal>
            <f7-view url="/panel-right/"></f7-view>
        </f7-panel>
        <f7-view url="/" :pushState="true" :main="true" class="ios-edges"></f7-view>
    </div>
</template>
<script>
    export default {
        name: 'app',
    }
</script>
