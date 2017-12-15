<style lang="less" scoped>
@import "../../stylesheet/variables.less";

.viewport-password {
  .pure-form {
    padding: 0.48rem 0;
    span {
      display: none;
    }
    .active {
      display: inline-block;
      margin-left: 0.3rem;
      color: @theme-color-red-default;
    }
  }
}
</style>

<template>
        <div class="viewport-password panel">
                <h1>{{ lang.passwordHeader }}</h1>
                <form class="pure-form pure-form-aligned">
                        <div class="pure-control-group label-password">
                                <label>{{ lang.passwordOld }}</label>
                                <input type="password" v-model="oldPassWord"/>
                                <span :class="{'active':failed}">请确认密码是否输入正确</span>
                        </div>
                        <div class="pure-control-group label-password">
                                <label>{{ lang.passwordNew }}</label>
                                <input type="password" v-model="newPassWord1"/>
                                <span :class="{'active':repeatPass}">请确认密码是否一直</span>
                        </div>
                        <div class="pure-control-group label-password">
                                <label>{{ lang.passwordReEntry }}</label>
                                <input type="password" v-model="newPassWord2"/>
                                <span :class="{'active':repeatPass}">请确认密码是否一直</span>
                        </div>
                        <div class="pure-control-group label-submit">
                                <button type="button" class="pure-button pure-button-primary" @click="submit">
                                        {{ lang.passwordSubmit }}
                                </button>
                                <span :class="{'active':success}">修改成功</span>
                                <span :class="{'active':tips}">{{tipsCont}}</span>
                        </div>
                </form>
        </div>
</template>

<script>
import { lang, langType } from "../../locales";
import { api, auth, uriPath } from "../../utils";
import { Pagination } from "element-ui";
import setting from "../../config/setting";

export default {
  data: function() {
    return {
      lang: lang(),
      langCode: langType(),
      oldPassWord: "",
      newPassWord1: "",
      newPassWord2: "",
      repeatPass: false,
      failed: false,
      success: false,
      tips: false,
      tipsCont: ""
    };
  },
  methods: {
    submit() {
      let o = {
        openID: auth().openID,
        oldPassword: this.oldPassWord, // 账号旧版密码 String 非空
        newPassword: this.newPassWord1, // 账号新版密码 String 非空
        confirmPass: this.newPassWord2
      };
      this.newPassWord1 === this.newPassWord2
        ? api("/member/setPassword", o, callback => {
            console.log(callback);
            switch (callback.code) {
              case 200:
                this.tips = false;
                this.tipsCont = "修改成功";
                this.tips = true;
                this.oldPassWord = "";
                this.newPassWord1 = "";
                this.newPassWord2 = "";
                break;

              case 2002:
                this.tips = false;
                this.tipsCont = "账号密码必须不少于6位";
                this.tips = true;
                
                break;
              
              case 2003:
                this.tips = false;
                this.tipsCont = "帐号密码必须包含大写字母";
                this.tips = true;
                
                break;

              case 2004:
                this.tips = false;
                this.tipsCont = "帐号密码必须包含小写字母";
                this.tips = true;
                
                break;

              case 2005:
                this.tips = false;
                this.tipsCont = "帐号密码必须包含数字";
                this.tips = true;
                break;

              case 2006:
                this.tipsCont = "帐号密码必须和确认密码一致";
                this.tips = true;
                break;

              case 2101:
                this.tips = false;
                this.tipsCont = "账户信息无效";
                this.tips = true;
                break;

              case 2110:
                this.tips = false;
                this.tipsCont = "帐号旧密码错误";
                this.tips = true;
                break;

              case 2013:
                this.tips = false;
                this.tipsCont = "更新密码失败";
                this.tips = true;
                break;
            }
          })
        : null;
    }
  }
};
</script>

