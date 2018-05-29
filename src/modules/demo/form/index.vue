<template>
    <f7-page name="about">
        <f7-navbar>
            <f7-nav-left back-link="返回"></f7-nav-left>
            <f7-nav-title>Form表单验证</f7-nav-title>
            <f7-nav-right></f7-nav-right>
        </f7-navbar>
        <sweet-form :model="formData" :rules="rules" ref="ruleForm">
            <f7-list inline-labels>
                <f7-list-item>
                    <f7-label>Name</f7-label>
                    <!-- 这里 class="sweet-input-form" 绝对不能少-->
                    <sweet-form-item prop="name" class="sweet-input-form">
                        <sweet-input v-model="formData.name" type="text" placeholder="Name"/>
                    </sweet-form-item>
                </f7-list-item>
                <f7-list-item>
                    <f7-label>Password</f7-label>
                    <sweet-form-item prop="password" class="sweet-input-form">
                        <sweet-input v-model="formData.password" type="password"
                                     placeholder="password"/>
                    </sweet-form-item>
                </f7-list-item>
                <f7-list-item>
                    <f7-label>twoPassword</f7-label>
                    <sweet-form-item prop="twoPassword" class="sweet-input-form">
                        <sweet-input v-model="formData.twoPassword" type="password"
                                     placeholder="password"/>
                    </sweet-form-item>
                </f7-list-item>
                <f7-list-item>
                    <f7-label>E-mail</f7-label>
                    <sweet-form-item prop="email" class="sweet-input-form">
                        <sweet-input v-model="formData.email" type="email" placeholder="Your e-mail"/>
                    </sweet-form-item>
                </f7-list-item>
                <f7-list-item>
                    <f7-label>URL</f7-label>
                    <sweet-form-item prop="url" class="sweet-input-form">
                        <sweet-input v-model="formData.url" type="url" placeholder="URL"/>
                    </sweet-form-item>
                </f7-list-item>
                <f7-list-item>
                    <f7-label>tel</f7-label>
                    <sweet-form-item prop="tel" class="sweet-input-form">
                        <sweet-input v-model="formData.tel" type="tel" placeholder="Your phone number"/>
                    </sweet-form-item>
                </f7-list-item>
                <f7-list-item>
                    <f7-label>Birthday</f7-label>
                    <sweet-form-item prop="date" class="sweet-input-form">
                        <sweet-input v-model="formData.date" type="date" placeholder="Please choose..."/>
                    </sweet-form-item>
                </f7-list-item>
                <f7-list-item>
                    <f7-label>Date time</f7-label>
                    <sweet-form-item prop="dateTime" class="sweet-input-form">
                        <sweet-input v-model="formData.dateTime" type="datetime-local" placeholder="Please choose..."/>
                    </sweet-form-item>
                </f7-list-item>
                <f7-list-item>
                    <f7-label>Select</f7-label>
                    <sweet-form-item prop="select" class="sweet-input-form">
                        <sweet-input v-model="formData.select" type="select" placeholder="Your phone number">
                            <option value="">请选择</option>
                            <option value="男">男</option>
                            <option value="女">女</option>
                        </sweet-input>
                    </sweet-form-item>
                </f7-list-item>
                <f7-list-item>
                    <f7-label>Textarea</f7-label>
                    <sweet-form-item prop="textArea" class="sweet-input-form">
                        <sweet-input v-model="formData.textArea" type="textarea" placeholder="textArea"/>
                    </sweet-form-item>
                </f7-list-item>
                <f7-list-item>
                    <f7-label>Resizable</f7-label>
                    <sweet-form-item prop="resizable" class="sweet-input-form">
                        <sweet-input v-model="formData.resizable" resizable type="textarea" placeholder="textArea"/>
                    </sweet-form-item>
                </f7-list-item>
                <!--<f7-list-item>
                   <f7-label>Range</f7-label>
                   <sweet-input v-model="formData.range" type="range" max="100" min="1"/>
               </f7-list-item>-->
                <!--这里 range 使用 f7-range 组件-->
                <f7-list-item>
                    <f7-label>Range</f7-label>
                    <f7-range :min="0" :max="100" :step="1" :value="formData.range" :label="true"
                              @range:change="val => formData.range=val"></f7-range>
                </f7-list-item>
                <f7-list-item>
                    <f7-label>Range Slider</f7-label>
                    <f7-range :min="0" :max="100" :step="1" :value="formData.rangeSlider" :dual="true" :label="true"
                              @range:change="val => formData.rangeSlider =val.concat([])"></f7-range>
                </f7-list-item>
                <div class="block-title">Radio Group</div>
                <!-- 这里 class="sweet-group-form"  绝对不能少-->
                <sweet-form-item prop="radioVal" class="sweet-group-form">
                    <sweet-group :data="radioList" name="demo-radio" v-model="formData.radioVal">
                        <!--自定义radio|checkbox的html 模版-->
                        <template slot-scope="{scope}" v-if="scope">
                            <div>{{scope.title}}</div>
                        </template>
                    </sweet-group>
                    <input v-model="formData.checkBox" type="hidden">
                </sweet-form-item>
                <div class="block-title">CheckBox Group</div>
                <sweet-form-item prop="checkVal" class="sweet-group-form">
                    <sweet-group :data="checkList" name="demo-checkbox" type="checkbox" v-model="formData.checkVal">
                        <!--自定义radio|checkbox的html 模版-->
                        <template slot-scope="{scope}" v-if="scope">
                            <div>{{scope.title}}</div>
                        </template>
                    </sweet-group>
                    <!--radio checkbox 使用隐藏的input进行校验-->
                    <input v-model="formData.checkBox" type="hidden">
                </sweet-form-item>
                <div class="block">
                    <f7-button fill @click.prevent="submitForm">提交</f7-button>
                    <br>
                    <f7-button fill @click.prevent="formReset">重置</f7-button>
                </div>
            </f7-list>
            <div class="block">
                {{formData}}
            </div>
        </sweet-form>
    </f7-page>
