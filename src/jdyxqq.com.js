// Copyright 2017 The Haohaoxiuche Team Authors. All right reserved.
// Use of this source that is governed by a Apache-style
// license that can be found in the LICENSE file.
//
// 京典一线网络技术（北京）有限公司 京典一线人才资源库 前端页面系统
//
// @authors hjboss <hongjiangproject@gmail.com> 2017-10 $$
import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './config/routes'
import * as components from './components'
import * as utils from './utils'
import setting from './config/setting'
import './stylesheet/normalize.less'
import './index.html'

(function () {
        Vue.config.debug = setting.debug || false
        Vue.config.devtools = setting.debug || false
        Vue.use(VueRouter)

        const router = new VueRouter({
                routes,
                mode: setting.history ? 'history' : 'hash'
        })

        router.beforeEach(({
                path,
                meta
        }, from, next) => {
                let {
                        auth = false
                } = meta
                let state = Boolean(Object.keys(utils.auth()).length !== 0)

                if (auth && !state && /[a-zA-Z\-]{2,}\/signin$/i.test(path) === false) {
                        return next({
                                path: utils.uriPath(setting.pathSignin)
                        })
                }

                next()
        })

        Object.keys(components).forEach(key => {
                Vue.component(key.replace(/(\w)/, v => v.toUpperCase()), components[key])
        })

        new Vue({
                router
        }).$mount('#jdyx-' + setting.appID)
})()
