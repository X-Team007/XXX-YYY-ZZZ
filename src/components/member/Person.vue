<style lang="less" scoped>

</style>

<template>
        <div class="application">
                <HeaderPerson />
                <div class="viewport viewport-member">
                        <div class="wrapper pure-g">
                                <div class="pure-u-4-24 pure-menu">
                                        <ul class="pure-menu-list">
                                                <li class="pure-menu-item">
                                                        <router-link :to="{ path: `/${langCode}/member/info` }" class="pure-menu-link" exact>
                                                                <Icon name="info" />
                                                                {{ lang.memberNavI }}
                                                        </router-link>
                                                </li>
                                                <li class="pure-menu-item">
                                                        <router-link :to="{ path: `/${langCode}/member/privacy/` }" class="pure-menu-link" exact>
                                                                <Icon name="privacy" />
                                                                {{ lang.memberNavII }}
                                                        </router-link>
                                                </li>
                                                <li class="pure-menu-item">
                                                        <router-link :to="{ path: `/${langCode}/member/password/` }" class="pure-menu-link" exact>
                                                                <Icon name="password" />
                                                                {{ lang.memberNavIII }}
                                                        </router-link>
                                                </li>
                                                <li class="pure-menu-item">
                                                        <router-link :to="{ path: `/${langCode}/member/iseewho/` }" class="pure-menu-link" exact>
                                                                <Icon name="see" />
                                                                {{ lang.memberNavIV }}
                                                        </router-link>
                                                </li>
                                                <li class="pure-menu-item">
                                                        <router-link :to="{ path: `/${langCode}/member/wholookme/` }" class="pure-menu-link" exact>
                                                                <Icon name="look" />
                                                                {{ lang.memberNavV }}
                                                        </router-link>
                                                </li>
                                                <!-- 功能下线 -->
                                                <!-- <li class="pure-menu-item">
                                                        <router-link :to="{ path: `/${langCode}/member/like/` }" class="pure-menu-link" exact>
                                                                <Icon name="like" />
                                                                {{ lang.memberNavVI }}
                                                        </router-link>
                                                </li>
                                                <li class="pure-menu-item">
                                                        <router-link :to="{ path: `/${langCode}/member/follow/` }" class="pure-menu-link" exact>
                                                                <Icon name="follow" />
                                                                {{ lang.memberNavVII }}
                                                        </router-link>
                                                </li> -->
                                        </ul>
                                        <div class="qrcode">
                                                <img class="pure-img" src="http://i1.cfimg.com/611341/e4572eedd7d0c9d5.png" />
                                                <section>{{ lang.memberQRCode }}</section>
                                        </div>
                                </div>
                                <div class="pure-u-20-24">
                                        <router-view></router-view>
                                </div>
                        </div>
                </div>
                <Footer />
        </div>
</template>

<script>
import { lang, langType } from "../../locales";

export default {
  data: function() {
    return {
      lang: lang(),
      langCode: langType()
    };
  }
};
</script>
