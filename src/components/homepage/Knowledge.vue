<style lang="less" scoped>
@import "../../stylesheet/variables.less";

.viewport-knowledge {
        width: 21rem;
        padding: 1.00rem 3.00rem;

        .topImage {
                padding-bottom: 0.40rem;
                width: 21rem;
        }

        .pure-u-1-5 {
                .pure-menu-heading {
                        padding: 0 1rem 0 0.30rem;

                        img {
                                width: 2.24rem;
                                margin-left: 0.00rem;
                        }

                        img:lang(zh-cmn-hans),
                        img:lang(zh-cmn-hant) {
                                margin-left: 0.30rem;
                        }
                }

                .pure-menu-item {
                        height: 1rem;

                        .pure-button {
                                display: block;
                                height: 0.9rem;
                                line-height: 0.5rem;
                                color: @theme-color-white-default;
                                font-size: 0.34rem;
                                font-weight: lighter;
                                text-align: left;
                                letter-spacing: 0.05em;
                                background: none;
                                margin-left: 0.00rem;
                                margin-right: 0.8rem;
                                padding-top: 0.2rem;
                                padding-bottom: 0.2rem;
                        }

                        .pure-button:lang(zh-cmn-hans),
                        .pure-button:lang(zh-cmn-hant) {
                                text-align: center;
                        }

                        .router-link-active {
                                color: @theme-color-white-default;
                                background-color: @theme-color-accent-default;
                                border-radius: 0.08rem;
                        }
                }
        }

        .news-list {
                .pure-img {
                        width: 4rem;
                        height: 2.8rem;
                        display: inline-block;
                }

                .pure-menu-item {
                        padding-top: 0.12rem;
                }

                .news-list-box {
                        display: block;
                        padding: 0.2rem 0.2rem 0.4rem 0.2rem;
                        text-decoration: none;
                        margin-top: 0.2rem;
                        box-shadow: 0 0.02rem 0 rgba(0, 0, 0, 0.1);

                        h1,
                        section,
                        code {
                                overflow: hidden;
                                text-overflow: ellipsis;
                                margin-left: 4.5rem;
                        }

                        h1 {
                                color: @theme-color-white-default;
                                font-size: 0.4rem;
                                font-weight: normal;
                                line-height: 0.6rem;
                                width: 10rem;
                                height: 0.6rem;
                                margin-top: -3rem;
                        }

                        section,
                        code {
                                display: block;
                        }

                        code {
                                color: @theme-color-accent-default;
                                font-size: 0.24rem;
                                letter-spacing: 0.2em;
                                margin-top: -0.16rem;
                        }

                        section {
                                color: @theme-color-accent-default;
                                font-size: 0.3rem;
                                line-height: 0.56rem;
                                height: 1.68rem;
                                margin-top: 0.16rem;
                        }
                }
        }
}
</style>

<template>
        <div class="pure-g wrapper viewport-knowledge">
                <img src="http://i4.cfimg.com/611341/fb6af910aa7d6634.png" class="topImage" />
                <div class="pure-u-1-5 pure-menu">
                        <span class="pure-menu-heading">
                                <img src="http://i4.cfimg.com/611341/7edc1980976cc0df.png" />
                        </span>
                        <ul class="pure-menu-list">
                                <li class="pure-menu-item">
                                        <router-link :to="{ path: '/' + langCode + '/knowledge/' }" class="pure-button" exact
                                                v-on:click.native=" selectTab() ">
                                                {{ lang.knowledgeAll }}
                                        </router-link>
                                </li>
                                <li v-for=" item of knowledge " v-bind:key=" item " class="pure-menu-item">
                                        <router-link :to="{ path: '/' + langCode + '/knowledge/' + item.id.replace('knowledge#', '') + '/' }"
                                                class="pure-button" exact v-on:click.native=" selectTab(item.id) ">
                                                {{ item.name[langCode] || item.name['cn'] }}
                                        </router-link>
                                </li>
                        </ul>
                </div>
                <div class="pure-u-4-5 pure-menu news-list">
                        <ul class="pure-menu-list">
                                <li v-for=" item of data.items " v-bind:key=" item " class="pure-menu-item">
                                        <router-link :to="{ path: '/' + langCode + '/a/' + item.articleID }" class="news-list-box">
                                                <img class="pure-img" v-bind:src=" item.thumb " />
                                                <h1>{{ item.title }}</h1>
                                                <code>{{ item.publish }}</code>
                                                <section>{{ item.description }}</section>
                                        </router-link>
                                </li>
                        </ul>
                        <el-pagination :total=" data.total " :page-size=" data.limit " :current-page=" data.begin " 
                                layout="prev, pager, next" class="text-align-center" @current-change=" selectPage ">
                        </el-pagination>
                </div>
        </div>
</template>


<script>
import { Pagination } from 'element-ui'
import { lang, langType } from "../../locales"
import { uriPath, api } from '../../utils'
import setting from '../../config/setting'

export default {
        data: function () {
                let code = langType()
                let cache = setting.cache || {}
                console.log(cache.knowledge)
                return {
                        data: {
                                total: 0,
                                pages: 0,
                                limit: 10,
                                items: []
                        },
                        knowledge: cache.knowledge || [],
                        lang: lang(),
                        langCode: code
                }
        },
        mounted: function () {
                let parts = uriPath().split('/')
                this.selectTab(parts[3] ? 'knowledge#' + parts[3] : null, parts[1], 1)
        },
        methods: {
                selectTab(articleType, code, begin) {
                        api('/article/listKnowledge', {
                                articleType: articleType,
                                articleLang: code || langType(),
                                begin: begin || 1,
                                limit: 10
                        }, callback => {
                                if (callback.code === 200) {
                                        this.data = callback.data
                                }
                        })
                },
                selectPage(num) {
                        let parts = uriPath().split('/')
                        this.selectTab(parts[3] ? 'knowledge#' + parts[3] : null, parts[1], num)
                }
        },
        components: {
                'el-pagination': Pagination
        }
}
</script>