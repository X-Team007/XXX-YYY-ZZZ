// Copyright 2017 The Haohaoxiuche Team Authors. All right reserved. Use of this
// source that is governed by a Apache-style license that can be found in the
// LICENSE file.
//
// 返回客户端COOKIES常用操作
//
// @authors hjboss <hongjiangproject@gmail.com> 2017-10 $$
var doc = window.document

function read(key) {
        if (!key || !_has(key)) { return null }
        var regexpStr = "(?:^|.*;\\s*)" +
                escape(key).replace(/[\-\.\+\*]/g, "\\$&") +
                "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"
        return unescape(doc.cookie.replace(new RegExp(regexpStr), "$1"))
}

function each(callback) {
        var cookies = doc.cookie.split(/; ?/g)
        for (var i = cookies.length - 1; i >= 0; i--) {
                if (!trim(cookies[i])) {
                        continue
                }
                var kvp = cookies[i].split('=')
                var key = unescape(kvp[0])
                var val = unescape(kvp[1])
                callback(val, key)
        }
}

function write(key, data) {
        if (!key) { return }
        doc.cookie = escape(key) + "=" + escape(data) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/"
}

function remove(key) {
        if (!key || !_has(key)) {
                return
        }
        doc.cookie = escape(key) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/"
}

function clearAll() {
        each(function (_, key) {
                remove(key)
        })
}

function _has(key) {
        return (new RegExp("(?:^|;\\s*)" + escape(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(doc.cookie)
}

export default { read, each, write, remove, clearAll }