"use strict";
exports.__esModule = true;
// Copyright 2017 The Haohaoxiuche Team Authors. All right reserved.
// Use of this source that is governed by a Apache-style
// license that can be found in the LICENSE file.
//
// 京典一线网络技术（北京）有限公司 京典一线人才资源库 前端服务器端渲染
//
// @authors hjboss <hongjiangproject@gmail.com> 2017-10 $$
//
/// <reference path="./jdyxqq.com.d.tsx" />
var bodyParser = require("body-parser");
var compression = require("compression");
var cookieParser = require("cookie-parser");
var express = require("express");
var http = require("http");
var ioredis = require("ioredis");
var morgan = require("morgan");
var path = require("path");
var pm = require("pm");
var request = require("request");
var redis_1 = require("./configures/redis");
var setting_1 = require("./configures/setting");
var WebRender = /** @class */ (function () {
    function WebRender(configures) {
        if (configures === void 0) { configures = {}; }
        this.configures = configures;
    }
    WebRender.prototype.httpd = function () {
        var self = this;
        http.createServer(this.app()).listen(setting_1["default"].port, function () {
            console.log(WebRender.appname + ' running on port ' + setting_1["default"].port);
        });
    };
    WebRender.prototype.master = function (rootPath) {
        var master = pm.createMaster({
            pidfile: path.join(setting_1["default"].pathTmpdir, WebRender.appname + '.pid')
        });
        master.register(WebRender.name, path.join(rootPath, WebRender.appname + '-worker.js'), {
            listen: setting_1["default"].masters,
            addr: process.env.NODE_ENV === 'production' ? '127.0.0.1' : '0.0.0.0'
        });
        master.dispatch();
    };
    WebRender.prototype.worker = function () {
        var worker = http.createServer(this.app());
        pm.createWorker().ready(function (socket, port) {
            worker.emit('connection', socket);
        });
    };
    WebRender.prototype.app = function () {
        var app = express();
        var configures = this.configures;
        app.set('env', process.env.NODE_ENV || 'development');
        app.set('port', configures.port || setting_1["default"].port);
        app.use(compression());
        app.use('/assets', express.static(setting_1["default"].pathAssets));
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(cookieParser());
        app.use(morgan('combined'));
        app.use(function (req, res, next) {
            var cookies = req.cookies || {};
            var ip = (req.header('x-forwarded-for') || req.ip).split(':').pop();
            var userAgent = String(req.header('user-agent')).toLowerCase();
            if (/trident\/(5|6|7|8|9)/i.test(userAgent)) {
                return res.redirect(301, '/assets/browsers.html');
            }
            if (req.path === '/' && setting_1["default"].history) {
                if (/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(req.header('user-agent'))) {
                    return res.redirect(301, setting_1["default"].mobileURL.replace('127.0.0.1', req.hostname));
                }
                var jdyxLanguage = cookies.jdyxLanguage || null;
                if (!jdyxLanguage) {
                    jdyxLanguage = WebRender.supportLanguage(req);
                }
                return res.redirect("/" + jdyxLanguage + "/");
            }
            var extname = path.extname(req.path);
            if (extname && extname !== setting_1["default"].extname) {
                res.set('Content-Type', 'text/html');
                res.status(404).end(WebRender.error('404 Not Found'));
                return;
            }
            if (ip.indexOf('127') !== 0 && ip.indexOf('192') !== 0 && !cookies.jdyxCountry) {
                return WebRender.queryClientIP(ip).then(function (callback) {
                    var jdyxCountry = callback || {};
                    WebRender.controller(req, res, {
                        jdyxCountry: jdyxCountry,
                        jdyxLanguage: cookies.jdyxLanguage,
                        clientip: callback
                    });
                });
            }
            return WebRender.controller(req, res, {
                jdyxCountry: global.unescape(cookies.jdyxCountry),
                jdyxLanguage: cookies.jdyxLanguage
            });
        });
        return app;
    };
    WebRender.controller = function (req, res, configures) {
        var redis = new ioredis({ host: redis_1["default"].host, port: redis_1["default"].port, db: redis_1["default"].data });
        var prefix = redis_1["default"].prefix + WebRender.appname + '#' + WebRender.platform + '#' + req.path.split('/')[1];
        var cookies = req.cookies || {};
        if (process.env.NODE_ENV === 'production' && cookies.jdyxCountry) {
            return redis.get(prefix + '#' + cookies.jdyxCountry).then(function (callback) {
                if (!callback) {
                    return emitAPI();
                }
                return WebRender.html(req, res, JSON.parse(callback) || {});
            });
        }
        emitAPI();
        function emitAPI() {
            request({
                uri: setting_1["default"].apiPath + '/service/initialise',
                method: 'POST',
                form: {
                    parameters: JSON.stringify({
                        regions: configures.jdyxCountry,
                        device: 'PC',
                        lang: req.path.split('/')[1]
                    }),
                    appid: setting_1["default"].appID,
                    clientip: configures.clientip || '{}',
                    accessToken: setting_1["default"].appID
                }
            }, function (err, response, callback) {
                if (!err && response.statusCode == 200) {
                    var params = JSON.parse(callback)['data'] || {};
                    var key = prefix + '#' + params.regions;
                    redis.set(key, JSON.stringify(params));
                    redis.expire(key, redis_1["default"].expire);
                    redis.sadd(redis_1["default"].prefix + WebRender.appname, key);
                    return WebRender.html(req, res, params);
                }
                res.end(WebRender.error('500 Internal Server Error'));
            });
        }
    };
    WebRender.queryClientIP = function (ip) {
        return new Promise(function (resolve) {
            var uri = 'http://ip.taobao.com/service/getIpInfo.php?ip=' + ip;
            request(uri, function (err, response, callback) {
                if (!err && response.statusCode == 200) {
                    try {
                        var buffers = JSON.parse(callback);
                        return resolve(buffers.data);
                    }
                    catch (err) { }
                }
                resolve({});
            });
        });
    };
    WebRender.supportLanguage = function (req) {
        var jdyxLanguage = req.header('accept-language').toLowerCase();
        for (var _i = 0, _a = setting_1["default"].languages; _i < _a.length; _i++) {
            var buf = _a[_i];
            if (jdyxLanguage.toLowerCase().indexOf(buf) !== -1) {
                return buf;
            }
        }
        return setting_1["default"].languages[0];
    };
    WebRender.cookieOptions = function () {
        return {
            path: '/',
            maxAge: new Date(Date.now() + 2592000000)
        };
    };
    WebRender.html = function (req, res, configures) {
        if (configures === void 0) { configures = {}; }
        res.header('charset', 'utf8');
        res.header('Content-Type', 'text/html;charset=UTF-8');
        res.cookie('jdyxCountry', configures.regions, WebRender.cookieOptions());
        if (!req.cookies.jdyxLanguage) {
            res.cookie('jdyxLanguage', req.path.split('/')[1], WebRender.cookieOptions());
        }
        configures.website = configures.website || {};
        var website = configures.website[configures.lang] || configures.website['cn'] || {};
        res.end([
            '<!DOCTYPE html>',
            "<html lang=\"" + configures.language + "\" xml:lang=\"" + configures.language + "\">",
            '<head>',
            '<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />',
            '<meta charset="utf-8" />',
            '<meta name="viewport" content="width=device-width, initial-scale=1" />',
            '<meta name="renderer" content="webkit" />',
            '<meta name="referrer" content="always" />',
            "<title>" + website.title + "</title>",
            "<meta name=\"keywords\" content=\"" + website.keyword + "\" />",
            "<meta name=\"description\" content=\"" + website.description + "\" />",
            "<link rel=\"Shortcut Icon\" href=\"" + configures.favicon + "\" />",
            "<link rel=\"bookmark\" type=\"image/x-icon\" href=\"" + configures.favicon + "\" />",
            "<link rel=\"stylesheet\" type=\"text/css\" href=\"/assets/css/" + WebRender.appname + ".min.css\" />",
            "<script src=\"/assets/js/" + WebRender.appname + ".init.min.js\"></script>",
            '</head>',
            '<body>',
            "<div id=\"jdyx-" + configures.dom + "\" class=\"app\">",
            '<router-view></router-view>',
            '</div>',
            '<script>jdyxData=' + JSON.stringify(configures) + ';</script>',
            "<script src=\"/assets/js/" + WebRender.appname + ".min.js\"></script>",
            '</body>',
            '</html>',
            ''
        ].join(''));
    };
    WebRender.error = function (code) {
        return [
            '<html>',
            '<head><title>' + code + '</title></head>',
            '<body bgcolor="white">',
            '<center><h1>' + code + '</h1></center>',
            '<hr><center>Tengine/2.2.0</center>',
            '</body>',
            '</html>'
        ].join('');
    };
    WebRender.platform = 'PC';
    WebRender.appname = 'jdyxqq.com';
    return WebRender;
}());
exports["default"] = WebRender;
