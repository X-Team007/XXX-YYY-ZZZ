<style lang="less" scoped>
@import "../../stylesheet/variables.less";

.viewport-entry {
        width: 100%;
        max-width: @theme-size-width-maximum;
        background-color: @theme-color-lightgray-lightes;
        padding: @theme-margin-size-default 0 @theme-margin-size-default * 2.00 0;

        .wrapper {
                height: 11.60rem;
        }

        h1 {
                color: @theme-font-color-default;
                font-size: @theme-font-size-mtitle-default;
                font-weight: @theme-font-weight-mtitle-default;
                line-height: @theme-font-lineheight-mtitle-default;
                padding-left: 1.60rem;
        }
        
        .panel {
                background-color: @theme-color-white-default;
                box-shadow: @theme-boxshadow-border-default;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 23.20rem;
                height: 10.00rem;
                margin: 0 auto;
                padding: @theme-margin-size-largerm;
        }

        .entry-left,
        .entry-right {
                color: @theme-font-color-lightes;
                font-size: @theme-font-size-header-default * 2.00;
                font-weight: @theme-font-weight-header-default;
                text-align: center;
                text-decoration: none;
                line-height: 10.00rem;
                height: 10.00rem;
                width: 11.60rem;
                background-position: center;
                background-repeat: no-repeat;
                background-size: 100% 100%;
        }

        .entry-left {
                background-image: url(http://i4.cfimg.com/611341/8de547f325f34422.jpg);
                margin-right: @theme-margin-size-smallen;
        }

        .entry-right {
                background-image: url(http://i4.cfimg.com/611341/9470e0f9cb9f0a29.jpg);
                margin-left: @theme-margin-size-smallen;
        }

        .bottom-links {
                color: @theme-font-color-lightes;
                text-align: center;
                text-decoration: none;
                display: block;
                padding: @theme-margin-size-default 0;
        }
}
</style>

<template>
        <div class="viewport-entry">
                <div class="wrapper">
                        <h1>{{ lang.entryHeader }}</h1>
                        <div class="panel">
                                <router-link :to="{ path: `/${langCode}/fulltime/first/` }" class="entry-left">
                                        {{ hasFulltime ? lang.entryFulltimeII : lang.entryFulltimeI }}
                                </router-link>
                                <router-link :to="{ path: `/${langCode}/parttime/first/` }" class="entry-right">
                                        {{ hasParttime ? lang.entryParttimeII : lang.entryParttimeI }}
                                </router-link>
                        </div>
                </div>
        </div>
</template>

<script>
import { lang, langType } from "../../locales"
import { redirect, auth, api } from "../../utils"

export default {
        data: function () {
                let code = langType()
                let authSignin = auth()

                return {
                        hasFulltime: false,
                        hasParttime: false,
                        authSignin: authSignin,
                        langCode: code,
                        lang: lang()
                }
        },
        created: function () {
                api('/entry/statusResume', { openID: auth().openID }, callback => {
                        let data = callback.data || {}
                        this.hasFulltime = data.hasFulltime || false
                        this.hasParttime = data.hasParttime || false
                })
        }
}
</script>