</template>
<script>
    export default {
        name: 'demo-form',
        data() {
            const validatePass1 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'))
                } else if (value.length < 5 || value.length > 20) {
                    callback(new Error('长度在 5 到 20 个字符'))
                } else {
                    if (this.formData.twoPassword !== '') {
                        this.$refs.ruleForm.validateField('twoPassword')
                    }
                    callback()
                }
            }
            const validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'))
                } else if (value.length < 5 || value.length > 20) {
                    callback(new Error('长度在 5 到 20 个字符'))
                } else if (this.formData.password && value !== this.formData.password) {
                    callback(new Error('两次输入密码不一致!'))
                } else {
                    callback()
                }
            }
            return {
                formData: {
                    name: '',
                    password: '',
                    twoPassword: '',
                    email: '',
                    url: '',
                    tel: '',
                    select: '',
                    dateTime: '',
                    date: '',
                    textArea: '',
                    resizable: '',
                    sex: '2',
                    range: 50,
                    rangeSlider: [30, 50],
                    checkVal: [],
                    radioVal: '',
                },
                radioList: [
                    {value: 'facebook1', title: 'Facebook1 Radio'},
                    {value: 'facebook2', title: 'Facebook2 Radio'}
                ],
                checkList: [
                    {value: '1111111', title: 'Facebook1 Checkbox'},
                    {value: '2222222', title: 'Facebook2 Checkbox'}
                ],
                rules: {
                    name: [
                        {required: true, message: this.$t('message.nameError'), trigger: 'change'},
                        {required: true, message: this.$t('message.nameError'), trigger: 'blur'}
                    ],
                    password: [
                        {validator: validatePass1, trigger: 'blur'},
                        {validator: validatePass1, trigger: 'change'}
                    ],
                    twoPassword: [
                        {validator: validatePass2, trigger: 'blur'},
                        {validator: validatePass2, trigger: 'change'},
                    ],
                    email: [
                        {required: true, message: '请输入邮箱地址', trigger: 'blur'},
                        {required: true, message: '请输入邮箱地址', trigger: 'change'},
                        {type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur'},
                        {type: 'email', message: '请输入正确的邮箱地址', trigger: 'change'},
                    ],
                    url: [
                        {required: true, message: '请输入URL地址', trigger: 'blur'},
                        {required: true, message: '请输入URL地址', trigger: 'change'},
                        {type: 'url', message: '请输入有效的URL地址', trigger: 'blur'},
                        {type: 'url', message: '请输入有效的URL地址', trigger: 'change'},
                    ],
                    tel: [
                        {required: true, message: '请输入电话号码', trigger: 'blur'},
                        {required: true, message: '请输入电话号码', trigger: 'change'}
                    ],
                    select: [
                        {required: true, message: '请选择', trigger: 'change'}
                    ],
                    dateTime: [
                        {required: true, message: '请选择时间', trigger: 'blur'},
                        {required: true, message: '请选择时间', trigger: 'change'},
                    ],
                    date: [
                        {required: true, message: '请选择日期', trigger: 'blur'},
                        {required: true, message: '请选择日期', trigger: 'change'},
                    ],
                    textArea: [
                        {required: true, message: '请输入内容', trigger: 'blur'},
                        {required: true, message: '请输入内容', trigger: 'change'},
                    ],
                    resizable: [
                        {required: true, message: '请输入内容', trigger: 'blur'},
                        {required: true, message: '请输入内容', trigger: 'change'},
                    ],
                    radioVal: [
                        {required: true, message: '请选择', trigger: 'change'}
                    ],
                    checkVal: [
                        {required: true, message: '请选择', trigger: 'change'}
                    ],
                },
            }
        },
        methods: {
            /**
             * 提交表单
             */
            submitForm() {
                this.$refs.ruleForm.validate((valid) => {
                    const app = this.$f7
                    if (valid) {
                        app.dialog.preloader()
                        setTimeout(() => {
                            app.dialog.close()
                            app.dialog.alert('submit success!')
                        }, 3000)
                    } else {
                        app.dialog.alert('error submit!!!')
                    }
                })
            },
            /**
             * 重置
             */
            formReset() {
                // 对该表单项进行重置，将其值重置为初始值并移除校验结果
                this.$refs.ruleForm.resetFields()

                // 移除该表单项的校验结果
                // this.$refs.ruleForm.clearValidate()
            },
        },
    }
</script>
