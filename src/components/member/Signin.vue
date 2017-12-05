<style lang="less" scoped>
@import "../../stylesheet/variables.less";

.viewport-signin {
  width: 100%;
  height: 9rem;
  max-width: @theme-size-width-maximum;
  background-position: center bottom;
  background-size: 100% 100%;
  margin: 0 auto;

  .wrapper {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    height: 100%;
  }

  .panel {
    display: inline-block;
    background-color: rgba(0, 0, 0, @theme-color-shade-default);
    box-shadow: rgba(0, 0, 0, @theme-color-shade-default);
    border-radius: 0.08rem;
    padding: 0.6rem 0.6rem;
    height: 4.4rem;
    margin-top: 0.48rem;
  }
}
</style>

<template>
        <div class="viewport-signin" v-bind:style=" viewportStyle ">
                <div class="wrapper">
                        <div class="panel">
                                <form class="pure-form pure-form-stacked">
                                        <legend>{{ lang.signinHeader }}</legend>
                                        <label class="label-mobile">
                                                <select v-model=" mobileArea ">
                                                        <option v-for=" item in mobileAreaBuf " v-bind:key=" item.code "
                                                                v-bind:value=" item.code "
                                                                v-bind:selected=" item.code === '+86' ">
                                                                {{ item.name + ' ' + item.code }}
                                                        </option>
                                                </select>
                                                <input onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'')}).call(this)"
                                                        v-bind:placeholder=" lang.signinMobile " v-model=" mobile " />
                                        </label>

                                        <label class="label-captcha">
                                                <input onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'')}).call(this)"
                                                        v-bind:placeholder=" lang.signinCode " v-model=" captchaCode " />
                                                <button v-bind:class=" 'pure-button pure-button-' + smsDisabled "
                                                        v-on:click=" emitCaptcha() " type="button">
                                                        {{ smsText }}
                                                </button>
                                        </label>
                                        <label class="label-submit">
                                                <button class="pure-button pure-button-primary" type="button"
                                                        v-on:click=" submitSignin() ">
                                                        {{ lang.headerSignin }}
                                                </button>
                                        </label>
                                        <label class="label-warning" v-show=" errors !== 0">
                                                <span v-show=" errors === 2001 "> {{ lang.errors20Mobile }} </span>
                                                <span v-show=" errors === 2007 "> {{ lang.errors20Captcha }} </span>
                                                <span v-show=" errors === 2009 "> {{ lang.errors20SMSSend }} </span>
                                                <span v-show=" errors === 2013 "> {{ lang.errors20Signin }} </span>
                                        </label>
                                </form>
                        </div>
                </div>
        </div>
</template>

<script>
import { lang, langType } from "../../locales";
import { redirect, auth, api, storage } from "../../utils";

export default {
  data: function() {
    let code = langType();
    let authSignin = auth();

    if (Object.keys(authSignin).length !== 0) {
      return redirect(`/${code}/member/`);
    }

    let viewportHeight = "15.9rem";
    let clientWidth = document.body.clientWidth;
    if (clientWidth <= 1366) {
      viewportHeight = "8.4rem";
    } else if (clientWidth <= 1440) {
      viewportHeight = "8.9rem";
    } else if (clientWidth <= 1680) {
      viewportHeight = "10.4rem";
    } else if (clientWidth <= 1920) {
      viewportHeight = "11.9rem";
    } else if (clientWidth <= 2048) {
      viewportHeight = "12.7rem";
    }

    let backgroundImg = "url(http://i2.cfimg.com/611341/83bdf32640c8ff27.jpg)";
    if (code === "cn") {
      backgroundImg = "url(http://i2.cfimg.com/611341/12f4adda146b788b.jpg)";
    } else if (code === "zh") {
      backgroundImg = "url(http://i2.cfimg.com/611341/c658116547f7576a.jpg)";
    }
    let smsStatus = parseInt(storage.read("smsStatus") || "-1");

    return {
      mobile: "",
      mobileArea: "+86",
      mobileAreaBuf: window.mobileArea || {},
      smsDisabled: smsStatus === -1 ? "primary" : "disabled",
      smsText: lang("smsVerification"),
      captchaCode: "",
      encryptCode: "",
      errors: 0,
      viewportStyle: {
        height: viewportHeight,
        backgroundImage: backgroundImg
      },
      langCode: code,
      lang: lang()
    };
  },
  mounted: function() {
    let smsStatus = parseInt(storage.read("smsStatus") || "-1");

    if (smsStatus !== -1) {
      window.smsTimer = setInterval(this.emitSmsStatus, 1000);
    }
  },
  methods: {
    emitSmsStatus: function() {
      let smsStatus = parseInt(storage.read("smsStatus") || "-1");

      if (smsStatus === -1) {
        smsStatus = 60;
      }

      smsStatus = smsStatus - 1;
      this.smsText = lang("smsWait").replace("%D", smsStatus);
      storage.write("smsStatus", smsStatus);

      if (smsStatus === 0) {
        this.smsText = lang("smsVerification");
        this.smsDisabled = "primary";
        storage.write("smsStatus", -1);
        clearInterval(window.smsTimer);
      }
    },
    emitCaptcha: function() {
      if (this.smsDisabled === "primary") {
        if (11 < this.mobile.length || this.mobile.length < 6) {
          return (this.errors = 2001);
        }

        if (
          this.mobileArea === "+86" &&
          /^1(3|4|5|7|8|9)\d{9}$/i.test(this.mobile) === false
        ) {
          return (this.errors = 2001);
        }

        if (
          this.mobileArea !== "+86" &&
          /^[0-9]{6, 11}$/i.test(mobile) === false
        ) {
          return (this.errors = 2001);
        }

        api(
          "/service/sms",
          {
            mobile: this.mobile,
            mobileArea: this.mobileArea,
            smsType: "SIGNUP"
          },
          callback => {
            if (callback.code !== 200) {
              return (this.errors = 2009);
            }

            this.errors = 0;
            this.encryptCode = callback.data;
            this.smsDisabled = "disabled";
            window.smsTimer = setInterval(this.emitSmsStatus, 1000);
          }
        );
      }
    },
    submitSignin: function() {
      if (11 < this.mobile.length || this.mobile.length < 6) {
        return (this.errors = 2001);
      }

      if (
        this.mobileArea === "+86" &&
        /^1(3|4|5|7|8|9)\d{9}$/i.test(this.mobile) === false
      ) {
        return (this.errors = 2001);
      }

      if (
        this.mobileArea !== "+86" &&
        /^[0-9]{6, 11}$/i.test(mobile) === false
      ) {
        return (this.errors = 2001);
      }

      if (/^\d{6}$/i.test(this.captchaCode) === false) {
        return (this.errors = 2007);
      }

      this.errors = 0;
      api(
        "/service/signin",
        {
          mobileArea: this.mobileArea,
          mobile: this.mobile,
          captcha: this.captchaCode,
          encrypt: this.encryptCode
        },
        callback => {
          let code = langType();

          if (callback.code !== 200) {
            this.errors = callback.code;
          } else {
            auth(callback.data);
            storage.write("smsStatus", -1);

            if (callback.data.isEnterprise) {
              return redirect(`/${code}/enterprise/`);
            }

            return redirect(`/${code}/member/`);
          }
        }
      );
    }
  }
};
</script>
