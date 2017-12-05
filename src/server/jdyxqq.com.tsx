// Copyright 2017 The Haohaoxiuche Team Authors. All right reserved.
// Use of this source that is governed by a Apache-style
// license that can be found in the LICENSE file.
//
// 京典一线网络技术（北京）有限公司 京典一线人才资源库 前端服务器端渲染
//
// @authors hjboss <hongjiangproject@gmail.com> 2017-10 $$
//
/// <reference path="./jdyxqq.com.d.tsx" />
import * as bodyParser from 'body-parser'
import * as compression from 'compression'
import * as cookieParser from 'cookie-parser'
import * as express from 'express'
import * as http from 'http'
import * as ioredis from 'ioredis'
import * as morgan from 'morgan'
import * as path from 'path'
import * as pm from 'pm'
import * as request from 'request'
import * as qs from 'querystring'
import connect from './configures/redis'
import setting from './configures/setting'

export default class WebRender {
        private static readonly platform: string = 'PC'
        private static readonly appname: string = 'jdyxqq.com'

        constructor(private configures: any = {}) {
        }

        public httpd() {
                const self = this
                http.createServer(this.app()).listen(setting.port, () => {
                        console.log(WebRender.appname + ' running on port ' + setting.port)
                })
        }

        public master(rootPath: string) {
                let master = pm.createMaster({
                        pidfile: path.join(setting.pathTmpdir, WebRender.appname + '.pid')
                })
                master.register(WebRender.name, path.join(rootPath, WebRender.appname + '-worker.js'), {
                        listen: setting.masters,
                        addr: process.env.NODE_ENV === 'production' ? '127.0.0.1' : '0.0.0.0'
                })
                master.dispatch()
        }

        public worker() {
                let worker = http.createServer(this.app())
                pm.createWorker().ready((socket: any, port: any) => {
                        worker.emit('connection', socket)
                })
        }

        private app(): express.Express {
                let app = express()
                let configures = this.configures

                app.set('env', process.env.NODE_ENV || 'development')
                app.set('port', configures.port || setting.port)

                app.use(compression())
                app.use('/assets', express.static(setting.pathAssets))
                app.use(bodyParser.json())
                app.use(bodyParser.urlencoded({ extended: false }))
                app.use(cookieParser())
                app.use(morgan('combined'))

                app.use((req: express.Request, res: express.Response, next: any) => {
                        let cookies = req.cookies || {}
                        let ip = (req.header('x-forwarded-for') || req.ip).split(':').pop()
                        let userAgent = String(req.header('user-agent')).toLowerCase()

                        if (/trident\/(5|6|7|8|9)/i.test(userAgent)) {
                                return res.redirect(301, '/assets/browsers.html')
                        }

                        if (req.path === '/' && setting.history) {
                                if (/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(req.header('user-agent'))) {
                                        return res.redirect(301, setting.mobileURL.replace('127.0.0.1', req.hostname))
                                }

                                let jdyxLanguage = cookies.jdyxLanguage || null

                                if (!jdyxLanguage) {
                                        jdyxLanguage = WebRender.supportLanguage(req)
                                }

                                return res.redirect(`/${jdyxLanguage}/`)
                        }

                        let extname = path.extname(req.path)
                        if (extname && extname !== setting.extname) {
                                res.set('Content-Type', 'text/html')
                                res.status(404).end(WebRender.error('404 Not Found'))
                                return
                        }

                        if (ip.indexOf('127') !== 0 && ip.indexOf('192') !== 0 && !cookies.jdyxCountry) {
                                return WebRender.queryClientIP(ip).then((callback: any) => {
                                        let jdyxCountry = callback || {}

                                        WebRender.controller(req, res, {
                                                jdyxCountry: jdyxCountry,
                                                jdyxLanguage: cookies.jdyxLanguage,
                                                clientip: callback
                                        })
                                })
                        }

                        return WebRender.controller(req, res, {
                                jdyxCountry: global.unescape(cookies.jdyxCountry),
                                jdyxLanguage: cookies.jdyxLanguage
                        })
                })

                return app
        }

