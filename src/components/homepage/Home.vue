<style lang="less" scoped>
@import "../../stylesheet/variables.less";

.viewport-home {
        .el-carousel__container {
                .el-carousel__item img {
                        width: 100%;
                        max-width: @theme-size-width-maximum;
                        height: 15.90rem;
                        line-height: 15.90rem;
                        opacity: 0.875;
                        margin: 0 auto;
                }
        }

        .wrapper {
                padding: 1.28rem 0 1.00rem 0;
        }

        .home-title {
                min-width: @theme-size-width-default;

                h1 {
                        font-size: 0.60rem;
                        font-weight: lighter;
                        //color: @theme-color-darkgray-darkenH;
                        text-align: center;
                        margin: 0
                }

                hr {
                        width: 1rem;
                        border-style: sold;
                        border-color: @theme-color-accent-default;
                        margin: 0.32rem auto 0.40rem auto;
                }

                h5 {
                        font-size: 0.24rem;
                        font-weight: lighter;
                        color: @theme-color-darkgray-default;
                        text-align: center;
                        letter-spacing: 0.10em;
                        margin: 0;
                        padding-bottom: 0.96rem;
                }
        }

        .container-flex {
                display: flex;
                min-width: @theme-size-width-default;
        
                a {
                        display: inline-block;
                        text-decoration: none;

                        h1 {
                                font-size: 0.40rem;
                                font-weight: lighter;
                        }

                        h5 {
                                font-size: 0.28rem;
                                font-weight: lighter;
                        }
                }
        }

        .bigshot {
                .bigshot-flex {
                        a {
                                width: 5.00rem;
                                text-align: center;
                                margin: 0 0.04rem;

                                img {
                                        width: 5.00rem;
                                        height: 6.25rem;
                                        border: 0;
                                        //border-top: 0.02rem @theme-color-darkgray-lightenH solid;
                                }

                                h1 {
                                        //color: @theme-color-darkgray-darkenH;
                                }

                                h5 {
                                        //color: @theme-color-darkgray-darkenL;
                                        margin-top: 0;
                                }
                        }

                        .row {
                                width: 0.80rem;
                                text-align: center;

                                .icon {
                                        width: 0.64rem;
                                        height: 0.64rem;
                                        //fill: @theme-color-darkgray-lightenM;
                                        margin-top: 2.80rem;
                                        cursor: pointer;
                                }
                        }
                }
        }

        .talent {
                background: #3b87b3 url(http://i4.cfimg.com/611341/b1007d5a3e94af3b.jpg) bottom center no-repeat;
                background-size: @theme-size-width-maximum;
                padding-bottom: 1rem;
                min-width: @theme-size-width-default;
                max-width: @theme-size-width-maximum;
                margin: 0 auto;

                .home-title {
                        padding-bottom: 0;

                        h1, h5 {
                                color: @theme-color-white-default;
                        }

                        hr {
                                border: 0.02rem @theme-color-white-default solid;
                        }
                }

                .pure-button {
                        color: @theme-color-white-default;
                        font-size: 0.26rem;
                        line-height: 0.50rem;
                        height: 0.80rem;
                        width: 3.60rem;
                        border: 0.02rem @theme-color-white-default solid;
                        border-radius: 0.08rem;
                        display: block;
                        background: transparent;
                        margin: 0 auto;
                }

                .talent-flex {
                        flex-wrap: wrap;
                        width: @theme-size-width-default - 1.50rem * 2;
                        padding: 0.50rem 1.50rem 1.50rem 1.50rem;

                        a {
                                width: 5.60rem - 0.80rem;
                                height: 1.60rem;
                                padding-left: 0.80rem;
                                margin: 0.40rem 0.20rem;

                                img {
                                        width: 1.50rem;
                                        height: 1.50rem;
                                        border-radius: 0.75rem;
                                        margin-right: 0.12rem;
                                        float: left;
                                }

                                h1, h5 {
                                        color: @theme-color-white-default;
                                        font-weight: lighter;
                                        margin: 0.10rem 0;
                                }

                                h1 {
                                        font-size: 0.30rem;
                                }

                                h5 {
                                        font-size: 0.24rem;
                                }
                        }
                }
        }

        .entrant {
                padding-bottom: 0;

                .entrant-flex {
                        flex-wrap: wrap;
                        min-width: @theme-size-width-default - 1.50rem * 2;
                        padding: 0 1.00rem;

                        a {
                                width: 6.40rem;
                                height: 2.80rem;
                                //border: 0.02rem @theme-color-darkgray-lightenM solid;
                                border-radius: 0.10rem;
                                margin: 1.12rem 0.20rem 0.20rem 1.40rem;

                                img {
                                        position: absolute;
                                        width: 1.20rem;
                                        height: 1.20rem;
                                        border-radius: 0.60rem;
                                        margin: -0.60rem 0 0 5.10rem;
                                }

                                h1, h5 {
                                        margin: 0.24rem;
                                        font-weight: lighter;
                                }

                                h1 {
                                        //color: @theme-color-darkgray-darkenM;
                                        font-size: 0.30rem;
                                }

                                h5, small {
                                        //color: @theme-color-darkgray-default;
                                        font-size: 0.24rem;
                                        line-height: 1.75em;
                                        letter-spacing: 0.10em;
                                }
                        }
                }
        }

        .friend-links {
                padding-bottom: 1.28rem;

                .friend-links-flex {
                        flex-wrap: wrap;
                        width: @theme-size-width-default - 3rem;
                        padding-left: 1.5rem;
                        padding-right: 1.5rem;

                        .links {
                                display: inline-block;
                                width: 4.6rem;
                                height: 2.4rem;
                                margin: 0.06rem 0.08rem;
                                //border: 0.02rem @theme-color-darkgray-lightenH solid;
                                border-bottom: 0;
                                background-image: url(http://i4.cfimg.com/611341/aaab3db266c10772.png);
                        }

                        .links-01 {
                                background-position-x: 0;
                        }

                        .links-02 {
                                background-position-x: -4.60rem - 0.04rem * 1;
                        }

                        .links-03 {
                                background-position-x: -9.20rem - 0.04rem * 2;
                        }

                        .links-04 {
                                background-position-x: -13.8rem - 0.04rem * 3;
                        }

                        .links-05 {
                                background-position-x: -18.4rem - 0.04rem * 4;
                        }
                }
        }

        .search {
                padding: 0.40rem 0;
                text-align: center;

                .component-regions {
                        margin-left: 0.24rem;
                }

                .searchbox {
                        display: inline-block;
                        color: @theme-color-darkgray-default;
                        font-size: 0.28rem;
                        font-weight: lighter;
                        line-height: 0.40rem;
                        margin: -0.10rem 0 0 0.10rem;
                        vertical-align: 0.05rem;

                        select, input, button {
                                padding-top: 0.20rem;
                                padding-bottom: 0.20rem;
                                height: @theme-size-height-default;
                                vertical-align: middle;
                        }

                        select {
                                border-top-right-radius: 0;
                                border-bottom-right-radius: 0;
                        }

                        input {
                                margin-left: -0.08rem;
                                width: 9.50rem;
                                border-radius: 0;
                        }

                        button {
                                background-color: @theme-color-accent-default;
                                border: 0.02rem @theme-color-accent-default solid;
                                border-top-left-radius: 0;
                                border-bottom-left-radius: 0;
                                margin-left: -0.08rem;
                                padding-left: 0.56rem;
                                padding-right: 0.56rem;
                                letter-spacing: 0.10em;
                        }
                }
        }
        
}
.browser-agent-opera.browser-windows .viewport-home {
        .search input {
                margin-top: @theme-size-border-default !important;
        }
}
</style>

<template>
        <div class="viewport-home">
                <div class="wrapper search">
                        <Regions />
                        <form class="pure-form searchbox">
                                <fieldset>
                                        <select>
                                                <option value="1"> {{ lang.headerNavIV }} </option>
                                                <option value="2"> {{ lang.headerNavIII }} </option>
                                                <option value="3"> {{ lang.headerNavVI }} </option>
                                                <option value="4"> {{ lang.headerNavVII }} </option>
                                        </select>
                                        <input v-bind:placeholder=" lang.homePlaceholder " />
                                        <button type="button" class="pure-button pure-button-primary"> 
                                                {{ lang.homeSearchBtn }}
                                        </button>
                                </fieldset>
                        </form>
                </div>
                <el-carousel :interval="3000" arrow="always" v-bind:height="bannersHeight"
                        style="max-width: 51.2rem; min-width: 27rem; margin: 0 auto;">
                        <el-carousel-item v-for="item in banners" :key="item">
                                <router-link :to="{ path: '/' + langCode + '/' + (item.href || '').replace(/^\//, '') }">
                                        <img v-bind:src=" item.img[langCode] || item.img.cn " v-bind:style="{height: bannersHeight}" />
                                </router-link>
                        </el-carousel-item>
                </el-carousel>
                <div class="wrapper bigshot">
                        <div class="home-title">
                                <h1> {{ lang.homeBigshot }} </h1>
                                <hr />
                                <h5> {{ lang.homeSub }} </h5>
                        </div>
                        <div class="container-flex bigshot-flex">
                                <div class="row row-left">
                                        <Icon name="rowLeft" size="small" />
                                </div>
                                <router-link v-for=" item of bigshot " v-bind:key=" item.id "
                                        :to="{ path: '/' + langCode + '/resume/id/' + item.id }">
                                        <img v-bind:src=" item.img || ( item.sex === 1 ? manIMG : womenIMG ) " />
                                        <h1> {{ item.realname }} </h1>
                                        <h5> {{ item.offset }} </h5>
                                </router-link>
                                <div class="row row-right">
                                        <Icon name="rowRight" />
                                </div>
                                
                        </div>
                </div>
                <div class="talent">
                        <div class="wrapper home-title">
                                <h1> {{ lang.homeTalent }} </h1>
                                <hr />
                                <h5> {{ lang.homeSub }} </h5>
                        </div>
                        <div class="wrapper container-flex talent-flex">
                                <router-link v-for=" item of talent " v-bind:key=" item.id "
                                        :to="{ path: '/' + langCode + '/resume/id/' + item.id }">
                                        <img v-bind:src=" item.img || ( item.sex === 1 ? manIMG : womenIMG ) " />
                                        <h1> {{ item.realname }} </h1>
                                        <h5> {{ item.offset }} </h5>
                                        <h5> {{ item.company }} </h5>
                                </router-link>
                        </div>
                        <router-link :to="{ path: '/' + langCode + '/resume' }" class="pure-button">
                                {{ lang.homeMore }}
                        </router-link>
                </div>
                <div class="wrapper entrant">
                        <div class="home-title">
                                <h1> {{ lang.homeEntry }} </h1>
                                <hr />
                                <h5> {{ lang.homeSub }} </h5>
                        </div>
                        <div class="wrapper container-flex entrant-flex">
                                <router-link v-for=" item of entrant " v-bind:key=" item.id "
                                        :to="{ path: '/' + langCode + '/resume/id/' + item.id }">
                                        <img v-bind:src=" item.img || ( item.sex === 1 ? manIMG : womenIMG ) " />
                                        <h1> {{ item.realname }} 
                                                <small> {{ item.company }} </small>
                                        </h1>
                                        <h5> {{ item.introduce }} </h5>
                                </router-link>
                        </div>
                </div>
                <div class="wrapper friend-links">
                        <div class="home-title">
                                <h1> {{ lang.homeEnterprises }} </h1>
                                <hr />
                                <h5> {{ lang.homeSub }} </h5>
                        </div>
                        <div class="container-flex friend-links-flex">
                                <a v-for=" link of links " v-bind:key=" link.id " v-bind:href=" link.href " v-bind:class=" 'links ' + link.cls "
                                        v-show=" link.show && ( link.lang === '*' || (link.lang || '').indexOf(langCode) !== -1 ) ">
                                </a>
                        </div>
                </div>
        </div>
</template>

<script>
import { Carousel, CarouselItem } from 'element-ui'
import { lang, langType } from "../../locales"
import setting from '../../config/setting'

export default {
        data: function () {
                let code = langType()
                let cache = setting.cache || {}

                let bannersHeight = '15.9rem'
                let clientWidth = document.body.clientWidth
                if (clientWidth <= 1366) {
                        bannersHeight = '8.4rem'
                } else if (clientWidth <= 1440) {
                        bannersHeight = '8.9rem'
                } else if (clientWidth <= 1680) {
                        bannersHeight = '10.4rem'
                } else if (clientWidth <= 1920) {
                        bannersHeight = '11.9rem'
                } else if (clientWidth <= 2048) {
                        bannersHeight = '12.7rem'
                }

                return {
                        banners: cache.banners || [],
                        bannersHeight: bannersHeight,
                        links: cache.links || [],
                        bigshot: cache.bigshot || [],
                        talent: cache.talent || [],
                        entrant: cache.entrant || [],
                        manIMG: 'http://i1.cfimg.com/611341/3335e2859e17fc80.png',
                        womenIMG: 'http://i1.cfimg.com/611341/85f59418fae81f11.png',
                        lang: lang(),
                        langCode: code
                }
        },
        components: {
                'el-carousel': Carousel,
                'el-carousel-item': CarouselItem
        }
}
</script>