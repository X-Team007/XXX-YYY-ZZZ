<style lang="less" scoped>
@import "../../stylesheet/variables.less";

.viewport-signup-enterprise {
        width: 100%;
        height: 9.00rem;
        max-width: @theme-size-width-maximum;
        background-color: #2A9FE4;
        background-position: center bottom;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        margin: 0.00 auto;

        .wrapper {
                height: 100%;
        }
        
        .panel {
                display: inline-block;
                background-color: rgba(0, 0, 0, 0.10);
                box-shadow: @theme-boxshadow-border-lighten;
                padding: 0.60rem 0.60rem 1.00rem 0.60rem;
                height: 10.20rem;
        }

        .label-password,
        .label-enterprise,
        .label-username {
                input {
                        width: 7.00rem;
                }
        }

        .label-subject {
                select {
                        width: 7.00rem;
                }
        }
}
</style>

<template>
        <div class="viewport-signup-enterprise" v-bind:style=" viewportStyle ">
                <div class="wrapper flex-layout flex-layout-center">
                        <div class="panel">
                                <form class="pure-form pure-form-stacked">
                                        <legend>{{ lang.signupEnterpriseHeader }}</legend>
                                        <label class="label-subject">
                                                <select v-model=" enterpriseType ">
                                                        <option disabled="disabled">{{ lang.signupType }}</option>
                                                        <option value="1">{{ lang.signupTypeI }}</option>
                                                        <option value="2">{{ lang.signupTypeII }}</option>
                                                        <option value="3">{{ lang.signupTypeIII }}</option>
                                                <select>
                                        </label>
                                        <label class="label-enterprise">
                                                <input v-bind:placeholder=" lang.signupCompany " v-model=" enterpriseName " />
                                        </label>
                                        <label class="label-username">
                                                <input v-bind:placeholder=" lang.signupUsername " v-model=" enterpriseUser " />
                                        </label>
                                        <label class="label-mobile">
                                                <select v-model=" mobileArea ">
                                                        <option v-for=" item in mobileAreaBuf " v-bind:key=" item.code " 
                                                                v-bind:value=" item.code "
                                                                v-bind:selected=" item.code === '+86' ">
                                                                {{ item.name + ' ' + item.code }}
                                                        </option>
                                                </select>
                                                <input onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'')}).call(this)"
                                                        v-bind:placeholder=" lang.signupMobile " v-model=" mobile " />
                                        </label>
                                        <label class="label-password">
                                                <input type="password" v-bind:placeholder=" lang.signupPassword " v-model=" passwordFirst " />
                                        </label>
                                        <label class="label-password">
                                                <input type="password" v-bind:placeholder=" lang.signupReEnter " v-model=" passwordAgain " />
                                        </label>
                                        <label class="label-captcha">
                                                <input onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'')}).call(this)"
                                                        v-bind:placeholder=" lang.signupCode " v-model=" captchaCode " />
                                                <button v-bind:class=" 'pure-button pure-button-' + smsDisabled "
                                                        v-on:click=" emitCaptcha() " type="button">
                                                        {{ smsText }}
                                                </button>
                                        </label>
                                        <label class="label-checkbox">
                                                <input type="checkbox" v-model=" agreeTerms " /> {{ lang.signupAgree }}
                                                <router-link :to="{ path: '/' + langCode + '/terms' }">
                                                        {{ lang.footerTerms }}
                                                </router-link>
                                                <router-link :to="{ path: '/' + langCode + '/footerPrivate' }">
                                                        {{ lang.footerPrivate }}
                                                </router-link>
                                        </label>
                                        <label class="label-submit">
                                                <button class="pure-button pure-button-primary" type="button" v-on:click=" sumbitSignup() ">
                                                        {{ lang.headerSignup }}
                                                </button>
                                        </label>
                                        <label class="label-warning" v-show=" errors !== 0">
                                                <span v-show=" errors === 2001 "> {{ lang.errors20Mobile }} </span>
                                                <span v-show=" errors === 2002 "> {{ lang.errors20PasswordLength }} </span>
                                                <span v-show=" errors === 2003 "> {{ lang.errors20PasswordUpper }} </span>
                                                <span v-show=" errors === 2004 "> {{ lang.errors20PasswordLower }} </span>
                                                <span v-show=" errors === 2005 "> {{ lang.errors20PasswordNumber }} </span>
                                                <span v-show=" errors === 2006 "> {{ lang.errors20PasswordAgant }} </span>
                                                <span v-show=" errors === 2007 "> {{ lang.errors20Captcha }} </span>
                                                <span v-show=" errors === 2008 "> {{ lang.errors20AgreeTerms }} </span>
                                                <span v-show=" errors === 2009 "> {{ lang.errors20SMSSend }} </span>
                                                <span v-show=" errors === 2011 "> {{ lang.errors20ExistsName }} </span>
                                                <span v-show=" errors === 2012 "> {{ lang.errors20Signup }} </span>
                                                <span v-show=" errors === 2014 "> {{ lang.errors20Enterprise}} </span>
                                                <span v-show=" errors === 2015 "> {{ lang.errors20Username}} </span>
                                        </label>
                                        <label class="label-link">
                                                <router-link :to="{ path: '/' + langCode + '/signup/person' }">
                                                        >> {{ lang.signupPersonHeader }}
                                                </router-link>
                                        </label>
                                </form>
                        </div>
                </div>
        </div>
