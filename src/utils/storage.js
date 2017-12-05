// Copyright 2017 The Haohaoxiuche Team Authors. All right reserved. Use of this
// source that is governed by a Apache-style license that can be found in the
// LICENSE file.
//
// 返回客户端数据存储常用操作
//
// @authors hjboss <hongjiangproject@gmail.com> 2017-10 $$
function localStorage() {
        return window.localStorage
}

function read(key) {
        return localStorage().getItem(key)
}

function write(key, data) {
        return localStorage().setItem(key, data)
}

function each(fn) {
        for (var i = localStorage().length - 1; i >= 0; i--) {
                var key = localStorage().key(i)
                fn(read(key), key)
        }
}

function remove(key) {
        return localStorage().removeItem(key)
}

function clearAll() {
        return localStorage().clear()
}

export default { read, each, write, remove, clearAll }