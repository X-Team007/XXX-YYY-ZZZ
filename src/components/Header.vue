<style lang="less" scoped>

</style>

<template>
        <header class="header-content-common">
                <div class="pure-menu pure-menu-horizontal tbar">
                        <div v-bind:class=" ( Object.keys(signin).length !== 0 ? 'wrapper wrapper-signin' : 'wrapper' )
                                + ' flex-layout flex-layout-row' ">
                                <router-link class="pure-menu-heading" :to="{ path: `/${langCode}/` }">
                                        <img class="pure-img" src="http://i1.cfimg.com/611341/4985cc3fbbe24ef1.png" />
                                </router-link>
                                <div class="btngroup" v-if=" Object.keys(signin).length === 0 ">
                                        <router-link class="pure-button button-signin" :to="{ path: `/${langCode}/signin/` }">
                                                {{ lang.headerSignin }}
                                        </router-link>
                                        <router-link class="pure-button button-signup" :to="{ path: `/${langCode}/signup/` }">
                                                {{ lang.headerSignup }}
                                        </router-link>
                                </div>
                                <div class="btngroup" v-if=" Object.keys(signin).length !== 0 ">
                                        <img class="pure-img header-img" v-bind:src=" signin.img || headerImg " />
                                        <router-link class="pure-button pure-button-primary button-ucenter"
                                                :to="{ path: signin.isEnterprise ? `/${langCode}/enterprise/` : `/${langCode}/member/` }">
                                                <span>{{ signin.realname || signin.username || signin.mobile }}</span>
                                        </router-link>
                                        <button class="pure-button button-signout" v-on:click=" emitSignout() " >
                                                {{ lang.headerSignout }}
                                        </button>
                                </div>
                        </div>
                </div>
                <div class="pure-menu pure-menu-horizontal tnav">
                        <div v-bind:class=" ( Object.keys(signin).length !== 0 ? 'wrapper wrapper-signin' : 'wrapper' )
                                + ' flex-layout flex-layout-row' ">
                                <ul class="pure-menu-list">
                                        <li class="pure-menu-item">
                                                <router-link class="pure-menu-link" :to="{ path: `/${langCode}/` }">
                                                        {{ lang.headerNavI }}
                                                </router-link>
                                        </li>
                                        <li class="pure-menu-item">
                                                <router-link class="pure-menu-link" :to="{ path: `/${langCode}/entry/` }">
                                                        {{ lang.headerNavII }}
                                                </router-link>
                                        </li>
                                        <li class="pure-menu-item">
                                                <router-link class="pure-menu-link" :to="{ path: `/${langCode}/search/` }">
                                                        {{ lang.headerNavIII }}
                                                </router-link>
                                        </li>
                                        <li class="pure-menu-item">
                                                <router-link class="pure-menu-link" :to="{ path: `/${langCode}/share/` }">
                                                        {{ lang.headerNavIV }}
                                                </router-link>
                                        </li>
                                        <li class="pure-menu-item">
                                                <router-link class="pure-menu-link" :to="{ path: `/${langCode}/team/` }">
                                                        {{ lang.headerNavV }}
                                                </router-link>
                                        </li>
                                        <li class="pure-menu-item">
                                                <router-link class="pure-menu-link" :to="{ path: `/${langCode}/news/` }">
                                                        {{ lang.headerNavVI }}
                                                </router-link>
                                        </li>
                                        <li class="pure-menu-item">
                                                <router-link class="pure-menu-link" :to="{ path: `/${langCode}/knowledge/` }">
                                                        {{ lang.headerNavVII }}
                                                </router-link>
                                        </li>
                                </ul>
                                <div class="pure-menu select-languages select-languages-header">
                                        <ul class="pure-menu-list">
                                                <li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
                                                        <a class="pure-menu-link languages-selected">
                                                                {{ lang.footerLanguages }}
                                                                <span id="footer-languages-selected">{{ headerLanguages }}</span>
                                                        </a>
                                                        <ul class="pure-menu-children">
                                                                <li class="pure-menu-item" @click=" selectLanguage('cn') ">
                                                                        <a :class=" langCode === 'cn' ? 'pure-menu-link options-languages-selected' : 'pure-menu-link' ">
                                                                                简体中文
                                                                        </a>
                                                                </li>
                                                                <li class="pure-menu-item" @click=" selectLanguage('zh') ">
                                                                        <a :class=" langCode === 'zh' ? 'pure-menu-link options-languages-selected' : 'pure-menu-link' ">
                                                                                繁體中文
                                                                        </a>
                                                                </li>
                                                                <li class="pure-menu-item" @click=" selectLanguage('en') ">
                                                                        <a :class=" langCode === 'en' ? 'pure-menu-link options-languages-selected' : 'pure-menu-link' ">
                                                                                English
                                                                        </a>
                                                                </li>
                                                                <li class="pure-menu-item" @click=" selectLanguage('fr') " v-show=" false ">
                                                                        <a :class=" langCode === 'fr' ? 'pure-menu-link options-languages-selected' : 'pure-menu-link' ">
                                                                                France
                                                                        </a>
                                                                </li>
                                                                <li class="pure-menu-item" @click=" selectLanguage('es') " v-show=" false ">
                                                                        <a :class=" langCode === 'es' ? 'pure-menu-link options-languages-selected' : 'pure-menu-link' ">
                                                                                España
                                                                        </a>
                                                                </li>
                                                                <li class="pure-menu-item" @click=" selectLanguage('ru') " v-show=" false ">
                                                                        <a :class=" langCode === 'ru' ? 'pure-menu-link options-languages-selected' : 'pure-menu-link' ">
                                                                                Россия
                                                                        </a>
                                                                </li>
                                                        </ul>
                                                </li>
                                        </ul>
                                </div>
                        </div>
                </div>
        </header>
</template>

<script>
import { lang, langType } from "../locales";
import { redirect, uriPath, auth, api } from "../utils";
import setting from "../config/setting";

export default {
  data: function() {
    let authCache = auth();
    let code = langType();

    return {
      signin: authCache,
      uriPath: uriPath(),
      headerImg: "http://i2.cfimg.com/611341/c69b534d645c1d55.png",
      headerLanguages: setting.languagesName[langType()] || "简体中文",
      lang: lang(),
      langCode: code
    };
  },
  methods: {
    selectLanguage: function(code) {
      let parts = uriPath().split("/");

      if (parts.length >= 2) {
        parts[1] = code;
      }

      if (parts.length === 2) {
        parts.push("");
      }

      redirect(parts.join("/"));
    },
    emitSignout: function() {
      let code = langType();
      api("/service/signout", auth(), callback => {
        auth({});
        redirect(`/${code}/signin/`);
      });
    }
  }
};
</script>
