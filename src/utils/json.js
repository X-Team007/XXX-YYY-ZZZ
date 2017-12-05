// Copyright 2017 The Haohaoxiuche Team Authors. All right reserved. Use of this
// source that is governed by a Apache-style license that can be found in the
// LICENSE file.
//
// 返回 JSON 字符串及其对象函数
//
// @authors hjboss <hongjiangproject@gmail.com> 2017-10 $$
export default function json(parameters) {
        if (!parameters || typeof(parameters) === 'string') {
                try {
                        return JSON.parse(parameters || '{}')
                } catch (err) {}

                return {}
        }

        return JSON.stringify(parameters)
}
