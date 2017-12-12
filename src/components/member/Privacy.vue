<style lang="less" scoped>
@import "../../stylesheet/variables.less";

.viewport-privacy {
  section {
    h2,
    h3 {
      color: @theme-font-color-lightes;
      background-color: @theme-color-accent-lighten;
      font-size: @theme-font-size-stitle-default;
      font-weight: @theme-font-weight-stitle-default;
      margin: @theme-margin-size-largerm 0 0 0;
    }

    h2 {
      line-height: @theme-size-height-default;
      height: @theme-size-height-default;
      padding-left: @theme-margin-size-largerm;
    }

    h3 {
      width: @theme-font-size-stitle-default;
      line-height: @theme-font-lineheight-stitle-default;
      padding: @theme-margin-size-largerm * 2 @theme-margin-size-default;
      display: none;
    }

    h4 {
      color: @theme-font-color-default;
      font-size: @theme-font-size-common-default;
      font-weight: @theme-font-weight-common-default;
      line-height: @theme-font-lineheight-common-default;
      width: 7.2rem;
      margin-top: @theme-margin-size-default;
      margin-left: auto;
      margin-right: auto;
    }

    .pure-button,
    .pure-button:link,
    .pure-button:visited,
    .pure-button:active,
    .pure-button:hover {
      color: @theme-font-color-default;
      font-size: @theme-font-size-common-default * 2;
      font-weight: lighter;
      line-height: @theme-font-lineheight-common-default * 4;
      background-color: @theme-color-lightgray-lightes;
      background-image: none;
      border: @theme-size-border-default * 2 @theme-color-lightgray-default
        solid;
      box-shadow: none;
      display: block;
      width: 7.2rem;
      height: 2.6rem;
      margin: 0 auto;

      .icon {
        fill: @theme-font-color-default;
        width: @theme-size-height-default;
        height: @theme-size-height-default;
        vertical-align: -0.15rem;
      }
    }

    .privacy-open .pure-button-left,
    .privacy-close .pure-button-right {
      color: @theme-color-accent-lighten;
      background-color: @theme-color-white-default;
      border-color: @theme-color-accent-lighten;

      .icon {
        fill: @theme-color-accent-lighten;
      }
    }

    .privacy-bottom {
      color: @theme-font-color-default;
      font-size: @theme-font-size-common-default;
      line-height: @theme-size-height-default;
      letter-spacing: @theme-font-spacing-default;
      height: @theme-size-height-default;
      width: 20.48rem;
      border: @theme-size-border-default * 2 @theme-color-lightgray-default
        dashed;
      padding-left: @theme-margin-size-largerm;
      margin-top: @theme-margin-size-default * 2;

      .arrow-up {
        position: relative;
        width: 0;
        height: 0;
        border-style: dashed;
        border-width: 0 @theme-margin-size-largerm @theme-margin-size-largerm
          @theme-margin-size-largerm;
        border-color: transparent transparent @theme-color-lightgray-default
          transparent;
        margin-top: -@theme-font-lineheight-stitle-default * 3;

        &::before {
          position: absolute;
          content: "";
          top: @theme-size-border-default * 2;
          left: -@theme-margin-size-largerm + @theme-size-border-default;
          width: 0;
          height: 0;
          border-style: dashed;
          border-top-width: 0;
          border-left-width: @theme-margin-size-largerm -
            @theme-size-border-default;
          border-right-width: @theme-margin-size-largerm -
            @theme-size-border-default;
          border-bottom-width: @theme-margin-size-largerm -
            @theme-size-border-default;
          border-color: transparent transparent @theme-color-white-default
            transparent;
        }
      }

      &.privacy-bottom-left .arrow-up {
        margin-left: 4.4rem;
      }

      &.privacy-bottom-right .arrow-up {
        margin-left: 15.1rem;
      }
    }

    .privacy-open .privacy-bottom-right,
    .privacy-close .privacy-bottom-left {
      display: none;
    }
  }

  section:lang(zh-cmn-hans),
  section:lang(zh-cmn-hant) {
    h3 {
      display: inline-block;
    }

    h2 {
      display: none;
    }

    h4 {
      display: block;
      margin: @theme-margin-size-smaller auto @theme-margin-size-default auto;
    }

    .pure-g {
      display: inline-block;
      vertical-align: top;
      width: 19.72rem;
      margin-top: @theme-margin-size-largerm;
    }

    .pure-button {
      margin: 0 auto;
    }

    .privacy-bottom {
      width: 19.2rem;
    }

    .privacy-bottom-left .arrow-up {
      margin-left: 4.12rem;
    }

    .privacy-bottom-right .arrow-up {
      margin-left: 14.2rem;
    }
  }
}
</style>

