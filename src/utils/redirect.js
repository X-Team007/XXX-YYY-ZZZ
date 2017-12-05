// Copyright 2017 The Haohaoxiuche Team Authors. All right reserved. Use of this
// source that is governed by a Apache-style license that can be found in the
// LICENSE file.
//
// 返回 URI 重定向跳转函数
//
// @authors hjboss <hongjiangproject@gmail.com> 2017-10 $$
import uriPath from './uri'
import setting from '../config/setting'

export default function redirect(uri) {
        if (setting.history) {
                window.location.href = uriPath(uri)
                return
        }
        window.location.hash = uriPath(uri)
}
