<style lang="less" scoped>
@import "../../stylesheet/variables.less";
</style>

<template>
        <div class="viewport-fulltime1st resume">
                <div class="wrapper flex-layout flex-layout-raw step">
                        <div class="step-common step-common-3th step-active">
                                <em>{{ lang.fulltimeStep1 }}</em>
                        </div>
                        <div class="step-common step-common-3th">
                                <em>{{ lang.fulltimeStep2 }}</em>
                        </div>
                        <div class="step-common step-common-3th">
                                <em>{{ lang.fulltimeStep3 }}</em>
                        </div>
                </div>
                <div class="wrapper panel">
                        <h1>{{ lang.fulltimeStep1 }}</h1>
                        <form class="pure-form pure-form-aligned">
                                <div class="pure-control-group label-password">
                                        <label>
                                                <em>*</em>
                                                {{ lang.fulltime1stRealname }}
                                        </label>
                                        <input type="text" v-model=" realname " />
                                </div>
                                <div class="pure-control-group label-radio">
                                        <label>
                                                <em>*</em>
                                                {{ lang.fulltime1stSex }}
                                        </label>
                                        <input type="radio" v-model=" sex " value="1" />
                                        <span>{{ lang.fulltime1stMan }}</span>
                                        <input type="radio" v-model=" sex " value="2" />
                                        <span>{{ lang.fulltime1stWoman }}</span>
                                </div>
                                <div class="pure-control-group label-upload">
                                        <label>
                                                {{ lang.fulltime1stImg }}
                                        </label>
                                        <el-upload
                                                class="uploader"
                                                :action=" uploadURI "
                                                :show-file-list=" false "
                                                :auto-upload=" true "
                                                :on-success=" handleAvatarSuccess "
                                                :before-upload=" beforeAvatarUpload ">
                                                <img v-if=" img " :src=" img " class="avatar">
                                                <i v-else class="el-icon-plus uploader-icon"></i>
                                        </el-upload>
                                </div>
                                <div class="pure-control-group label-common">
                                        <label>
                                                {{ lang.fulltime1stBirthday }}
                                        </label>
                                        <input type="text" v-model=" birthday "
                                                v-bind:placeholder=" lang.fulltime1stDateformat " />
                                </div>
                                <div class="pure-control-group label-regions">
                                        <label>
                                                {{ lang.fulltime1stRegions }}
                                        </label>
                                        <select id="selectCountry" v-on:change=" changeCountry() " v-model=" localeCountry ">
                                                <option v-bind:value=" localeCountry ">
                                                        {{ localeCountry || lang.regionsPlease }}
                                                </option>
                                                <option v-for=" item of country " v-bind:key=" item " v-bind:value=" item ">
                                                        {{ item }}
                                                </option>
                                        </select>
                                        <select id="selectProvince" v-on:change=" changeProvince() " v-model=" localeProvince ">
                                                <option v-bind:value=" localeProvince ">
                                                        {{ localeProvince || lang.regionsPlease }}
                                                </option>
                                                <option v-for=" item of province " v-bind:key=" item " v-bind:value=" item ">
                                                        {{ item }}
                                                </option>
                                        </select>
                                        <select id="selectCity" v-on:change=" changeCity() " v-model=" localeCity ">
                                                <option v-bind:value=" localeCity ">
                                                        {{ localeCity || lang.regionsPlease }}
                                                </option>
                                                <option v-for=" item of city " v-bind:key=" item " v-bind:value=" item ">
                                                        {{ item }}
                                                </option>
                                        </select>
                                        <select id="selectTown" v-model=" localeTown ">
                                                <option v-bind:value=" localeTown ">
                                                        {{ localeTown || lang.regionsPlease }}
                                                </option>
                                                <option v-for=" item of town " v-bind:key=" item " v-bind:value=" item ">
                                                        {{ item }}
                                                </option>
                                        </select>
                                </div>
                                <div class="pure-control-group label-mobile">
                                        <label>
                                                <em>*</em>
                                                {{ lang.fulltime1stMobile }}
                                        </label>
                                        <select v-model=" mobileArea ">
                                                <option v-for=" item in mobileAreaBuf " v-bind:key=" item.code "
                                                        v-bind:value=" item.code "
                                                        v-bind:selected=" item.code === '+86' ">
                                                        {{ item.name + ' ' + item.code }}
                                                </option>
                                        </select>
                                        <input onkeyup="(this.v=()=>this.value=this.value.replace(/[^0-9-]+/,'')).call(this)"
                                                v-bind:placeholder=" lang.signinMobile " v-model=" mobile " />
                                </div>
                                <div class="pure-control-group label-email">
                                        <label>
                                                {{ lang.fulltime1stEmail }}
                                        </label>
                                        <input type="email" v-model=" email " />
                                </div>
                                <div class="pure-control-group label-idcard">
                                        <label>
                                                <em>*</em>
                                                {{ lang.fulltime1stIDCard }}
                                        </label>
                                        <input onkeyup="(this.v=()=>this.value=this.value.toUpperCase().replace(/[^0-9A-Z-]+/,'')).call(this)"
                                                v-model=" idcardNumber " />
                                        <button class=" pure-button pure-button-primary"
                                                v-on:click=" alert() " type="button">
                                                {{ lang.fulltime1stAuth }}
                                        </button>
                                </div>
                                <div class="pure-control-group label-submit">
                                        <button class="pure-button pure-button-primary" type="button"
                                                v-on:click=" submitNext() ">
                                                {{ lang.fulltime1stNext }}
                                        </button>
                                </div>
                                <label class="label-warning" v-show=" errors !== 0">
                                        <span v-show=" errors === 2101 "> {{ lang.errors21Realname }} </span>
                                        <span v-show=" errors === 2102 "> {{ lang.errors21Sex }} </span>
                                        <span v-show=" errors === 2103 "> {{ lang.errors21Birthday }} </span>
                                        <span v-show=" errors === 2104 "> {{ lang.errors21Locale }} </span>
                                        <span v-show=" errors === 2105 "> {{ lang.errors21Email }} </span>
                                        <span v-show=" errors === 2106 "> {{ lang.errors21Mobile }} </span>
                                        <span v-show=" errors === 2107 "> {{ lang.errors21IDCard }} </span>
                                        <span v-show=" errors === 2108 "> {{ lang.errorsMobile }} </span>
                                        <span v-show=" errors === 2109 "> {{ lang.errorsCaptcha }} </span>
                                        <span v-show=" errors === 2110 "> {{ lang.errorsCaptcha }} </span>
                                </label>
                        </form>
                </div>
        </div>
