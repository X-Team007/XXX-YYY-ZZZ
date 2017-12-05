<style lang="less" scoped>
@import "../stylesheet/variables.less";

.viewport-colors {
        section {
                display: block;
                height: 3.50rem;
                font-size: 0;
                text-align: center;
        }

        code {
                display: inline-block;
                font-size: @theme-font-size-common-default;
                line-height: 3.50rem;
                height: 3.50rem;
                width: 3.50rem;
                text-align: center;
                vertical-align: top;
        }


        .theme-color-accent code {
                color: @theme-font-color-lightes;

                &:first-child::before {
                        content: 'VK';
                }
        }

        .theme-color-accent-default {
                background-color: @theme-color-accent-default;
        }

        .theme-color-accent-lighten {
                background-color: @theme-color-accent-lighten;
        }

        .theme-color-accent-lighter {
                background-color: @theme-color-accent-lighter;
        }

        .theme-color-accent-lightes {
                background-color: @theme-color-accent-lightes;
        }

        .theme-color-accent-darkenl {
                background-color: @theme-color-accent-darkenl;
        }

        .theme-color-accent-darkerm {
                background-color: @theme-color-accent-darkerm;
        }

        .theme-color-accent-darkest {
                background-color: @theme-color-accent-darkest;
        }


        .theme-color-darkgray code {
                color: @theme-font-color-lightes;

                &:first-child::before {
                        content: 'ChromeHigt';
                }
        }

        .theme-color-darkgray-default {
                background-color: @theme-color-darkgray-default;
        }

        .theme-color-darkgray-lighten {
                background-color: @theme-color-darkgray-lighten;
        }

        .theme-color-darkgray-lighter {
                background-color: @theme-color-darkgray-lighter;
        }

        .theme-color-darkgray-lightes {
                background-color: @theme-color-darkgray-lightes;
        }

        .theme-color-darkgray-darkenl {
                background-color: @theme-color-darkgray-darkenl;
        }

        .theme-color-darkgray-darkerm {
                background-color: @theme-color-darkgray-darkerm;
        }

        .theme-color-darkgray-darkest {
                background-color: @theme-color-darkgray-darkest;
        }


        .theme-color-lightgray code {
                color: @theme-font-color-default;

                &:first-child::before {
                        content: 'ChromeMedium';
                }
        }

        .theme-color-lightgray-default {
                background-color: @theme-color-lightgray-default;
        }

        .theme-color-lightgray-lighten {
                background-color: @theme-color-lightgray-lighten;
        }

        .theme-color-lightgray-lighter {
                background-color: @theme-color-lightgray-lighter;
        }

        .theme-color-lightgray-lightes {
                background-color: @theme-color-lightgray-lightes;
        }

        .theme-color-lightgray-darkenl {
                background-color: @theme-color-lightgray-darkenl;
        }

        .theme-color-lightgray-darkerm {
                background-color: @theme-color-lightgray-darkerm;
        }

        .theme-color-lightgray-darkest {
                background-color: @theme-color-lightgray-darkest;
        }

        .theme-color-yellow code {
                color: @theme-font-color-lightes;

                &:first-child::before {
                        content: 'Sunflower';
                }
        }

        .theme-color-yellow-default {
                background-color: @theme-color-yellow-default;
        }

        .theme-color-yellow-lighten {
                background-color: @theme-color-yellow-lighten;
        }

        .theme-color-yellow-lighter {
                background-color: @theme-color-yellow-lighter;
        }

        .theme-color-yellow-lightes {
                background-color: @theme-color-yellow-lightes;
        }

        .theme-color-yellow-darkenl {
                background-color: @theme-color-yellow-darkenl;
        }

        .theme-color-yellow-darkerm {
                background-color: @theme-color-yellow-darkerm;
        }

        .theme-color-yellow-darkest {
                background-color: @theme-color-yellow-darkest;
        }

        .theme-color-orange code {
                color: @theme-font-color-lightes;

                &:first-child::before {
                        content: 'Carrot';
                }
        }

        .theme-color-orange-default {
                background-color: @theme-color-orange-default;
        }

        .theme-color-orange-lighten {
                background-color: @theme-color-orange-lighten;
        }

        .theme-color-orange-lighter {
                background-color: @theme-color-orange-lighter;
        }

        .theme-color-orange-lightes {
                background-color: @theme-color-orange-lightes;
        }

        .theme-color-orange-darkenl {
                background-color: @theme-color-orange-darkenl;
        }

        .theme-color-orange-darkerm {
                background-color: @theme-color-orange-darkerm;
        }

        .theme-color-orange-darkest {
                background-color: @theme-color-orange-darkest;
        }

        .theme-color-red code {
                color: @theme-font-color-lightes;

                &:first-child::before {
                        content: 'GooglePlus';
                }
        }

        .theme-color-red-default {
                background-color: @theme-color-red-default;
        }

        .theme-color-red-lighten {
                background-color: @theme-color-red-lighten;
        }

        .theme-color-red-lighter {
                background-color: @theme-color-red-lighter;
        }

        .theme-color-red-lightes {
                background-color: @theme-color-red-lightes;
        }

        .theme-color-red-darkenl {
                background-color: @theme-color-red-darkenl;
        }

        .theme-color-red-darkerm {
                background-color: @theme-color-red-darkerm;
        }

        .theme-color-red-darkest {
                background-color: @theme-color-red-darkest;
        }
}
</style>

