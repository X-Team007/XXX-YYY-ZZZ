<style lang="less" scoped>
@import "../../stylesheet/variables.less";

.viewport-password {
        .pure-form {
                padding: 0.48rem 0;
        }
}
</style>

<template>
        <div class="viewport-password panel">
                <h1>{{ lang.passwordHeader }}</h1>
                <form class="pure-form pure-form-aligned">
                        <div class="pure-control-group label-password">
                                <label>{{ lang.passwordOld }}</label>
                                <input type="password" />
                        </div>
                        <div class="pure-control-group label-password">
                                <label>{{ lang.passwordNew }}</label>
                                <input type="password" />
                        </div>
                        <div class="pure-control-group label-password">
                                <label>{{ lang.passwordReEntry }}</label>
                                <input type="password" />
                        </div>
                        <div class="pure-control-group label-submit">
                                <button type="button" class="pure-button pure-button-primary">
                                        {{ lang.passwordSubmit }}
                                </button>
                        </div>
                </form>
        </div>
</template>

<script>
import { lang, langType } from "../../locales"

export default {
        data: function () {
                return {
                        lang: lang(),
                        langCode: langType()
                }
        }
}
</script>

