<style lang="less" scoped>
@import "../stylesheet/variables.less";

.component-regions {
        display: inline-block;

        .regions-position {
                color: @theme-font-color-default;
                font-size: 0.00;

                .icon {
                        width: @theme-size-unit-default * 2.00;
                        height: @theme-size-unit-default * 2.00;
                        fill: @theme-color-accent-default;
                        vertical-align: -0.15rem;
                }

                em {
                        color: @theme-color-accent-default;
                        font-size: @theme-font-size-mtitle-default;
                        font-weight: @theme-font-weight-mtitle-default;
                        line-height: @theme-font-lineheight-mtitle-default;
                        font-style: normal;
                }

                span {
                        font-size: @theme-font-size-common-default;
                        font-weight: @theme-font-weight-common-default;
                        line-height: @theme-font-lineheight-common-default;
                        letter-spacing: @theme-font-spacing-default;
                        padding-left: 0.50em;
                        padding-right: 0.75em;
                        cursor: pointer;

                        &:last-child {
                                padding: 0.00;
                        }
                }
        }

        .pure-form {
                color: @theme-font-color-default;
                font-size: @theme-font-size-common-default;
                font-weight: @theme-font-weight-common-default;
                line-height: @theme-font-lineheight-common-default;

                .title {
                        text-align: left;
                        padding-bottom: @theme-margin-size-smaller;
                }

                select {
                        width: 1.60rem;
                        padding-top: 0.10rem;
                        padding-bottom: 0.10rem;
                }

                span {
                        cursor: pointer;
                }

                input {
                        vertical-align: middle;
                }

                button {
                        height: @theme-size-unit-default * 2.00 + @theme-size-border-default * 2.00;
                        padding-top: 0;
                        padding-bottom: 0;
                        vertical-align: middle;
                }
        }
}
</style>

<template>
        <div class="component-regions">
                <div class="regions-position" v-show=" showSelect === false ">
                        <Icon name="location" /> 
                        <span>{{ lang.regionsPosition }}:</span>
                        <em>{{ regions }}</em>
                        <span v-on:click=" showSelectList() ">【{{ lang.regionsChange }}】</span>
                </div>
                <form class="pure-form" v-show=" showSelect === true ">
                        <div class="title">
                                {{ lang.regionsSelect }}
                                <span v-on:click=" hiddenSelectList() ">【{{ lang.regionsGoback }}】</span>
                        </div>
                        <select id="selectCountry" v-on:change=" changeCountry() " v-model=" selectedCountry ">
                                <option value=""> {{ lang.regionsPlease }} </option>
                                <option v-for=" item of country " v-bind:key=" item " v-bind:value=" item ">
                                        {{ item }}
                                </option>
                        </select>
                        <select id="selectProvince" v-on:change=" changeProvince() " v-model=" selectedProvince ">
                                <option value=""> {{ lang.regionsPlease }} </option>
                                <option v-for=" item of province " v-bind:key=" item " v-bind:value=" item ">
                                        {{ item }}
                                </option>
                        </select>
                        <select id="selectCity" v-on:change=" changeCity() " v-model=" selectedCity ">
                                <option value=""> {{ lang.regionsPlease }} </option>
                                <option v-for=" item of city " v-bind:key=" item " v-bind:value=" item ">
                                        {{ item }}
                                </option>
                        </select>
                        <select id="selectTown" v-model=" selectedTown ">
                                <option value=""> {{ lang.regionsPlease }} </option>
                                <option v-for=" item of town " v-bind:key=" item " v-bind:value=" item ">
                                        {{ item }}
                                </option>
                        </select>
                        <button type="button" class="pure-button pure-button-primary" v-on:click=" sumbitLocation() ">
                                {{ lang.regionsSubmit }}
                        </button>
                </form>
        </div>
</template>

<script>
import { lang, langType } from "../locales"
import { api, cookie, uriPath, redirect } from '../utils'
import setting from '../config/setting'

export default {
        data: function () {
                let code = langType()
                let cache = setting.cache || {}

                let regions = cache.regions || ''
                if (regions.indexOf('-') !== -1) {
                        let buffers = cache.regions.split('-')
                        regions = buffers[2]

                        if (buffers.length === 4) {
                                regions = `${regions}/${buffers[3]}`
                        }
                }

                return {
                        regions: regions,
                        country: cache.countries,
                        province: [],
                        city: [],
                        town: [],
                        selectedCountry: '',
                        selectedProvince: '',
                        selectedCity: '',
                        selectedTown: '',
                        showSelect: false,
                        lang: lang(),
                        langCode: code
                }
        },
        methods: {
                showSelectList: function () {
                        this.showSelect = true
                },
                hiddenSelectList: function () {
                        this.showSelect = false
                },
                changeCountry: function () {
                        if (this.selectedCountry) {
                                api('/service/region', {
                                        regions: this.selectedCountry
                                }, callback => {
                                        if (callback.code === 200) {
                                                this.province = callback.data
                                                this.selectedProvince = ''
                                                this.selectedCity = ''
                                                this.selectedTown = ''
                                        }
                                })
                        }
                },
                changeProvince: function () {
                        if (this.selectedCountry && this.selectedProvince) {
                                api('/service/region', {
                                        regions: this.selectedCountry + '-' + this.selectedProvince
                                }, callback => {
                                        if (callback.code === 200) {
                                                this.city = callback.data
                                                this.selectedCity = ''
                                                this.selectedTown = ''
                                        }
                                })
                        }
                },
                changeCity: function () {
                        if (this.selectedCountry && this.selectedProvince && this.selectedCity) {
                                api('/service/region', {
                                        regions: this.selectedCountry + '-' + this.selectedProvince + '-' + this.selectedCity
                                }, callback => {
                                        if (callback.code === 200) {
                                                this.town = callback.data
                                                this.selectedTown = ''
                                        }
                                })
                        }
                },
                sumbitLocation: function () {
                        if (this.selectedCountry && this.selectedProvince && this.selectedCity && this.selectedTown) {
                                cookie.write('jdyxCountry', [
                                        this.selectedCountry,
                                        this.selectedProvince,
                                        this.selectedCity,
                                        this.selectedTown
                                ].join('-'))
                                redirect(uriPath())
                        }
                }
        }
}
</script>