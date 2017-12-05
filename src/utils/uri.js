// Copyright 2017 The Haohaoxiuche Team Authors. All right reserved. Use of this
// source that is governed by a Apache-style license that can be found in the
// LICENSE file.
//
// 返回当前语言版本的完整 URI 地址
//
// @authors hjboss <hongjiangproject@gmail.com> 2017-10 $$
import setting from '../config/setting'

export default function uriPath(uri) {
        if (typeof (uri) === 'undefined') {
                return setting.history ? window.location.pathname : window.location.hash
        }

        if (uri.indexOf(':lang') !== -1 && setting.history) {
                return uri.replace(':lang', window.location.pathname.split('/')[1])
        }

        if (uri.indexOf(':lang') !== -1 && !setting.history) {
                return uri.replace(':lang', window.location.hash.split('/')[1])
        }

        return uri
}
