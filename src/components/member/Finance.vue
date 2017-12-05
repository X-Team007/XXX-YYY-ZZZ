<style lang="less" scoped>
@import "../../stylesheet/variables.less";

.viewport-finance {
        .pay {
                input {
                        width: 3.72rem;
                }

                em, i {
                        font-weight: lighter;
                        font-style: normal;
                }

                em {
                        padding-left: 0.25em;
                        padding-right: 1.00em;
                }

                i {
                        color: @theme-color-white-default;
                        padding-left: 1.00em;
                }

                .icon-pay {
                        margin: 0.32rem 0.32rem 0.32rem 0;
                }
        }

        .record {
                margin-top: 0.48rem;
        }
}
</style>

<template>
        <div class="viewport-finance">
                <div class="pay panel">
                        <h1>{{ lang.financeChong }}</h1>
                        <form class="pure-form pure-form-aligned">
                                <div class="pure-control-group label-money">
                                        <label>{{ lang.financeMoney }}</label>
                                        <input onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'')}).call(this)" />
                                        <em>{{ lang.financeUnit }}</em>
                                        <button type="button" class="pure-button pure-button-primary">
                                                {{ lang.financeSubmit }}
                                        </button>
                                        <i>{{ lang.financeComment }}</i>
                                </div>
                                <div class="pure-control-group label-password">
                                        <label>{{ lang.financePay }}</label>
                                        <input type="hidden" name="paytype" v-bind:value=" payType " />
                                        <span v-bind:class=" 'icon-pay icon-pay-alipay' + (payType === 'alipay' ? ' pay-active' : '') "
                                                v-on:click=" selectPay('alipay') "></span>
                                        <span v-bind:class=" 'icon-pay icon-pay-wxpay' + (payType === 'wxpay' ? ' pay-active' : '') "
                                                v-on:click=" selectPay('wxpay') "></span>
                                </div>
                        </form>
                </div>
                <div class="record panel">
                        <h1>{{ lang.financeMing }}</h1>
                        <div class="tab">
                                <button v-bind:class=" 'pure-button pure-button-primary' + (tabID === 0 ? ' tab-active' : '') "
                                        v-on:click=" selectTab(0) ">
                                        {{ lang.financeRecordI }}
                                </button>
                                <button v-bind:class=" 'pure-button pure-button-primary' + (tabID === 1 ? ' tab-active' : '') "
                                        v-on:click=" selectTab(1) ">
                                        {{ lang.financeRecordII }}
                                </button>
                        </div>
                </div>
        </div>
</template>

<script>
import { lang, langType } from "../../locales"
import { auth } from '../../utils'

export default {
        data: function () {
                return {
                        tabID: 0,
                        payType: 'alipay',
                        lang: lang(),
                        langCode: langType()
                }
        },
        methods: {
                selectPay(payType) {
                        this.payType = payType
                },
                selectTab(tabID) {
                        this.tabID = tabID
                }
        }
}
</script>