</template>

<script>
import { lang, langType } from "../../locales"
import { redirect, auth, api, storage } from "../../utils"

export default {
        data: function () {
                let code = langType()
                let authSignin = auth()

                if (Object.keys(authSignin).length !== 0) {
                        return redirect(`/${code}/member/`)
                }

                let viewportHeight = '15.9rem'
                let clientWidth = document.body.clientWidth
                if (clientWidth <= 2048) {
                        viewportHeight = '12.7rem'
                }
                let backgroundImg = 'url(http://i4.cfimg.com/611341/b7f04fadf366f2f0.jpg)'
                let smsStatus = parseInt(storage.read('smsStatus') || '-1')

                return {
                        enterpriseType: 1,
                        enterpriseName: '',
                        enterpriseUser: '',
                        mobile: '',
                        mobileArea: '+86',
                        mobileAreaBuf: window.mobileArea || {},
                        passwordFirst: '',
                        passwordAgain: '',
                        captchaCode: '',
                        encryptCode: '',
                        agreeTerms: false,
                        smsDisabled: smsStatus === -1 ? 'primary' : 'disabled',
                        smsText: lang('smsVerification'),
                        errors: 0,
                        viewportStyle: {
                                minHeight: viewportHeight,
                                backgroundImage: backgroundImg
                        },
                        langCode: code,
                        lang: lang()
                }
        },
        mounted: function () {
                let smsStatus = parseInt(storage.read('smsStatus') || '-1')

                if (smsStatus !== -1) {
                        window.smsTimer = setInterval(this.emitSmsStatus, 1000)
                }
        },
        methods: {
                emitSmsStatus: function () {
                        let smsStatus = parseInt(storage.read('smsStatus') || '-1')

                        if (smsStatus === -1) {
                                smsStatus = 60
                        }

                        smsStatus = smsStatus - 1
                        this.smsText = lang('smsWait').replace('%D', smsStatus)
                        storage.write('smsStatus', smsStatus)

                        if (smsStatus === 0) {
                                this.smsText = lang('smsVerification')
                                this.smsDisabled = 'primary'
                                storage.write('smsStatus', -1)
                                clearInterval(window.smsTimer)
                        }
                },
                emitCaptcha: function () {
                        if (this.smsDisabled === 'primary') {
                                if (11 < this.mobile.length || this.mobile.length < 6) {
                                        return this.errors = 2001
                                }

                                if (this.mobileArea === '+86' && /^1(3|4|5|7|8|9)\d{9}$/i.test(this.mobile) === false) {
                                        return this.errors = 2001
                                }

                                if (this.mobileArea !== '+86' && /^[0-9]{6, 11}$/i.test(mobile) === false) {
                                        return this.errors = 2001
                                }

                                api('/service/sms', { mobile: this.mobile, mobileArea: this.mobileArea, smsType: 'SIGNUP' }, callback => {
                                        if (callback.code !== 200) {
                                                return this.errors = 2009
                                        }

                                        this.errors = 0
                                        this.encryptCode = callback.data
                                        this.smsDisabled = 'disabled'
                                        window.smsTimer = setInterval(this.emitSmsStatus, 1000)
                                })
                        }
                },
                sumbitSignup: function () {
                        if (!this.enterpriseName) {
                                return this.errors = 2014
                        }

                        if (!this.enterpriseUser) {
                                return this.errors = 2015
                        }

                        if (11 < this.mobile.length || this.mobile.length < 6) {
                                return this.errors = 2001
                        }

                        if (this.mobileArea === '+86' && /^1(3|4|5|7|8|9)\d{9}$/i.test(this.mobile) === false) {
                                return this.errors = 2001
                        }

                        if (this.mobileArea !== '+86' && /^[0-9]{6, 11}$/i.test(mobile) === false) {
                                return this.errors = 2001
                        }

                        if (this.passwordFirst.length < 6) {
                                return this.errors = 2002
                        }

                        if (/[A-Z]/.test(this.passwordFirst) === false) {
                                return this.errors = 2003
                        }

                        if (/[a-z]/.test(this.passwordFirst) === false) {
                                return this.errors = 2004
                        }

                        if (/[0-9]/.test(this.passwordFirst) === false) {
                                return this.errors = 2005
                        }

                        if (this.passwordFirst !== this.passwordAgain) {
                                return this.errors = 2006
                        }

                        if (/^\d{6}$/i.test(this.captchaCode) === false) {
                                return this.errors = 2007
                        }

                        if (!this.agreeTerms) {
                                return this.errors = 2008
                        }

                        this.errors = 0
                        api('/service/signup', {
                                registerType: 'Enterprise',
                                mobileArea: this.mobileArea,
                                mobile: this.mobile,
                                password: this.passwordFirst,
                                confirm: this.passwordAgain,
                                captcha: this.captchaCode,
                                encrypt: this.encryptCode,
                                enterpriseType: this.enterpriseType,
                                enterpriseName: this.enterpriseName,
                                username: this.enterpriseUser
                        }, callback => {
                                let code = langType()

                                if (callback.code !== 200) {
                                        this.errors = callback.code
                                } else {
                                        auth(callback.data)
                                        storage.write('smsStatus', -1)
                                        redirect(`/${code}/enterprise/`)
                                }
                        })
                }
        }
}
</script>
