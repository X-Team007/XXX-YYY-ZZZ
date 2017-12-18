<style lang="less" scoped>
@import "../../stylesheet/variables.less";

.viewport-finance {
  .pay {
    input {
      width: 3.72rem;
    }

    em,
    i {
      font-weight: lighter;
      font-style: normal;
    }

    em {
      padding-left: 0.25em;
      padding-right: 1em;
    }

    i {
      color: @theme-color-white-default;
      padding-left: 1em;
    }

    .icon-pay {
      margin: 0.32rem 0.32rem 0.32rem 0;
    }
  }

  .record {
    margin-top: 0.48rem;
    .listNav,
    .recordList {
      margin-left: 0.16rem;
      padding: 0.3rem 0.16rem;
      color: @theme-color-darkgray-default;
      text-align: center;
      font-size: @theme-font-size-csmall-default;
      background: #f1f1f1;
      .payNum {
        box-sizing: border-box;
        padding-left: 0.5rem;
        text-align: left;
      }
      .status {
        color: #008000;
      }
    }
    .recordList:nth-of-type(2n-1) {
      background: rgba(0, 0, 0, 0);
    }
    .noList {
      margin-left: 0.16rem;
      font-size: @theme-font-size-csmall-default;
      letter-spacing: 0.02rem;
    }
  }
}
</style>

<template>
        <div class="viewport-finance">
                <!-- 立即充值 -->
                <div class="pay panel"> 
                        <h1>{{ lang.financeChong }}</h1>
                        <form class="pure-form pure-form-aligned">
                                <div class="pure-control-group label-money">
                                        <label>{{ lang.financeMoney }}</label>
                                        <input onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'')}).call(this)" />
                                        <em>{{ lang.financeUnit }}</em>
                                        <button type="button" class="pure-button pure-button-primary" @click="">
                                                {{ lang.financeSubmit }}
                                        </button>
                                        <i>{{ lang.financeComment }}</i>
                                </div>
                                <div class="pure-control-group label-password">
                                        <label>{{ lang.financePay }}</label>
                                        <input type="hidden" name="paytype" v-bind:value=" payType " />
                                        <span v-bind:class=" 'icon-pay icon-pay-alipay' + (payType === 'alipay' ? ' pay-active' : '') "
                                                @click=" selectPay('alipay') "></span>
                                        <span v-bind:class=" 'icon-pay icon-pay-wxpay' + (payType === 'wxpay' ? ' pay-active' : '') "
                                                v-on:click=" selectPay('wxpay') "></span>
                                </div>
                        </form>
                </div>
                <!-- 财务明细 -->
                <div class="record panel">
                        <h1>{{ lang.financeMing }}</h1>
                        <div class="tab">
                                <button v-bind:class=" 'pure-button pure-button-primary' + (tabID === 0 ? ' tab-active' : '') "
                                        v-on:click=" selectTab(1) ">
                                        {{ lang.financeRecordI }}
                                </button>
                                <button v-bind:class=" 'pure-button pure-button-primary' + (tabID === 1 ? ' tab-active' : '') "
                                        v-on:click=" selectTab(2) ">
                                        {{ lang.financeRecordII }}
                                </button>
                        </div>
                        <div class="listNav pure-g">
                          <span class="payNum pure-u-6-24">{{lang.payNum}}</span>
                          <span class="payMoney pure-u-4-24">{{lang.payMoney}}</span>
                          <span class="payType pure-u-4-24">{{lang.payType}}</span>
                          <span class="payStatus pure-u-4-24">{{lang.payStatus}}</span>
                          <span class="payTime pure-u-6-24">{{lang.payTime}}</span>
                        </div>
                        <template v-for="buf of data.items" :key="buf">
                          <div class="recordList pure-g">
                            <span class="payNum pure-u-6-24">{{buf.orderID}}</span>
                            <span class="payMoney pure-u-4-24">{{buf.orderMoney/100}}</span>
                            <span class="payType pure-u-4-24">{{buf.orderPay}}</span>
                            <span class="payStatus status pure-u-4-24">{{buf.orderStatus}}</span>
                            <span class="payTime pure-u-6-24">{{buf.orderSubmit}}</span>
                          </div> 
                        </template> 
                        <el-pagination :total=" data.total " :page-size=" data.limit " :current-page=" data.begin " layout="prev, pager, next" class="text-align-center" @current-change=" selectPage "></el-pagination>
                </div>
                
        </div>
</template>

<script>
import { lang, langType } from "../../locales";
import { api, auth, uriPath } from "../../utils";
import { Pagination } from "element-ui";
import setting from "../../config/setting";

export default {
  data() {
    return {
      data: {
        total: 3, // 总条目数
        pages: 1, // 页数
        limit: 10, // 限制
        begin: 1,
        items: [] // 项目
      },
      orderType: 1,
      tabID: 1,
      payType: "alipay",
      lang: lang(),
      langCode: langType(),
      list: [],
      pd: ""
    };
  },
  components: {
    "el-pagination": Pagination
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    this.getPayInfo();
    console.log("created");
  },
  methods: {
    getPayInfo() {
      let o = {
        openID: auth().openID,
        orderType: this.orderType,
        begin: this.data.pages,
        limit: 10
      };
      console.log(o);
      api("/member/listOrder", o, callback => {
        console.log(callback);
        if (callback.code === 200) {
          this.data.items = callback.data.items;
          this.data.total = callback.data.total;
          this.data.pages = callback.data.pages;
          this.data.limit = callback.data.limit;
          this.data.begin = callback.data.begin;
          console.log("data", this.data.items);
        }
      });
    },
    selectPay(payType) {
      this.payType = payType;
      switch (this.payType) {
        case "alipay":
          // api(uri, Object, callback => {});
          break;

        case "wxpay":
          // api(uri, Object, callback => {});
          break;
      }
    },
    selectTab(tabID) {
      this.orderType = tabID;
      this.data.pages = 1;
      this.getPayInfo();
    },
    selectPage(num) {
      this.data.pages = num;
      this.getPayInfo();
    }
  }
};
</script>