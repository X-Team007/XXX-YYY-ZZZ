// Copyright 2017 The Haohaoxiuche Team Authors. All right reserved.
// Use of this source that is governed by a Apache-style
// license that can be found in the LICENSE file.
//
// 定义前端页面的多语言版本
//
// @authors hjboss <hongjiangproject@gmail.com> 2017-10 $$
import setting from '../config/setting'
import cnLanguages from './cn'
import zhLanguages from './zh'
import enLanguages from './en'
//import frLanguages from './fr'
//import esLanguages from './es'
//import ruLanguages from './ru'

let languages = {
        cn: cnLanguages,
        zh: zhLanguages,
        en: enLanguages,
        //fr: frLanguages,
        //es: esLanguages,
        //ru: ruLanguages
}

export function langType() {
        return (setting.history ? window.location.pathname : window.location.hash).split('/')[1]
}

export function lang(name) {
        let code = langType()

        if (!name) {
                return languages[code] || languages.cn
        }

        return languages[code] ? languages[code][name] : languages.cn[name] || ''
}

export default lang
