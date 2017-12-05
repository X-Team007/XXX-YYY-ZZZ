<style lang="less" scoped>
@import "../../stylesheet/variables.less";

.viewport-signup {
        width: 100%;
        height: 9.00rem;
        max-width: @theme-size-width-maximum;
        background-color: #2A9FE4;
        background-position: center bottom;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        margin: 0 auto;

        .wrapper {
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
        }
        
        .panel {
                display: inline-block;
                background-color: rgba(0, 0, 0, 0.10);
                box-shadow: rgba(0, 0, 0, 0.10);
                border-radius: 0.08rem;
                padding: 0.60rem;
                height: 5.40rem;
        }

        label {
                display: inline-block;
                width: 4.20rem;
                text-align: center;

                &:last-child {
                        border-left: 0.02rem rgba(255, 255, 255, 0.30) solid;
                }

                .icon {
                        display: block;
                        width: 2.40rem;
                        height: 2.40rem;
                        margin: 0.20rem auto;
                        fill: @theme-color-white-default;
                }

                .pure-button {
                        width: 2.70rem;
                }
        }
}
</style>

<template>
        <div class="viewport-signup" v-bind:style=" viewportStyle ">
                <div class="wrapper">
                        <div class="panel">
                                <div class="pure-form pure-form-stacked">
                                        <h1>{{ lang.signupHeader }}</h1>
                                        <label>
                                                <Icon name="person" />
                                                <router-link :to="{ path: '/' + langCode + '/signup/person' }"
                                                        class="pure-button pure-button-primary">
                                                        {{ lang.signupPerson }}
                                                </router-link>
                                        </label>
                                        <label>
                                                <Icon name="enterprise" />
                                                <router-link :to="{ path: '/' + langCode + '/signup/enterprise' }"
                                                        class="pure-button pure-button-primary">
                                                        {{ lang.signupEnterprise }}
                                                </router-link>
                                        </label>
                                </div>
                        </div>
                </div>
        </div>
</template>

<script>
import { lang, langType } from "../../locales"
import { redirect, auth } from "../../utils"

export default {
        data: function () {
                let code = langType()
                let authSignin = auth()

                if (Object.keys(authSignin).length !== 0) {
                        return redirect(`/${code}/member/`)
                }

                let viewportHeight = '15.9rem'
                let clientWidth = document.body.clientWidth
                if (clientWidth <= 1366) {
                        viewportHeight = '8.4rem'
                } else if (clientWidth <= 1440) {
                        viewportHeight = '8.9rem'
                } else if (clientWidth <= 1680) {
                        viewportHeight = '10.4rem'
                } else if (clientWidth <= 1920) {
                        viewportHeight = '11.9rem'
                } else if (clientWidth <= 2048) {
                        viewportHeight = '12.7rem'
                }
                let backgroundImg = 'url(http://i4.cfimg.com/611341/b7f04fadf366f2f0.jpg)'

                return {
                        viewportStyle: {
                                minHeight: viewportHeight,
                                backgroundImage: backgroundImg
                        },
                        langCode: code,
                        lang: lang()
                }
        }
}
</script>
