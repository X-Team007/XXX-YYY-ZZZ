<style lang="less" scoped>
@import "../../stylesheet/variables.less";

.viewport-article {
        width: 24rem;
        padding: 1rem 0;

        h1 {
                color: #000000;
                font-size: 0.68rem;
                font-weight: lighter;
                text-align: center;
                padding-left: 1em;
                padding-right: 1em;
                margin: 0;
        }

        section, a, em, span {
                color: #000000;
                font-size: 0.30rem;
                text-align: center;
        }

        section {
                padding-top: 0.40rem;
                padding-bottom: 0.30rem;
                letter-spacing: 0.10em;
                box-shadow: 0 0.02rem 0 rgba(0, 0, 0, 0.10);
        }

        .icon {
                width: 0.32rem;
                height: 0.32rem;
                fill: @theme-color-accent-default;
                margin-right: 0.05rem;
        }

        a {
                color: @theme-color-accent-default;
                font-size: 0.32rem;
                font-weight: bolder;
                text-decoration: none;
        }

        em {
                color: #333333;
                font-style: normal;
                margin-left: 0.20rem;
                margin-right: 0.20rem;
        }
}
</style>

<template>
        <div class="wrapper viewport-article">
                <h1>{{ data.title }}</h1>
                <section>
                        <Icon name="writer" />
                        <a v-bind:href=" data.linkURL " target="_blank">{{ data.authors || '京典一线' }}</a>
                        <em>{{ data.publish }}</em>
                        <Icon name="reader" />
                        <span>{{ data.hitNumber }}</span>
                </section>
                <article v-html=" data.content ">{{ data.content }}</article>
        </div>
</template>

<script>
import { uriPath, api } from '../../utils'
import { lang, langType } from "../../locales"

export default {
        data: function () {
                let code = langType()

                return {
                        data: {
                                articleID: '',
                                title: '',
                                subtitle: '',
                                authors: '',
                                linkURL: '',
                                content: '',
                                hitNumber: 0,
                                publish: ''
                        },
                        lang: lang(),
                        langCode: code
                }
        },
        created: function () {
                let parts = uriPath().split('/')

                api('/article/detailArticle', {
                        articleID: parts[3],
                        articleLang: parts[1]
                }, callback => {
                        if (callback.code === 200) {
                                let data = callback.data
                                let time = data.publish.split('-')

                                if (parts[1] === 'cn' || parts[1] === 'zh') {
                                        data.publish = time[0] + '年' + time[1] + '月' + time[2] + '日'
                                }

                                this.data = data
                        }
                })
        }
}
</script>