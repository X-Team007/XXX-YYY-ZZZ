<style lang="less" scoped>
@import "../../stylesheet/variables.less";
.viewport-ucenter-person {
  a {
    text-decoration: none;
  }
  .viewport-accent {
    display: flex;
    height: 100%;
    ul,
    li,
    dl,
    dt,
    dd {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .accent {
      width: 50%;
      border-right: 0.02rem solid @theme-color-lightgray-default;
      dl {
        overflow: hidden;
        margin-top: @theme-margin-size-largenl;
        dt,
        dd {
          font-size: 0;
          float: left;
          margin-left: @theme-margin-size-largenl;
          overflow: hidden;
          div {
            margin-right: 0.28rem;
            span {
              color: @theme-color-lightgray-lighten;
              font-size: @theme-font-size-csmall-default;
              line-height: @theme-font-lineheight-csmall-default;
            }
          }
        }
      }
      .userImg {
        float: left;
        display: inline-block;
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
        vertical-align: bottom;
      }
      .userName {
        color: @theme-font-color-darkerm;
        font-size: @theme-font-size-common-default;
        font-weight: @theme-font-weight-common-default;
        line-height: @theme-font-lineheight-common-default;
      }
      .binding {
        margin-top: 0.56rem;
        span {
          color: @theme-font-color-darkerm;
          font-size: @theme-font-size-csmall-default;
          font-weight: @theme-font-weight-common-default;
          line-height: @theme-font-lineheight-csmall-default;
        }
        .icon {
          width: 0.32rem;
          height: 0.32rem;
          margin: 0 0.1rem 0 0.34rem;
          fill: #b5b5b5;
        }
        .icon:nth-of-type(1) {
          margin: 0 0.1rem 0 0;
        }
        .verify {
          fill: @theme-color-accent-lighten;
        }
      }
      .account {
        display: inline-block;
        margin-left: 0.5rem;
        font-size: 0;
        * {
          float: left;
        }
        span {
          display: inline-block;
          margin-right: 0.32rem;
          line-height: 3.23077em;
          font-size: @theme-font-size-csmall-default;
          b {
            float: none;
            color: #ff0000;
            font-size: @theme-font-size-common-default;
          }
        }
        button {
          margin-right: 0.32rem;
        }
        button:nth-of-type(2) {
          color: @theme-color-accent-default;
          background-color: #fff;
          border: 0.02rem solid @theme-color-accent-default;
        }
      }
    }
    .checked {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      width: 50%;
      height: 100%;
      dl {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 4.3rem;
        height: 2.36rem;
        margin: 0.48rem;

        dt {
          color: #5d86b3;
          font-size: 0.8rem;
          text-align: center;
        }
        dd {
          font-size: 0;
          span {
            display: inline-block;
            color: @theme-font-color-darkenl;
            font-size: @theme-font-size-stitle-default;
            text-align: center;
          }
        }
      }
      dl:hover {
        background: #7397be;
        dt {
          color: #fff;
        }
        dd {
          span {
            color: #fff;
          }
        }
      }
    }
  }
  .full-time,
  .part-time {
    display: flex;
    flex-direction: row;
    margin-top: 0.48rem;

    section {
      width: 100%;

      h2,
      h3 {
        margin: 0.48rem 0 0;
        color: #fff;
        font-size: 0.36rem;
        font-weight: lighter;
        background-color: @theme-color-accent-default;
      }
      h2 {
        height: 0.84rem;
        padding-left: 0.48rem;
        line-height: 0.84rem;
      }
      h3 {
        display: none;
        width: 0.36rem;
        padding: 0.96rem 0.32rem;
        line-height: 0.44rem;
      }
      .jobInfo {
        overflow: hidden;
        padding: 0.3rem 0;
        font-size: 0;
        * {
          margin: 0;
          padding: 0;
          font-size: 0.38rem;
          line-height: 0.38rem;
        }
        .left {
          padding-left: 0.5rem;
          box-sizing: border-box;
          h4 {
            overflow: hidden;
            margin-bottom: 0.43rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: @theme-color-accent-default;
          }
          p {
            color: @theme-font-color-default;
          }
          p:nth-of-type(1) {
            margin-bottom: 0.43rem;
          }
          span {
            display: inline-block;
            margin-top: 0.1rem;
          }
        }
        .center {
          .centerCon {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            p {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 3.1rem;
              height: 3.1rem;
              margin-left: 0.5rem;
              border-radius: 50%;
              background: #4c75a3;
              span {
                font-size: 0.7rem;
                color: #fff;
              }
            }
          }
        }
        .right {
          height: 3.1rem;
          .rightCon {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            height: 100%;
            .row {
              display: flex;
              flex-direction: row;
              justify-content: space-around;
              align-items: center;
              width: 100%;
            }
            p {
              display: flex;
              justify-content: space-around;
              align-items: center;
              width: 2.6rem;
              height: 0.84rem;
              color: #4c75a3;
              background: #fff;
              border: 0.02rem solid #4c75a3;
              border-radius: 0.08rem;
            }
            p:hover {
              color: #fff;
              background: #4c75a3;
            }
          }
        }
      }
    }

    section:lang(zh-cmn-hans) h2,
    section:lang(zh-cmn-hant) h2 {
      display: none;
    }
    section:lang(zh-cmn-hans) h3,
    section:lang(zh-cmn-hant) h3 {
      display: inline-block;
    }

    section:lang(zh-cmn-hans) .jobInfo,
    section:lang(zh-cmn-hant) .jobInfo {
      display: inline-block;
      vertical-align: top;
      width: 19.72rem;
      margin-top: 0.48rem;
      .left {
        padding: 0;
      }
    }
    section:lang(en) .jobInfo {
      .rightCon {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        height: 100%;
        .row {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          width: 100%;
          height: 100%;
          p {
            width: 5rem;
            padding: 0.1rem;
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="viewport-ucenter-person">
    <!-- 用户账户信息 -->
		<div class="viewport-accent panel information">
      <div class="accent">
        <!-- 用户详细 -->
        <dl class="userInfo">
          <!-- 用户头像 -->
          <dt>
            <img class="userImg" :src="userSrc" alt="图片地址" title="头像">
          </dt>
          <dd>
            <!-- 用户名称绑定 -->
            <div class="title">
              <span class="userName">{{lang.PersonCenterHello}}{{userName}}</span>
            </div>
            <!-- 手机、邮箱绑定 -->
            <div class="binding">
              <Icon name="phone" :class="{verify:statusMobile}"/>
              <span>{{statusMobile?lang.verify:lang.unverify}}</span>
              <Icon name="youxiang" :class="{verify:statusEmail}"></Icon>
              <span>{{statusEmail?lang.verify:lang.unverify}}</span>
              <Icon name="yanzheng" :class="{verify:statusIDCard}"></Icon>
              <span>{{statusIDCard?lang.verify:lang.unverify}}</span>
            </div>
          </dd>
        </dl>
        <!-- 用户账户 -->
        <div class="account">
          <!-- 显示用户余额 -->
          <span class="sum">{{lang.balance}}<b>{{balance}}</b>元</span>
          <!-- 充值功能 -->
          <button type="button" class="pure-button pure-button-primary">
            {{ lang.pay }}
          </button>
          <!-- 提现功能 -->
          <button type="button" class="pure-button pure-button-primary">
            {{ lang.withdraw }}
          </button>
          <!-- <span>剩余免费查看次数：<b>3</b></span> -->
        </div>
      </div>
      <!-- 右侧查看功能 -->
      <div class="checked">
        <!-- 我看了谁 -->
        <router-link to="iseewho">
          <dl class="checkUs">
            <dt>{{iseewho}}</dt>
            <dd><span>{{lang.iseewho}}</span></dd>
          </dl>
        </router-link>
        <!-- 谁看了我 -->
        <router-link to="wholookme">
          <dl class="weCheck">
            <dt>{{wholookme}}</dt>
            <dd><span>{{lang.wholookme}}</span></dd>
          </dl>
        </router-link>
      </div>
		</div>
    <!-- 全职信息 -->
    <div class="panel full-time">
      <section>
        <!-- 英文状态标题 -->
        <h2>{{ lang.privacyResume1st }}</h2>
        <!-- 中文状态标题 -->
        <h3>{{ lang.privacyResume1st }}</h3>
        <div class="pure-g jobInfo">
          <div class="pure-u-6-24 left">
            <!-- 全职职位名称 -->
            <h4>{{ lang.post }}&nbsp;&nbsp;&nbsp;<span>{{fullTime.expectWork}}</span></h4>
            <!-- 简历类型 -->
            <p>{{ lang.home }}<span>{{fullTime.localeCity}}{{fullTime.localeProvince}}</span></p>
            <!-- 更新时间 -->
            <p>{{ lang.updated }}<br/><span>{{fullTime.resumeUpdate}}</span></p>
          </div>
          <!-- 档案完整度 -->
          <div class="pure-u-10-24 center">
            <div class="centerCon">
              <span>{{ lang.ArchivalCompleteness }}</span>
              <p><span>{{fullTime.resumeComplete}}</span></p>
            </div>
          </div>
          <!-- 用户 预览/修改简历 功能 -->
          <div class="pure-u-8-24 right" style="">
            <div class="rightCon">
              <div class="row">
                <p style="cursor:pointer" @click="preResume()">
                  <span>{{ lang.preResume }}</span>
                </p>
                <p style="cursor:pointer" @click="modResume()">
                  <span>{{ lang.modResume}}</span>
                </p>
              </div>
              <!-- <div class="row">
                <p><span>预览简历</span></p>
                <p><span>预览简历</span></p>
              </div> -->
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- 兼职信息 -->
    <div class="panel part-time">
      <!-- 详细注释信息参见 全职信息 -->
      <section>
        <h2>{{ lang.privacyResume2nd }}</h2>
        <h3>{{ lang.privacyResume2nd }}</h3>
        <div class="pure-g jobInfo">
          <div class="pure-u-6-24 left">
            <h4>{{ lang.skill }}&nbsp;&nbsp;&nbsp;<span>{{partTime.skill[0]}}、{{partTime.skill[1]}}</span></h4>
            <p>{{ lang.home }}<br/><span>{{partTime.localeCity}}{{partTime.localeTown}}</span></p>
            <p>{{ lang.updated }}<br/><span>{{partTime.resumeUpdate}}</span></p>
          </div>
          <div class="pure-u-10-24 center">
            <div class="centerCon">
              <span>{{ lang.ArchivalCompleteness }}</span>
              <p><span>{{partTime.resumeComplete}}</span></p>
            </div>
          </div>
          <div class="pure-u-8-24 right" style="">
            <div class="rightCon">
              <div class="row">
                <router-link :to="{ path: '/'+ langCode + '/parttime/detail/' }">
                  <p><span>{{ lang.preResume }}</span></p>
                </router-link>
                <router-link :to="{ path: '/'+ langCode + '/parttime/first/' }">
                  <p><span>{{ lang.modResume }}</span></p>
                </router-link>
              </div>
              <!-- <div class="row">
                <p><span>预览简历</span></p>
                <p><span>预览简历</span></p>
              </div> -->
            </div>
          </div>
        </div>
      </section>
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
      auth: auth(),
      lang: lang(),
      langCode: langType(),
      userSrc: "http://i2.cfimg.com/611341/c69b534d645c1d55.png",
      userName: "京典一线",
      balance: "365",
      iseewho: "",
      wholookme: "",
      fullTime: {
        // job: "大堂经理",
        // type: "普通简历",
        // time: "2017.08.09",
        // percent: "70%"
        expectCity: "",
        expectCountry: "",
        expectProvince: "",
        expectTown: "",
        resumeComplete: 0,
        resumeUpdate: "",
        signature: "",
        skill: []
      },
      partTime: {
        expectCity: "",
        expectCountry: "",
        expectProvince: "",
        expectTown: "",
        resumeComplete: 0,
        resumeUpdate: "",
        signature: "",
        skill: []
      },
      statusMobile: "",
      statusEmail: "",
      statusIDCard: ""
    };
  },
  created() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      let id = { openID: auth().openID };
      console.log(id);
      api("/member/ucenter", id, callback => {
        console.log(callback);
        if (callback.code === 200) {
          // console.log(callback);
          // this.userSrc = callback.data.img;
          this.userName =
            callback.data.realname ||
            callback.data.userName ||
            callback.data.mobile;
          this.balance = callback.data.money / 100;
          this.iseewho = callback.data.seeWho;
          this.wholookme = callback.data.lookMe;
          this.fullTime = callback.data.fulltime;
          this.partTime = callback.data.parttime;
          this.statusMobile = callback.data.statusMobile;
          this.statusEmail = callback.data.statusEmail;
          this.statusIDCard = callback.data.statusIDCard;
        } else {
          console.log("error");
        }
      });
    }
  }
};
</script>