        private static controller(req: express.Request, res: express.Response, configures: any) {
                let redis = new ioredis({ host: connect.host, port: connect.port, db: connect.data })
                let prefix = connect.prefix + WebRender.appname + '#' + WebRender.platform + '#' + req.path.split('/')[1]
                let cookies = req.cookies || {}

                if (process.env.NODE_ENV === 'production' && cookies.jdyxCountry) {
                        return redis.get(prefix + '#' + cookies.jdyxCountry).then((callback: any) => {
                                if (!callback) {
                                        return emitAPI()
                                }

                                return WebRender.html(req, res, JSON.parse(callback) || {})
                        })
                }
                emitAPI()

                function emitAPI() {
                        request({
                                uri: setting.apiPath + '/service/initialise',
                                method: 'POST',
                                form: {
                                        parameters: JSON.stringify({
                                                regions: configures.jdyxCountry,
                                                device: 'PC',
                                                lang: req.path.split('/')[1]
                                        }),
                                        appid: setting.appID,
                                        clientip: configures.clientip || '{}',
                                        accessToken: setting.appID
                                }
                        }, (err: Error, response: any, callback: any) => {
                                if (!err && response.statusCode == 200) {
                                        let params = JSON.parse(callback)['data'] || {}
                                        let key = prefix + '#' + params.regions

                                        redis.set(key, JSON.stringify(params))
                                        redis.expire(key, connect.expire)
                                        redis.sadd(connect.prefix + WebRender.appname, key)

                                        return WebRender.html(req, res, params)
                                }

                                res.end(WebRender.error('500 Internal Server Error'))
                        })
                }
        }

        private static queryClientIP(ip: string): Promise<any> {
                return new Promise<any>(resolve => {
                        let uri = 'http://ip.taobao.com/service/getIpInfo.php?ip=' + ip

                        request(uri, (err: Error, response: any, callback: any) => {
                                if (!err && response.statusCode == 200) {
                                        try {
                                                let buffers = JSON.parse(callback)
                                                return resolve(buffers.data)
                                        } catch (err) { }
                                }

                                resolve({})
                        })
                })
        }

        private static supportLanguage(req: express.Request): string {
                let jdyxLanguage = req.header('accept-language').toLowerCase()

                for (let buf of setting.languages) {
                        if (jdyxLanguage.toLowerCase().indexOf(buf) !== -1) {
                                return buf
                        }
                }

                return setting.languages[0]
        }

        private static cookieOptions(): object {
                return {
                        path: '/',
                        maxAge: new Date(Date.now() + 2592000000)
                }
        }

        private static html(req: express.Request, res: express.Response, configures: any = {}) {
                res.header('charset', 'utf8')
                res.header('Content-Type', 'text/html;charset=UTF-8')
                res.cookie('jdyxCountry', configures.regions, WebRender.cookieOptions())
                if (!req.cookies.jdyxLanguage) {
                        res.cookie('jdyxLanguage', req.path.split('/')[1], WebRender.cookieOptions())
                }

                configures.website = configures.website || {}
                let website = configures.website[configures.lang] || configures.website['cn'] || {}
                res.end([
                        '<!DOCTYPE html>',
                        `<html lang="${configures.language}" xml:lang="${configures.language}">`,
                        '<head>',
                        '<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />',
                        '<meta charset="utf-8" />',
                        '<meta name="viewport" content="width=device-width, initial-scale=1" />',
                        '<meta name="renderer" content="webkit" />',
                        '<meta name="referrer" content="always" />',
                        `<title>${website.title}</title>`,
                        `<meta name="keywords" content="${website.keyword}" />`,
                        `<meta name="description" content="${website.description}" />`,
                        `<link rel="Shortcut Icon" href="${configures.favicon}" />`,
                        `<link rel="bookmark" type="image/x-icon" href="${configures.favicon}" />`,
                        `<link rel="stylesheet" type="text/css" href="/assets/css/${WebRender.appname}.min.css" />`,
                        `<script src="/assets/js/${WebRender.appname}.init.min.js"></script>`,
                        '</head>',
                        '<body>',
                        `<div id="jdyx-${configures.dom}" class="app">`,
                        '<router-view></router-view>',
                        '</div>',
                        '<script>jdyxData=' + JSON.stringify(configures) + ';</script>',
                        `<script src="/assets/js/${WebRender.appname}.min.js"></script>`,
                        '</body>',
                        '</html>',
                        ''
                ].join(''))
        }

        private static error(code: string): string {
                return [
                        '<html>',
                        '<head><title>' + code + '</title></head>',
                        '<body bgcolor="white">',
                        '<center><h1>' + code + '</h1></center>',
                        '<hr><center>Tengine/2.2.0</center>',
                        '</body>',
                        '</html>'
                ].join('')
        }
}
