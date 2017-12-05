// Copyright 2017 The Haohaoxiuche Team Authors. All right reserved.
// Use of this source that is governed by a Apache-style
// license that can be found in the LICENSE file.
//
// 京典一线网络技术（北京）有限公司 京典一线人才资源库 前端页面系统初始化
//
// @authors hjboss <hongjiangproject@gmail.com> 2017-10 $$
//
import FastClick from 'fastclick'
import * as icons from './icons'
import mobileArea from './components/mobileArea'

export function Initialization(configures) {
        configures = configures || {}

        if (!window['Promise']) {
                let es6Promise = configures.es6Promise || './js/es6-promise.min.js'
                document.writeln('<script src="' + es6Promise + '"></script>')
        }

        if ('addEventListener' in document) {
                document.addEventListener('DOMContentLoaded', () => {
                        FastClick.attach(document.body)
                }, false)
        }

        metaViewport(100, 1)
        styleSheets(configures)
        svgSprites(configures)

        window.mobileArea = mobileArea
        if (!window.__initMobileArea) {
                for (let key in window.mobileArea) {
                        let buf = String(mobileArea[key].name)
                        let ind = buf.indexOf(' (')

                        if (ind !== -1) {
                                mobileArea[key].name = buf.substring(ind + 2, buf.length - 1)
                        }
                }

                window.__initMobileArea = true
        }

        function metaViewport(baseFontSize, fontscale) {
                if (configures.metaViewport === false) {
                        return
                }

                let _baseFontSize = baseFontSize || 100
                let _fontscale = fontscale || 1

                let ua = navigator.userAgent
                let matches = ua.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i)
                let UCversion = ua.match(/U3\/((\d+|\.){5,})/i)
                let isUCHd = UCversion && parseInt(UCversion[1].split('.').join(''), 10) >= 80
                let isIOS = navigator
                        .appVersion
                        .match(/(iphone|ipad|ipod)/gi)

                let dpr = window.devicePixelRatio || 1
                if (!isIOS && !(matches && matches[1] > '534') && !isUCHd) {
                        dpr = 1
                }
                let scale = 1 / dpr

                let metaElement = document.querySelector('meta[name="viewport"]')
                if (!metaElement) {
                        metaElement = document.createElement('meta')
                        metaElement.setAttribute('name', 'viewport')
                        document
                                .head
                                .appendChild(metaElement)
                }

                metaElement.setAttribute('content', [
                        'width=device-width', 'user-scalable=no', 'initial-scale=' + scale,
                        'maximum-scale=' + scale,
                        'minimum-scale=' + scale
                ].join(','))
                document.documentElement.style.fontSize = (_baseFontSize / 2 * dpr * _fontscale) + 'px'
        }

        function styleSheets(configures) {
                let buffers = []

                let ua = navigator.userAgent
                let platform = navigator.platform

                if (ua.indexOf('Edge') !== -1) {
                        buffers.push('browser-engine-edge')

                } else if (ua.indexOf('Trident') !== -1) {
                        buffers.push('browser-engine-trident')

                } else if (ua.indexOf('AppleWebKit') !== -1) {
                        buffers.push('browser-engine-webkit')

                } else if (ua.indexOf('Gecko') !== -1) {
                        buffers.push('browser-engine-gecko')
                }

                if (ua.indexOf('Edge') !== -1) {
                        buffers.push('browser-agent-edge')

                } else if (ua.indexOf('Trident') !== -1) {
                        let ie = ua.indexOf('IE') === -1 ?
                                'browser-agent-ie1x' :
                                'browser-agent-ie'
                        buffers.push(ie)

                } else if (ua.indexOf('OPR') !== -1) {
                        buffers.push('browser-agent-opera')

                } else if (ua.indexOf('Firefox') !== -1) {
                        buffers.push('browser-agent-firefox')

                } else if (ua.indexOf('Chrome') !== -1) {
                        buffers.push('browser-agent-chrome')

                } else if (ua.indexOf('Safari') !== -1) {
                        buffers.push('browser-agent-safari')

                } else {
                        buffers.push('browser-agent-default')
                }

                if (platform.indexOf('Win') !== -1) {
                        buffers.push('browser-platform-windows')

                } else if (platform.indexOf('Mac') !== -1) {
                        buffers.push('browser-platform-mac')

                } else if (platform.indexOf('Linux') !== -1) {
                        buffers.push('browser-platform-linux')

                } else {
                        buffers.push('browser-platform-default')
                }

                if (ua.indexOf('MicroMessenger') !== -1) {
                        buffers.push('browser-device-wechat')

                } else if (ua.match(/(iPhone|iPod|Android|ios)/i)) {
                        buffers.push('browser-device-mobile')

                } else if (ua.indexOf('Xbox') !== -1) {
                        buffers.push('browser-device-xbox')

                } else {
                        buffers.push('browser-device-default')
                }

                if (configures.className) {
                        buffers.push(configures.className)
                }

                document.documentElement.className = buffers.join(' ')

                if (configures.lang) {
                        document.documentElement.lang = configures.lang
                }
        }

        function svgSprites(configures) {
                let script = (() => {
                        let scripts = document.getElementsByTagName('script')
                        return scripts[scripts.length - 1]
                })()

                const ready = (fn) => {
                        if (document.addEventListener) {
                                if (~['complete', 'loaded', 'interactive'].indexOf(document.readyState)) {
                                        setTimeout(fn, 0)
                                } else {
                                        const loadFn = () => {
                                                document.removeEventListener('DOMContentLoaded', loadFn, false)
                                                fn()
                                        }
                                        document.addEventListener('DOMContentLoaded', loadFn, false)
                                }
                        }
                }

                const before = (el, target) => {
                        target
                                .parentNode
                                .insertBefore(el, target)
                }

                const prepend = (el, target) => {
                        if (target.firstChild) {
                                before(el, target.firstChild)
                        } else {
                                target.appendChild(el)
                        }
                }

                if (script.getAttribute('data-injectcss') && !window['__iconfont__svg__cssinject__']) {
                        window['__iconfont__svg__cssinject__'] = true
                }

                ready(() => {
                        let domDiv = document.createElement('div')
                        let svgBuf = []
                        for (let name in configures.icons) {
                                svgBuf.push(configures.icons[name])
                        }
                        domDiv.innerHTML = '<svg>' + svgBuf.join('') + '</svg>'

                        let domSvg = domDiv.getElementsByTagName('svg')[0]
                        if (domSvg) {
                                domSvg.setAttribute('aria-hidden', 'true')
                                domSvg.style.position = 'absolute'
                                domSvg.style.width = '0px'
                                domSvg.style.height = '0px'
                                domSvg.style.overflow = 'hidden'
                                prepend(domSvg, document.body)
                        }
                })
        }
}
Initialization({
        icons: icons
})
