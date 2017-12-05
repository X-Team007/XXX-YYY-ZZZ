<style lang="less" scoped>
</style>

<template>
        <header class="header-content-member">
                <div class="pure-menu pure-menu-horizontal tbar">
                        <div class="wrapper flex-layout flex-layout-row">
                                <router-link class="pure-menu-heading left" :to="{ path: `/${langCode}/` }">
                                        {{ lang.headerWelcome }}
                                </router-link>
                                <div class="btn-group">
                                        <router-link class="header-text" :to="{ path: `/${langCode}/member/` }">
                                                {{ lang.headerHello }}
                                                {{ signin.realname || signin.username || signin.mobile }}
                                        </router-link>
                                        <span class="delimiter">|</span>
                                        <span class="header-text "v-on:click=" emitSignout() ">{{ lang.headerSignout }}</span>
                                        <span class="delimiter">|</span>
                                        <router-link class="header-text" :to="{ path: `/${langCode}/` }">
                                                {{ lang.headerHome }}
                                        </router-link>
                                </div>
                        </div>
                </div>
                <div class="clear"></div>
                <div class="pure-menu pure-menu-horizontal tnav">
                        <div class="wrapper flex-layout flex-layout-row">
                                <router-link class="pure-menu-heading" :to="{ path: `/${langCode}/` }" exact>
                                        <img class="pure-img" src="http://i1.cfimg.com/611341/4985cc3fbbe24ef1.png" />
                                </router-link>
                                <div class="btngroup">
                                        <ul class="pure-menu-list">
                                                <li class="pure-menu-item">
                                                        <router-link class="pure-menu-link" :to="{ path: `/${langCode}/member/` }" exact>
                                                                {{ lang.headerNavVIII }}
                                                        </router-link>
                                                </li>
                                                <li class="pure-menu-item">
                                                        <router-link class="pure-menu-link" :to="{ path: `/${langCode}/member/resume/` }" exact>
                                                                {{ lang.headerNavIIX }}
                                                        </router-link>
                                                </li>
                                                <li class="pure-menu-item">
                                                        <router-link class="pure-menu-link" :to="{ path: `/${langCode}/member/account/` }" exact>
                                                                {{ lang.headerNavIX }}
                                                        </router-link>
                                                </li>
                                                <li class="pure-menu-item">
                                                        <router-link class="pure-menu-link" :to="{ path: `/${langCode}/member/finance/` }" exact>
                                                                {{ lang.headerNavX }}
                                                        </router-link>
                                                </li>
                                        </ul>
                                </div>
                        </div>
                </div>
        </header>
</template>

<script>
import { lang, langType } from "../locales"
import { redirect, uriPath, auth, api } from "../utils"
import setting from "../config/setting"

export default {
        data: function () {
                return {
                        signin: auth(),
                        lang: lang(),
                        uriPath: uriPath(),
                        langCode: langType()
                }
        },
        methods: {
                emitSignout: function () {
                        let code = langType()
                        api('/service/signout', auth(), callback => {
                                auth({})
                                redirect(`/${code}/signin/`)
                        })
                }
        }
}
</script>