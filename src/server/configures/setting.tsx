// Copyright 2017 The Haohaoxiuche Team Authors. All right reserved.
// Use of this source that is governed by a Apache-style
// license that can be found in the LICENSE file.
//
// 定义应用服务器的主机、端口、Master-Worker模式和相关目录
//
// @authors hjboss <hongjiangproject@gmail.com> 2017-10 $$
import * as path from 'path';

export default {
	port: 10107,
	masters: [10107, 10109, 10116, 10125],
	extname: '.html',
	homepage: 'index.html',
	languages: ['cn', 'zh', 'fr', 'es', 'ru', 'en'],
	history: true,
	pathAssets: path.join(__dirname, '../../build'),
	pathTmpdir: process.env.NODE_ENV === 'production'
		? '/mnt/www/tmp'
		: path.join(__dirname, '../../tmp'),
	appID: 'a9c1734bfe494e74a8229fb8152ae475',
	appCode: '47fb349b27a6431ba9407b604a7fb988',
	apiPath: process.env.NODE_ENV !== 'production'
		? 'http://192.168.0.205/cgi-bin/ajax'
		: 'http://192.168.0.205/cgi-bin/ajax',
	mobileURL: process.env.NODE_ENV === 'production'
		? '/mobile/'
		: 'http://127.0.0.1:10207/',

};