<template>
        <div class="viewport-colors">
                <section class="theme-color-accent">
                        <code class="theme-color-accent-default"></code>
                        <code class="theme-color-accent-lightes"></code>
                        <code class="theme-color-accent-lighter"></code>
                        <code class="theme-color-accent-lighten"></code>
                        <code class="theme-color-accent-default"></code>
                        <code class="theme-color-accent-darkenl"></code>
                        <code class="theme-color-accent-darkerm"></code>
                        <code class="theme-color-accent-darkest"></code>
                </section>

                <section class="theme-color-darkgray">
                        <code class="theme-color-darkgray-default"></code>
                        <code class="theme-color-darkgray-lightes"></code>
                        <code class="theme-color-darkgray-lighter"></code>
                        <code class="theme-color-darkgray-lighten"></code>
                        <code class="theme-color-darkgray-default"></code>
                        <code class="theme-color-darkgray-darkenl"></code>
                        <code class="theme-color-darkgray-darkerm"></code>
                        <code class="theme-color-darkgray-darkest"></code>
                </section>

                <section class="theme-color-lightgray">
                        <code class="theme-color-lightgray-default"></code>
                        <code class="theme-color-lightgray-lightes"></code>
                        <code class="theme-color-lightgray-lighter"></code>
                        <code class="theme-color-lightgray-lighten"></code>
                        <code class="theme-color-lightgray-default"></code>
                        <code class="theme-color-lightgray-darkenl"></code>
                        <code class="theme-color-lightgray-darkerm"></code>
                        <code class="theme-color-lightgray-darkest"></code>
                </section>

                <section class="theme-color-yellow">
                        <code class="theme-color-yellow-default"></code>
                        <code class="theme-color-yellow-lightes"></code>
                        <code class="theme-color-yellow-lighter"></code>
                        <code class="theme-color-yellow-lighten"></code>
                        <code class="theme-color-yellow-default"></code>
                        <code class="theme-color-yellow-darkenl"></code>
                        <code class="theme-color-yellow-darkerm"></code>
                        <code class="theme-color-yellow-darkest"></code>
                </section>

                <section class="theme-color-orange">
                        <code class="theme-color-orange-default"></code>
                        <code class="theme-color-orange-lightes"></code>
                        <code class="theme-color-orange-lighter"></code>
                        <code class="theme-color-orange-lighten"></code>
                        <code class="theme-color-orange-default"></code>
                        <code class="theme-color-orange-darkenl"></code>
                        <code class="theme-color-orange-darkerm"></code>
                        <code class="theme-color-orange-darkest"></code>
                </section>

                <section class="theme-color-red">
                        <code class="theme-color-red-default"></code>
                        <code class="theme-color-red-lightes"></code>
                        <code class="theme-color-red-lighter"></code>
                        <code class="theme-color-red-lighten"></code>
                        <code class="theme-color-red-default"></code>
                        <code class="theme-color-red-darkenl"></code>
                        <code class="theme-color-red-darkerm"></code>
                        <code class="theme-color-red-darkest"></code>
                </section>
        </div>
</template>

<script>
export default {
        mounted: function () {
                for (let buf of document.getElementsByTagName('code')) {
                        buf.innerText = colorRGB2Hex(getComputedStyle(buf, null)['background-color'].split(','))
                }

                function colorRGB2Hex(rgb) {
                        let r = parseInt(rgb[0].split('(')[1])
                        let g = parseInt(rgb[1])
                        let b = parseInt(rgb[2].split(')')[0])
                        let hex = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
                        return hex.toUpperCase()
                }
        }
}
</script>