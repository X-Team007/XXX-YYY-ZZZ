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
            b {
              display: inline-block;
              margin-right: 0.06rem;
              width: 0.32rem;
              height: 0.32rem;
              background: #adc;
            }
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
      }
      .account {
        display: inline-block;
        margin-left: 1.8rem;
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
        padding: 0.3rem 0;
        overflow: hidden;
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
            margin-bottom: 0.98rem;
            color: @theme-color-accent-default;
          }
          p {
            color: @theme-font-color-default;
          }
          p:nth-of-type(1) {
            margin-bottom: 0.98rem;
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
  }
  .full-time {
  }
  .part-time {
  }
}
</style>

<template>
  <div class="viewport-ucenter-person">
		<div class="viewport-accent panel information">
      <div class="accent">
        <dl class="userInfo">
          <dt>
            <img class="userImg" :src="userSrc" alt="图片地址？">
          </dt>
          <dd>
            <div class="title">
              <span class="userName">{{lang.PersonCenterHello}}用户名获取字段？</span>
            </div>
            <div class="binding">
              <b></b>
              <Icon name="phone"/>
              <span>未验证</span>
              <b></b>
              <span>未验证</span>
              <b></b>
              <span>未验证</span>
            </div>
          </dd>
        </dl>
        <div class="account">
          <span class="sum">余额：<b>365</b>元</span>
          <button type="button" class="pure-button pure-button-primary">
            <!-- {{ lang.financeSubmit }} -->充值
          </button>
          <button type="button" class="pure-button pure-button-primary">
            <!-- {{ lang.financeSubmit }} -->提现
          </button>
        </div>
      </div>
      <div class="checked">
        <a href="">
          <dl class="checkUs">
            <dt>0</dt>
            <dd><span>我看了谁的简历</span></dd>
          </dl>
        </a>
        <a href="">
          <dl class="weCheck">
            <dt>0</dt>
            <dd><span>谁看了我的简历</span></dd>
          </dl>
        </a>
      </div>
		</div>
    <div class="panel full-time">
      <section>
        <h2 data-v-52bbcf05="">{{ lang.privacyResume1st }}</h2>
        <h3 data-v-52bbcf05="">{{ lang.privacyResume1st }}</h3>
        <div class="pure-g jobInfo">
          <div class="pure-u-6-24 left">
            <h4>大堂经理</h4>
            <p>类型:<span>标准简历</span></p>
            <p>更新时间:<span>2017.08.09</span></p>
          </div>
          <div class="pure-u-10-24 center">
            <div class="centerCon">
              <span>档案完整度：</span>
              <p><span>70%</span></p>
            </div>
          </div>
          <div class="pure-u-8-24 right" style="">
            <div class="rightCon">
              <div class="row">
                <p><span>预览简历</span></p>
                <p><span>预览简历</span></p>
              </div>
              <div class="row">
                <p><span>预览简历</span></p>
                <p><span>预览简历</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="panel part-time">
      <section>
        <h2 data-v-52bbcf05="">{{ lang.privacyResume2nd }}</h2>
        <h3 data-v-52bbcf05="">{{ lang.privacyResume2nd }}</h3>
        <div class="pure-g jobInfo">
          <div class="pure-u-6-24 left">
            <h4>大堂经理</h4>
            <p>类型:<span>标准简历</span></p>
            <p>更新时间:<span>2017.08.09</span></p>
          </div>
          <div class="pure-u-10-24 center">
            <div class="centerCon">
              <span>档案完整度：</span>
              <p><span>70%</span></p>
            </div>
          </div>
          <div class="pure-u-8-24 right">
            <div class="rightCon">
              <div class="row">
                <p><span>预览简历</span></p>
                <p><span>预览简历</span></p>
              </div>
              <div class="row">
                <p><span>预览简历</span></p>
                <p><span>预览简历</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { lang, langType } from "../../locales";
import { auth } from "../../utils";

export default {
  data() {
    return {
      auth: auth(),
      lang: lang(),
      langCode: langType(),
      userSrc: "http://i2.cfimg.com/611341/c69b534d645c1d55.png"
    };
  }
};
</script>