<style lang="less" scoped>
@import "../../stylesheet/variables.less";
</style>
<template>
        <div class="viewport-fulltime1st resume">
                 <div class="wrapper flex-layout flex-layout-raw step">
                        <div class="step-common step-common-3th step-active">
                                <em>{{ lang.fulltimeStep1 }}</em>
                        </div>
                        <div class="step-common step-common-3th step-active">
                                <em>{{ lang.fulltimeStep2 }}</em>
                        </div>
                        <div class="step-common step-common-3th step-active">
                                <em>{{ lang.fulltimeStep3 }}</em>
                        </div>
                  </div>
        </div>
</template>
<script>
import { lang, langType } from "../../locales";
export default {
        data: function () {
                let code = langType();
        }

}
</script>