</template>

<script>
import { lang, langType } from "../../locales";
import { redirect, auth, api } from "../../utils";
import setting from "../../config/setting";
import { Upload, Dialog } from "element-ui";

export default {
  data: function() {
    let code = langType();
    let cache = setting.cache || {};

    let regions = cache.regions || "";
    if (regions.indexOf("-") !== -1) {
      let buffers = cache.regions.split("-");
      regions = buffers[2];

      if (buffers.length === 4) {
        regions = `${regions}/${buffers[3]}`;
      }
    }

    return {
      realname: "",
      sex: 0,
      img: "",
      birthdayYear: new Date().getFullYear(),
      birthdayMonth: new Date().getMonth() + 1,
      birthdayDay: new Date().getDate(),
      birthday: "",
      localeCountry: "",
      localeProvince: "",
      localeCity: "",
      localeTown: "",
      mobile: "",
      mobileArea: "+86",
      email: "",
      idcardNumber: "",
      statusIDCard: false,
      regions: regions,
      country: cache.countries,
      province: [],
      city: [],
      town: [],
      mobileAreaBuf: window.mobileArea || {},
      uploadURI: setting.pathAPI.replace("/ajax", "") + "/service/ajax/upload",
      errors: 0,
      langCode: code,
      lang: lang()
    };
  },
  methods: {
    handleAvatarSuccess: function(res, file) {
      this.img = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload: function(file) {
      let isImg = file.type === "image/jpeg" || file.type === "image/png";
      let isLt2M = file.size / 1024 / 1024 < 2;

      if (!isImg) {
        this.errors = 2102;
      }

      if (!isLt2M) {
        this.errors = 2101;
      }

      return isImg && isLt2M;
    },
    changeCountry: function() {
      if (this.localeCountry) {
        api(
          "/service/region",
          {
            regions: this.localeCountry
          },
          callback => {
            if (callback.code === 200) {
              this.province = callback.data;
              this.localeProvince = "";
              this.localeCity = "";
              this.localeTown = "";
            }
          }
        );
      }
    },
    changeProvince: function() {
      if (this.localeCountry && this.localeProvince) {
        api(
          "/service/region",
          {
            regions: this.localeCountry + "-" + this.localeProvince
          },
          callback => {
            if (callback.code === 200) {
              this.city = callback.data;
              this.localeCity = "";
              this.localeTown = "";
            }
          }
        );
      }
    },
    changeCity: function() {
      if (this.localeCountry && this.localeProvince && this.localeCity) {
        api(
          "/service/region",
          {
            regions:
              this.localeCountry +
              "-" +
              this.localeProvince +
              "-" +
              this.localeCity
          },
          callback => {
            if (callback.code === 200) {
              this.town = callback.data;
              this.localeTown = "";
            }
          }
        );
      }
    },
    submitNext: function() {
      let code = langType();
      if (!this.realname) {
        return (this.errors = 2101);
      }

      if (!this.sex) {
        return (this.errors = 2102);
      }

      if (/^(\d{4})\-(\d{2})(|\-(\d{2}))$/i.test(this.birthday) === false) {
        return (this.errors = 2103);
      }

      if (
        this.localeCountry ||
        this.localeProvince ||
        this.localeCity ||
        this.localeTown
      ) {
        if (
          !this.localeCountry ||
          !this.localeProvince ||
          !this.localeCity ||
          !this.localeTown
        ) {
          return (this.errors = 2104);
        }
      }

      this.errors = 0;
      alert(123);
      this.$router.push({ path: `/${code}/fulltime/two` });
    }
  },
  components: {
    "el-upload": Upload,
    "el-dialog": Dialog
  }
};
</script>
