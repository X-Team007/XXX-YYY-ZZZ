// Copyright 2017 The Haohaoxiuche Team Authors. All right reserved. Use of this
// source that is governed by a Apache-style license that can be found in the
// LICENSE file.
//
// 返回服务器端接口的客户端函数
//
// @authors hjboss <hongjiangproject@gmail.com> 2017-10 $$
import axios from 'axios'
import auth from './auth'
import json from './json'
import redirect from './redirect'
import setting from '../config/setting'

export default function api(uri, parameters, callback) {
        axios({
                url: setting.pathAPI + uri,
                method: 'post',
                data: {
                        accessToken: auth().accessToken || '',
                        appID: setting.appID,
                        parameters: json(parameters),
                        timezone: (window.jdyxData || {}).timezone || '8.0'
                },
                transformRequest: [function (data) {
                        let buf = ''
                        for (let it in data) {
                                buf += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                        }
                        return buf
                }],
                headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                }
        }).then(response => {
                let responseData = response.data

                if (typeof (response) === 'string') {
                        responseData = json(response)
                }

                switch (responseData.code) {
                        case 404:
                                if (setting.debug) {
                                        console.log('API Not Found')
                                }
                                break

                        case 403:
                                return redirect(setting.pathSignin)

                        case 500:
                                if (setting.debug) {
                                        console.log('Internal Server Error: ' + responseData.msg)
                                }
                                alert('Internal Server Error')

                        default:
                                callback(responseData)
                }
        }).catch(err => {
                if (setting.debug) {
                        console.log('Network Connection Errors: ', err)
                }
                alert('Network Connection Errors')
        })
}