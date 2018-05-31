<template>
    <f7-page name="request">
        <f7-navbar>
            <f7-nav-left back-link="返回"></f7-nav-left>
            <f7-nav-title>{{$t('message.request')}}</f7-nav-title>
            <f7-nav-right></f7-nav-right>
        </f7-navbar>

        <h3>AJAX 数据列表</h3>
        <div>
            <img src="/captcha?v=1527643456560"/>
            <sweet-form :model="formData" :rules="rules" ref="ruleForm">
                <f7-list inline-labels>
                    <f7-list-item>
                        <f7-label>tel</f7-label>
                        <sweet-form-item prop="mobile" class="sweet-input-form">
                            <sweet-input v-model="formData.mobile" type="tel" placeholder="请输入电话号码"/>
                        </sweet-form-item>
                    </f7-list-item>
                    <f7-list-item>
                        <f7-label>验证码</f7-label>
                        <sweet-form-item prop="captcha" class="sweet-input-form">
                            <sweet-input v-model="formData.captcha" type="text" placeholder="请输入验证码"/>
                        </sweet-form-item>
                    </f7-list-item>
                    <div class="block">
                        <f7-button fill @click.prevent="submitForm">获取验证码</f7-button>

                    </div>
                </f7-list>
                <div class="block">
                    {{formData}}
                    <p>
                        result:  {{data}}
                    </p>
                </div>
            </sweet-form>
        </div>
    </f7-page>
</template>

<script>
    import qs from 'qs'

    export default {
        name: 'request',
        data() {
            return {
                data: '',
                formData: {
                    mobile: '',
                    captcha: '',
                },
                rules: {
                    mobile: [
                        {required: true, message: '请输入电话号码', trigger: 'blur'},
                        {required: true, message: '请输入电话号码', trigger: 'change'}
                    ],
                    captcha: [
                        {required: true, message: '请输入验证码', trigger: 'blur'},
                        {required: true, message: '请输入验证码', trigger: 'change'}
                    ],
                }
            }
        },
        on: {
            pageMounted: function(e, page) {
                this.log('page mounted')
            },
            pageInit: function(e, page) {
                this.log('page init') // -> 'johndoe'
            },
            pageBeforeIn: function(e, page) {
                this.log('page before in')
            },
            pageAfterIn: function(e, page) {
                this.log('page after in')
            },
            pageBeforeOut: function(e, page) {
                this.log('page before out')
            },
            pageAfterOut: function(e, page) {
                this.log('page after out')
            },
            pageBeforeRemove: function(e, page) {
                this.log('page before remove')
            },
        },
        methods: {
            /**
             * 获取数据
             *
             *
             * 文件获取规则
             * 例如：
             * json文件的开发路径为： src/modules/demo/request/json/list.json
             * ajax调用的路径则是：src/modules/demo/request/json/list.json
             */
            submitForm() {
                this.$refs.ruleForm.validate((valid) => {
                    const app = this.$f7
                    if (valid) {
                        this.SWXHR.POST('/api/adpwreset/sendMessageToMobile', qs.stringify(this.formData))
                            .then(res => {
                                this.log(res)
                                this.data = res
                                app.dialog.alert(res.message)
                            })
                    } else {
                        app.dialog.alert('error submit!!!')
                    }
                })
            }
        },
    }
</script>