<template>
        <div class="viewport-privacy panel">
                <h1>{{ lang.privacyHeader }}</h1>
                <div class="message message-warning">{{ lang.privacyWarn }}</div>
                <section>
                        <h2>{{ lang.privacyResume1st }}</h2>
                        <h3>{{ lang.privacyResume1st }}</h3>
                        <div v-bind:class=" 'pure-g privacy-' + tabFulltime ">
                                <div class="pure-u-1-2">
                                        <h4>{{ lang.privacyWarning }}</h4>
                                        <a class="pure-button pure-button-primary pure-button-left"
                                                v-on:click=" changeFulltime('open') ">
                                                <Icon name="unlock" />
                                                {{ lang.privacyOpen }}
                                        </a>
                                </div>
                                <div class="pure-u-1-2">
                                        <h4>{{ lang.privacyWarned }}</h4>
                                        <a class="pure-button pure-button-primary pure-button-right"
                                                v-on:click=" changeFulltime('close') ">
                                                <Icon name="lock" />
                                                {{ lang.privacyClose }}
                                        </a>
                                </div>
                                <div class="privacy-bottom privacy-bottom-left">
                                        {{ lang.privacyStateL }}
                                        <div class="arrow-up"></div>
                                </div>
                                <div class="privacy-bottom privacy-bottom-right">
                                        {{ lang.privacyStateR }}
                                        <div class="arrow-up"></div>
                                </div>
                        </div>
                        
                </section>
                <section>
                        <h2>{{ lang.privacyResume2nd }}</h2>
                        <h3>{{ lang.privacyResume2nd }}</h3>
                        <div v-bind:class=" 'pure-g privacy-' + tabParttime ">
                                <div class="pure-u-1-2">
                                        <h4>{{ lang.privacyWarning }}</h4>
                                        <a class="pure-button pure-button-primary pure-button-left"
                                                v-on:click=" changeParttime('open') ">
                                                <Icon name="unlock" />
                                                {{ lang.privacyOpen }}
                                        </a>
                                </div>
                                <div class="pure-u-1-2">
                                        <h4>{{ lang.privacyWarned }}</h4>
                                        <a class="pure-button pure-button-primary pure-button-right"
                                                v-on:click=" changeParttime('close') ">
                                                <Icon name="lock" />
                                                {{ lang.privacyClose }}
                                        </a>
                                </div>
                                <div class="privacy-bottom privacy-bottom-left">
                                        {{ lang.privacyStateL }}
                                        <div class="arrow-up"></div>
                                </div>
                                <div class="privacy-bottom privacy-bottom-right">
                                        {{ lang.privacyStateR }}
                                        <div class="arrow-up"></div>
                                </div>
                        </div>
                </section>
        </div>
</template>

<script>
import { auth } from "../../utils"
import { lang, langType } from "../../locales";

export default {
  data() {
    console.log(111,auth().openID);
    return {
      tabFulltime: "open",
      tabParttime: "open",
      lang: lang(),
      langCode: langType()
    };
  },
  methods: {
    changeFulltime(status) {
      this.tabFulltime = status;
      let o = {
        openID: "3MjFiODU4Mjg0Zjc2NTQ3MjVhZDZhYzk0NjcxMWVlZjFi9",
        type: "FULLTIME",
        show: true
      };
    },
    changeParttime(status) {
      this.tabParttime = status;
    },
    setCookie: function(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      var expires = "expires=" + d.toUTCString();
      console.info(cname + "=" + cvalue + "; " + expires);
      document.cookie = cname + "=" + cvalue + "; " + expires;
      console.info(document.cookie);
    },
    //获取cookie
    getCookie: function(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
      }
      return "";
    },
    //清除cookie
    clearCookie: function() {
      this.setCookie("username", "", -1);
    },
    checkCookie: function() {
      var user = this.getCookie("username");
      if (user != "") {
        alert("Welcome again " + user);
      } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
          this.setCookie("username", user, 365);
        }
      }
    }
  }
};
</script>