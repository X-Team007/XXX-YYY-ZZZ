<style lang="less" scoped>
@import "../../stylesheet/variables.less";

.viewport-accent {
        .message-warning {
                margin-top: @theme-margin-size-default;
        }

        section {
                height: 2.00rem;
                box-shadow: @theme-boxshadow-bottom-lighten;

                &:last-child {
                        box-shadow: none;
                }

                code, h2, h3, .pure-button {
                        display: inline-block;
                        vertical-align: middle;
                }

                code {
                        width: 1.28rem;
                        height: 1.28rem;
                        border-radius: 0.64rem;
                        background-color: @theme-color-lightgray-darkest;
                        margin: 0.36rem 0.18rem;

                        .icon {
                                width: @theme-margin-size-default * 2.00;
                                height: @theme-margin-size-default * 2.00;
                                fill: @theme-color-white-default;
                                padding: @theme-margin-size-default;
                                text-align: center;
                        }
                }

                h2, h3 {
                        color: @theme-color-darkgray-default;
                        font-weight: lighter;
                        line-height: 1.28rem;
                        margin: 0.36rem 0;
                }

                h2 {
                        font-size: 0.38rem;
                        width: 5.00rem;
                }

                h3 {
                        font-size: 0.30rem;
                        width: 10.00rem;
                }
        }

        section:lang(zh-cmn-Hans),
        section:lang(zh-cmn-Hant) {
                h3 {
                        width: 11.00rem;
                }
        }

        section:lang(en) {
                .pure-button {
                        width: 3.50rem;
                }
        }
}
</style>

<template>
        <div class="viewport-accent panel">
                <h1>{{ lang.accentHeader }}</h1>
                <div class="message message-info">
                        {{ lang.accentUsername }}:
                        <strong>{{ auth.realname || auth.username || auth.mobile }}</strong>
                        <br />
                        {{ lang.accentSignin }}:
                        {{ auth.signin || new Date().toString() }}
                        <router-link :to="{ path: auth.isEnterprise 
                                ? `/${langCode}/enterprise/password/`
                                : `/${langCode}/member/password/` }">
                                {{ lang.accentPassword }}
                        </router-link>
                </div>
                <div class="message message-warning">{{ lang.accentWarning }}</div>
                <section>
                        <code><Icon name="idcard" /></code>
                        <h2>{{ lang.accentRealname }}</h2>
                        <h3></h3>
                        <router-link class="pure-button pure-button-primary" :to="{ path: '' }">
                                {{ lang.accountDeveloping }}
                        </router-link>
                </section>
                <section>
                        <code><Icon name="phone" /></code>
                        <h2>{{ lang.accountDeveloping }}</h2>
                        <h3></h3>
                        <router-link class="pure-button pure-button-primary" :to="{ path: '' }">
                                {{ lang.accountDeveloping }}
                        </router-link>
                </section>
                <section>
                        <code><Icon name="email" /></code>
                        <h2>{{ lang.accountDeveloping }}</h2>
                        <h3></h3>
                        <router-link class="pure-button pure-button-primary" :to="{ path: '' }">
                                {{ lang.accountDeveloping }}
                        </router-link>
                </section>
                <section>
                        <code><Icon name="wechat" /></code>
                        <h2>{{ lang.accentWexin }}</h2>
                        <h3></h3>
                        <router-link class="pure-button pure-button-primary" :to="{ path: '' }">
                                {{ lang.accountDeveloping }}
                        </router-link>
                </section>
                <section>
                        <code><Icon name="alipay" /></code>
                        <h2>{{ lang.accentAlipay }}</h2>
                        <h3></h3>
                        <router-link class="pure-button pure-button-primary" :to="{ path: '' }">
                                {{ lang.accountDeveloping }}
                        </router-link>
                </section>
        </div>
</template>

<script>
import { lang, langType } from "../../locales"
import { auth } from '../../utils'

export default {
        data: function () {
                return {
                        auth: auth(),
                        lang: lang(),
                        langCode: langType()
                }
        }
}
</script>