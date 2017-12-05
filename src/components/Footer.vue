<style lang="less" scoped>
</style>

<template>
        <footer>
                <div class="wrapper">
                        <nav>
                                <a class="pure-menu-heading">
                                        <img class="pure-img" src="http://i4.cfimg.com/611341/628bb64f12c525bf.png" />
                                </a>
                                <div class="pure-menu pure-g footer-nav">
                                        <div class="pure-u-1-3">
                                                <ul class="pure-menu-list footer-nav-first">
                                                        <li class="pure-menu-item footer-menu-header">{{ lang.footerAddress }}</li>
                                                        <li class="pure-menu-item">
                                                                <router-link class="pure-menu-link" :to="{ path: '/' + langCode + '/' }">
                                                                        <Icon name="location" />&nbsp;&nbsp;{{ footerAddress }}
                                                                </router-link>
                                                        </li>
                                                        <li class="pure-menu-item">
                                                                <router-link class="pure-menu-link" :to="{ path: '/' + langCode + '/' }">
                                                                        <Icon name="connect" />&nbsp;&nbsp;{{ footerConnect }}
                                                                </router-link>
                                                        </li>
                                                        <li class="pure-menu-item">
                                                                <router-link class="pure-menu-link" :to="{ path: '/' + langCode + '/' }">
                                                                        <Icon name="kefu" />&nbsp;&nbsp;{{ footerKefu }}
                                                                </router-link>
                                                        </li>
                                                </ul>
                                        </div>
                                        <div class="pure-u-1-3">
                                                <ul class="pure-menu-list">
                                                        <li class="pure-menu-item footer-menu-header">{{ lang.footerProduct }}</li>
                                                        <li class="pure-menu-item">
                                                                <router-link class="pure-menu-link" :to="{ path: '/' + langCode + '/entry/' }">
                                                                        {{ lang.headerNavII }}
                                                                </router-link>
                                                        </li>
                                                        <li class="pure-menu-item">
                                                                <router-link class="pure-menu-link" :to="{ path: '/' + langCode + '/search/' }">
                                                                        {{ lang.headerNavIII }}
                                                                </router-link>
                                                        </li>
                                                        <li class="pure-menu-item">
                                                                <router-link class="pure-menu-link" :to="{ path: '/' + langCode + '/share/' }">
                                                                        {{ lang.headerNavIV }}
                                                                </router-link>
                                                        </li>
                                                        <li class="pure-menu-item">
                                                                <router-link class="pure-menu-link" :to="{ path: '/' + langCode + '/team/' }">
                                                                        {{ lang.headerNavV }}
                                                                </router-link>
                                                        </li>
                                                        <li class="pure-menu-item">
                                                                <router-link class="pure-menu-link" :to="{ path: '/' + langCode + '/news/' }">
                                                                        {{ lang.headerNavVI }}
                                                                </router-link>
                                                        </li>
                                                        <li class="pure-menu-item">
                                                                <router-link class="pure-menu-link" :to="{ path: '/' + langCode + '/knowledge/' }">
                                                                        {{ lang.headerNavVII }}
                                                                </router-link>
                                                        </li>
                                                </ul>
                                        </div>
                                        <div class="pure-u-1-3">
                                                <ul class="pure-menu-list">
                                                        <li class="pure-menu-item footer-menu-header">{{ lang.footerCompany }}</li>
                                                        <li class="pure-menu-item">
                                                                <router-link class="pure-menu-link" :to="{ path: '/' + langCode + '/about' }">
                                                                        {{ lang.footerAbout }}
                                                                </router-link>
                                                        </li>
                                                        <li class="pure-menu-item">
                                                                <router-link class="pure-menu-link" :to="{ path: '/' + langCode + '/privacy' }">
                                                                        {{ lang.footerPrivate }}
                                                                </router-link>
                                                        </li>
                                                        <li class="pure-menu-item">
                                                                <router-link class="pure-menu-link" :to="{ path: '/' + langCode + '/terms' }">
                                                                        {{ lang.footerTerms }}
                                                                </router-link>
                                                        </li>
                                                        <li class="pure-menu-item">
                                                                <router-link class="pure-menu-link" :to="{ path: '/' + langCode + '/help' }">
                                                                        {{ lang.footerHelp }}
                                                                </router-link>
                                                        </li>
                                                        <li class="pure-menu-item">
                                                                <router-link class="pure-menu-link" :to="{ path: './' }">
                                                                        {{ lang.footerSite }}
                                                                </router-link>
                                                        </li>
                                                </ul>
                                        </div>
                                </div>
                        </nav>
                        <section>
                                {{ footerCopyright }}&nbsp;&nbsp;&nbsp;&nbsp;
                                <span v-show=" langCode === 'cn' ">{{ footerICP }}</span>
                        </section>
                        <div class="wrapper flex-layout flex-layout-row">
                                <div class="pure-menu select-languages select-languages-footer">
                                        <ul class="pure-menu-list">
                                                <li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
                                                        <a class="pure-menu-link languages-selected">
                                                                {{ lang.footerLanguages }}
                                                                <span id="footer-languages-selected">{{ footerLanguages }}</span>
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
        </footer>
</template>

<script>
import { lang, langType } from "../locales"
import { redirect, uriPath } from "../utils"
import setting from "../config/setting"

export default {
        data: function () {
                let code = langType()
                let cache = setting.cache || {}
                let footerWebsite = cache.website[code] || cache.website["cn"]

                return {
                        footerCopyright: lang('footerCopyright').replace('DATE', new Date().getFullYear()),
                        footerICP: footerWebsite.icp,
                        footerAddress: footerWebsite.address,
                        footerConnect: footerWebsite.connect,
                        footerKefu: footerWebsite.kefu,
                        footerLanguages: setting.languagesName[langType()] || "简体中文",
                        lang: lang(),
                        langCode: code
                }
        },
        methods: {
                selectLanguage: function (code) {
                        let parts = uriPath().split('/')

                        if (parts.length >= 2) {
                                parts[1] = code
                        }

                        if (parts.length === 2) {
                                parts.push('')
                        }

                        redirect(parts.join("/"))
                }
        }
}
</script>