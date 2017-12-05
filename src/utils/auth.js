// Copyright 2017 The Haohaoxiuche Team Authors. All right reserved. Use of this
// source that is governed by a Apache-style license that can be found in the
// LICENSE file.
//
// 返回客户端登录用户基本信息
//
// @authors hjboss <hongjiangproject@gmail.com> 2017-10 $$
import cookie from './cookie'
import json from './json'
import storage from './storage'
import setting from '../config/setting'

export default function auth(parameters) {
        if (setting.history) {
                if (!parameters) {
                        return json(cookie.read(setting.authKey))
                }

                return cookie.write(setting.authKey, json(parameters))
        }

        if (!parameters) {
                return json(storage.read(setting.authKey))
        }

        return storage.write(setting.authKey, json(parameters))
}
